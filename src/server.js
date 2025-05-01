import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '900mb' })); // Increase limit for Base64 images

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/teamDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// Mongoose Schema and Model
const memberSchema = new mongoose.Schema({
    name: { type: String, required: true },
    role: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: String, required: true },
    profileImage: { type: String }, // Store image as Base64 string
}, { timestamps: true });

const Member = mongoose.model('Member', memberSchema);

// Route to add a new member
app.post('/api/members', async (req, res) => {
    try {
        const { name, role, email, contact, profileImage } = req.body; // Image is sent as Base64
        const newMember = new Member({ name, role, email, contact, profileImage });
        await newMember.save();
        res.status(201).json(newMember);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to add member' });
    }
});

// Route to get all members
app.get('/api/members', async (req, res) => {
    try {
        const members = await Member.find();
        res.status(200).json(members);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch members' });
    }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));