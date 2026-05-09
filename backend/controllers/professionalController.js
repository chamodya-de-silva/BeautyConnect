const User = require('../models/User');

// @route   GET /api/professionals
// @desc    Get all professionals (salons and beauticians) with optional filtering
// @access  Public
exports.getProfessionals = async (req, res) => {
    try {
        const { service, location, query, minPrice, maxPrice, minRating, role } = req.query;

        // Base query
        let dbQuery = { role: { $in: ['salon_owner', 'beautician'] } };
        
        if (role) {
            dbQuery.role = role;
        }

        if (query) {
            dbQuery.name = { $regex: query, $options: 'i' };
        }

        if (location) {
            dbQuery.address = { $regex: location, $options: 'i' };
        }

        // In a real app, services and ratings would be stored in the User model or a linked Profile model
        // We'll return all and let frontend filter mock data for now if fields aren't present
        
        const professionals = await User.find(dbQuery).select('-password');
        
        const allServices = [
            'Hair Cut', 'Hair Trim', 'Hair Styling', 'Hair Coloring', 'Keratin Treatment',
            'Party Makeup', 'Bridal Makeup', 'HD Makeup', 'Saree Draping',
            'Basic Facial', 'Gold Facial', 'Acne Treatment Facial', 'Detan Treatment',
            'Manicure', 'Pedicure', 'Nail Art', 'Gel Nails', 'Acrylic Nails',
            'Full Body Waxing', 'Eyebrow Threading', 'Eyelash Extensions',
            'Head Massage', 'Body Massage', 'Spa Treatment',
            'Bridal Package', 'Men’s Hair Cut', 'Beard Trimming',
            'Kids Hair Cut', 'Laser Hair Removal', 'Hydra Facial'
        ];

        // Add mock data for missing fields to support frontend requirements
        const enrichedProfessionals = professionals.map(prof => {
            const profObj = prof.toObject();
            if (!profObj.profilePicture) {
                profObj.profilePicture = 'https://images.unsplash.com/photo-1522337360788-8b13fee7a3af?w=400&h=300&fit=crop';
            }
            if (!profObj.rating) profObj.rating = (Math.random() * (5 - 3.5) + 3.5).toFixed(1);
            if (!profObj.reviews) profObj.reviews = Math.floor(Math.random() * 200) + 10;
            if (!profObj.services) {
                // Assign 3 to 6 random services to each mock professional
                const shuffled = allServices.sort(() => 0.5 - Math.random());
                profObj.services = shuffled.slice(0, Math.floor(Math.random() * 4) + 3);
            }
            if (!profObj.priceRange) profObj.priceRange = '$' + (Math.floor(Math.random() * 50) + 20) + ' - $' + (Math.floor(Math.random() * 100) + 80);
            return profObj;
        });

        res.json(enrichedProfessionals);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// @route   GET /api/professionals/:id
// @desc    Get professional by ID
// @access  Public
exports.getProfessionalById = async (req, res) => {
    try {
        const professional = await User.findById(req.params.id).select('-password');
        if (!professional) {
            return res.status(404).json({ message: 'Professional not found' });
        }
        res.json(professional);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ message: 'Professional not found' });
        }
        res.status(500).send('Server Error');
    }
};
