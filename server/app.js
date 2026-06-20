require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const connectDB = require('./config/db');
const errorHandler = require('./middlewares/errorHandler');
const requestLogger = require('./middlewares/requestLogger');

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));
app.use(requestLogger);

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/groups', require('./routes/groupRoutes'));
app.use('/api/transactions', require('./routes/transactionRoutes'));
app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/reminders', require('./routes/reminderRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/bank-accounts', require('./routes/bankAccountRoutes'));
app.use('/api/friends', require('./routes/friendRoutes'));
app.use('/api/contacts', require('./routes/contactRoutes'));
app.use('/api/reserved-money', require('./routes/reservedMoneyRoutes'));
app.use('/api/payment-requests', require('./routes/paymentRequestRoutes'));

if (!process.env.VERCEL) {
    app.use(express.static(path.join(__dirname, 'public')));

    app.get('*', (req, res) => {
        const requestedPath = req.path === '/' ? '/index.html' : req.path;
        const filePath = path.join(__dirname, 'public', requestedPath);
        const htmlPath = requestedPath.endsWith('.html') ? filePath : filePath + '.html';

        const possiblePaths = [
            filePath,
            htmlPath,
            path.join(__dirname, 'public', requestedPath, 'index.html'),
            path.join(__dirname, 'public', requestedPath.replace(/\/$/, ''), 'index.html'),
            path.join(__dirname, 'public', 'index.html'),
        ];

        for (const p of possiblePaths) {
            if (fs.existsSync(p) && fs.statSync(p).isFile()) {
                return res.sendFile(p);
            }
        }

        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });
}

app.use(errorHandler);

module.exports = app;
