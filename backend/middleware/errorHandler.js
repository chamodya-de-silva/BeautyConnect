/**
 * Global error handling middleware.
 * Must be registered LAST in server.js (after all routes).
 * 
 * Usage in controllers: just call next(err) instead of res.status(500).json(...)
 */

// 404 handler — catches any unmatched routes
const notFound = (req, res, next) => {
    const error = new Error(`Not found — ${req.originalUrl}`);
    error.status = 404;
    next(error);
};

// Central error handler
const errorHandler = (err, req, res, next) => {
    // Log full error in development
    if (process.env.NODE_ENV !== 'production') {
        console.error('❌ ERROR:', err.stack || err.message);
    }

    const statusCode = err.status || err.statusCode || 500;

    // Mongoose CastError (invalid ObjectId)
    if (err.name === 'CastError') {
        return res.status(400).json({ message: 'Invalid ID format.' });
    }

    // Mongoose duplicate key
    if (err.code === 11000) {
        const field = Object.keys(err.keyValue || {})[0] || 'field';
        return res.status(400).json({ message: `A record with this ${field} already exists.` });
    }

    // Mongoose validation error
    if (err.name === 'ValidationError') {
        const messages = Object.values(err.errors).map(e => e.message);
        return res.status(400).json({ message: messages.join('. ') });
    }

    // JWT errors
    if (err.name === 'JsonWebTokenError') {
        return res.status(401).json({ message: 'Invalid token. Please log in again.' });
    }
    if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ message: 'Session expired. Please log in again.' });
    }

    res.status(statusCode).json({
        message: err.message || 'An unexpected server error occurred.',
        ...(process.env.NODE_ENV !== 'production' && { stack: err.stack })
    });
};

module.exports = { notFound, errorHandler };
