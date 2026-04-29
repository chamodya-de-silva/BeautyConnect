const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Database Connection Error: ${error.message}`);
        console.log('Server is running without database connection (fallback mode).');
        // Removed process.exit(1) to allow the server to keep running
    }
};

module.exports = connectDB;
