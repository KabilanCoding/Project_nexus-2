const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/techy-software', { useNewUrlParser: true, useUnifiedTopology: true });

const FeedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Feedback = mongoose.model('Feedback', FeedbackSchema);

// Route for feedback submission
app.post('/feedback', (req, res) => {
  const newFeedback = new Feedback(req.body);
  newFeedback.save().then(() => res.json('Feedback saved!')).catch(err => res.status(400).json('Error: ' + err));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
