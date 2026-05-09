const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const auth = require('../middleware/auth');

router.get('/availability', bookingController.getAvailability);
router.post('/', auth, bookingController.createBooking);
router.get('/', auth, bookingController.getClientBookings);
router.put('/:id/cancel', auth, bookingController.cancelBooking);
router.put('/:id/reschedule', auth, bookingController.rescheduleBooking);

module.exports = router;
