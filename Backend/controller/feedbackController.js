import Feedback from "../model/Feedback.js"

export const submitFeedback = async (req, res) => {
  try {
    const { rating, reason, connected, wantToHelp, userId } = req.body;

    const feedback = new Feedback({
      userId,
      rating,
      reason,
      connected,
      wantToHelp
    });

    await feedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully.' });

  } catch (error) {
    console.error('Submit feedback error:', error);
    res.status(500).json({ message: 'Something went wrong.' });
  }
};
