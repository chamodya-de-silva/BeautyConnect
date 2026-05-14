const Booking = require('../models/Booking');

// Helper: check if a time slot is already booked (conflict prevention)
const isSlotTaken = async (professional, date, time, excludeId = null) => {
    const startDate = new Date(date);
    startDate.setUTCHours(0, 0, 0, 0);
    const endDate = new Date(date);
    endDate.setUTCHours(23, 59, 59, 999);

    const query = {
        professional,
        date: { $gte: startDate, $lte: endDate },
        time,
        status: { $ne: 'cancelled' }
    };
    if (excludeId) query._id = { $ne: excludeId };
    const existing = await Booking.findOne(query);
    return !!existing;
};

// @route  POST /api/bookings
exports.createBooking = async (req, res) => {
    try {
        const { professional, service, location, date, time } = req.body;

        if (!professional || !service || !date || !time) {
            return res.status(400).json({ message: 'Professional, service, date, and time are all required.' });
        }

        // Prevent double-booking
        const conflict = await isSlotTaken(professional, date, time);
        if (conflict) {
            return res.status(409).json({ message: 'This time slot has just been taken. Please choose another time.' });
        }

        const newBooking = new Booking({
            client: req.user.id,
            professional,
            service,
            location,
            date,
            time,
            status: 'upcoming'
        });

        await newBooking.save();

        // Populate professional name and address for the response
        await newBooking.populate('professional', 'name address profilePicture');

        res.status(201).json(newBooking);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// @route  GET /api/bookings
exports.getClientBookings = async (req, res) => {
    try {
        const bookings = await Booking
            .find({ client: req.user.id })
            .populate('professional', 'name address profilePicture')
            .sort({ date: 1 });
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// @route  PUT /api/bookings/:id/cancel
exports.cancelBooking = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) return res.status(404).json({ message: 'Booking not found.' });
        if (booking.client.toString() !== req.user.id) return res.status(403).json({ message: 'Not authorized.' });
        if (booking.status === 'cancelled') return res.status(400).json({ message: 'Booking is already cancelled.' });

        booking.status = 'cancelled';
        await booking.save();
        res.json({ message: 'Booking cancelled successfully.', booking });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// @route  PUT /api/bookings/:id/reschedule
exports.rescheduleBooking = async (req, res) => {
    try {
        const { date, time } = req.body;
        if (!date || !time) return res.status(400).json({ message: 'New date and time are required.' });

        const booking = await Booking.findById(req.params.id);
        if (!booking) return res.status(404).json({ message: 'Booking not found.' });
        if (booking.client.toString() !== req.user.id) return res.status(403).json({ message: 'Not authorized.' });

        // Prevent conflict on new slot (excluding this booking)
        const conflict = await isSlotTaken(booking.professional, date, time, booking._id);
        if (conflict) {
            return res.status(409).json({ message: 'The new time slot is already booked. Please choose a different time.' });
        }

        booking.date = date;
        booking.time = time;
        booking.status = 'upcoming';
        await booking.save();
        await booking.populate('professional', 'name address profilePicture');

        res.json(booking);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// @route  GET /api/bookings/availability
exports.getAvailability = async (req, res) => {
    try {
        const { professional, date } = req.query;
        if (!professional || !date) {
            return res.status(400).json({ message: 'Professional ID and date are required.' });
        }

        const startDate = new Date(date);
        startDate.setUTCHours(0, 0, 0, 0);
        const endDate = new Date(date);
        endDate.setUTCHours(23, 59, 59, 999);

        const bookings = await Booking.find({
            professional,
            date: { $gte: startDate, $lte: endDate },
            status: { $ne: 'cancelled' }
        });

        const bookedTimes = bookings.map(b => b.time);
        res.json({ bookedTimes });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

