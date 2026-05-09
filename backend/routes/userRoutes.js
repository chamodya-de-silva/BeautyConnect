const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const userController = require('../controllers/userController');

// @route   GET /api/users/profile
// @desc    Get current user profile
// @access  Private
router.get('/profile', auth, userController.getProfile);

// @route   PUT /api/users/profile
// @desc    Update user profile
// @access  Private
router.put('/profile', auth, userController.updateProfile);

// @route   POST /api/users/favorites
// @desc    Add a favorite professional
// @access  Private
router.post('/favorites', auth, userController.addFavorite);

// @route   DELETE /api/users/favorites/:providerId
// @desc    Remove a favorite professional
// @access  Private
router.delete('/favorites/:providerId', auth, userController.removeFavorite);

module.exports = router;
