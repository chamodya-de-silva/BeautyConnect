const User = require('../models/User');

exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password').populate('favorites', 'name address profilePicture rating reviews role services');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.updateProfile = async (req, res) => {
    const { name, phone, address, profilePicture } = req.body;
    
    try {
        let user = await User.findById(req.user.id);
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (name) user.name = name;
        if (phone !== undefined) user.phone = phone;
        if (address !== undefined) user.address = address;
        if (profilePicture !== undefined) user.profilePicture = profilePicture;

        await user.save();
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.addFavorite = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        const { providerId } = req.body;
        
        if (!user.favorites.includes(providerId)) {
            user.favorites.push(providerId);
            await user.save();
        }
        
        res.json(user.favorites);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.removeFavorite = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        const { providerId } = req.params;
        
        user.favorites = user.favorites.filter(id => id.toString() !== providerId);
        await user.save();
        
        res.json(user.favorites);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
