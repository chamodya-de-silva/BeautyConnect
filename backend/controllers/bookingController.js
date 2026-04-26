const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
    try {
        const { service, location, date, time } = req.body;
        const newBooking = new Booking({
            client: req.user.id,
            service,
            location,
            date,
            time
        });
        await newBooking.save();
        res.status(201).json(newBooking);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getClientBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ client: req.user.id }).sort({ date: 1 });
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.cancelBooking = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) return res.status(404).json({ message: 'Booking not found' });
        if (booking.client.toString() !== req.user.id) return res.status(401).json({ message: 'Not authorized' });

        booking.status = 'cancelled';
        await booking.save();
        res.json(booking);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.rescheduleBooking = async (req, res) => {
    try {
        const { date, time } = req.body;
        const booking = await Booking.findById(req.params.id);
        if (!booking) return res.status(404).json({ message: 'Booking not found' });
        if (booking.client.toString() !== req.user.id) return res.status(401).json({ message: 'Not authorized' });

        booking.date = date;
        booking.time = time;
        booking.status = 'upcoming'; // Just in case it was cancelled
        await booking.save();
        res.json(booking);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
