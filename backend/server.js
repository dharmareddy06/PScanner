const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo').default;
const User = require('./models/User');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: 'http://localhost:5173', // Frontend URL
    credentials: true,
}));
app.use(express.json());

// Database Connection
mongoose
    .connect(process.env.MONGO_URI || 'mongodb://localhost:27017/mediscan')
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.error('MongoDB Connection Error:', err));

// Session Middleware
app.use(session({
    secret: 'your_secret_key_here', // In production, use separate .env variable
    resave: false,
    saveUninitialized: false, // Don't create session until something is stored
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI || 'mongodb://localhost:27017/mediscan',
        collectionName: 'sessions'
    }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24, // 1 day
        httpOnly: true, // Client JS cannot access cookie
        sameSite: 'lax',
        secure: false // Set to true in production with HTTPS
    }
}));

// Routes
app.get('/', (req, res) => {
    res.send('Health Prescription Scanner API is running');
});

// Authentication Routes

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
app.post('/api/auth/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ success: false, message: 'User already exists' });
        }

        const user = await User.create({
            name,
            email,
            password,
        });

        if (user) {
            // Create Session
            req.session.user = {
                _id: user._id,
                name: user.name,
                email: user.email,
            };

            res.status(201).json({
                success: true,
                user: req.session.user,
                message: 'Registration successful'
            });
        } else {
            res.status(400).json({ success: false, message: 'Invalid user data' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

// @route   POST /api/auth/login
// @desc    Auth user & create session
// @access  Public
app.post('/api/auth/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (user && (await user.matchPassword(password))) {
            // Create Session
            req.session.user = {
                _id: user._id,
                name: user.name,
                email: user.email,
            };

            res.json({
                success: true,
                user: req.session.user,
                message: 'Login successful'
            });
        } else {
            res.status(401).json({ success: false, message: 'Invalid email or password' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

// @route   GET /api/auth/me
// @desc    Check current session
// @access  Private
app.get('/api/auth/me', (req, res) => {
    if (req.session.user) {
        res.json({
            success: true,
            user: req.session.user
        });
    } else {
        res.status(401).json({ success: false, message: 'Not authorized' });
    }
});

// @route   POST /api/auth/logout
// @desc    Destroy session
// @access  Private
app.post('/api/auth/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Could not log out' });
        }
        res.clearCookie('connect.sid');
        res.json({ success: true, message: 'Logged out successfully' });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
