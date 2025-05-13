import Feedback from '../model/Feedback.js';

export const submitFeedback = async (req, res) => {
  try {
    const { rating, reason, connected, wantToHelp, userId, name } = req.body;

    if (!rating || !reason || !name) {
      return res.status(400).json({
        message: 'Please provide rating, reason, and name.',
      });
    }

    if (!userId) {
      return res.status(401).json({
        message: 'You need to log in before submitting feedback.',
      });
    }

    const feedback = new Feedback({
      userId,
      name, // 🆕 add name here
      rating,
      reason,
      connected: !!connected,
      wantToHelp: !!wantToHelp,
    });

    await feedback.save();

    res.status(201).json({ message: 'Feedback submitted successfully. Thank you!' });
  } catch (error) {
    console.error('Feedback submission error:', error);
    res.status(500).json({
      message: 'Something went wrong on our side. Please try again later.',
    });
  }
};

export const feedbackList = async (req, res) => {
  try {
    const feedbacklist = await Feedback.find().sort({ createdAt: -1 }); // show all feedbacks
    res.json({
      success: true,
      message: 'Feedback fetched successfully',
      feedbacklist,
    });
  } catch (error) {
    console.error('Error fetching feedback list:', error);
    res.status(500).json({ message: 'Failed to fetch feedbacks.' });
  }
};
