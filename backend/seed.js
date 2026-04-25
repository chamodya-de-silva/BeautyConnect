const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

dotenv.config();

const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected for seeding...');

        // Clear existing users to prevent duplicates if run multiple times
        await User.deleteMany({});
        console.log('Cleared existing users');

        // Create test users
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash('password123', salt);

        const users = [
            {
                name: 'Client User',
                email: 'client@example.com',
                password: hashedPassword,
                role: 'client'
            },
            {
                name: 'Salon Owner User',
                email: 'owner@example.com',
                password: hashedPassword,
                role: 'salon_owner'
            },
            {
                name: 'Beautician User',
                email: 'beautician@example.com',
                password: hashedPassword,
                role: 'beautician'
            }
        ];

        await User.insertMany(users);
        console.log('Database seeded with test users:');
        console.table(users.map(u => ({ email: u.email, role: u.role, password: 'password123' })));

        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDatabase();
