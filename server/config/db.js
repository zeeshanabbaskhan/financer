const mongoose = require('mongoose');

const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) {
        return mongoose.connection;
    }

    const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/financer';
    try {
        await mongoose.connect(uri);
        console.log('MongoDB connected');
        return mongoose.connection;
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
        if (!process.env.VERCEL) {
            process.exit(1);
        }
        throw err;
    }
};

module.exports = connectDB;
