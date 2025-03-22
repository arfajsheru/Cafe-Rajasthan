import userModel from '../model/userModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  return emailRegex.test(email);
};
const createToken = id => {
  return jwt.sign({id}, process.env.JWT_SECRET);
};

// Login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Checking if all fields are provided
    if (!email || !password) {
      return res.json({ success: false, message: "All fields are required" });
    }

    // Checking if user exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User doesn't exist" });
    }

    // Validating password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    // Generating JWT token
    const token = createToken(user._id);

    return res.json({ success: true, message: "User login successful", token });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Login failed, please try again" });
  }
};

// Register user
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Checking all fields are required 
    if (!name || !email || !password) {
      return res.json({ success: false, message: "All fields are required" });
    }

    // Checking if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: "User already exists" });
    }

    // Validate email format
    if (!validateEmail(email)) {
      return res.json({ success: false, message: "Please enter a valid Email" });
    }

    // Check password length (minimum 8 characters)
    if (password.length < 8) {
      return res.json({ success: false, message: "Password must be at least 8 characters long" });
    }

    // Hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Creating new user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    // Saving user to database
    const user = await newUser.save();
    
    // Creating JWT token
    const token = createToken(user._id);

    return res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Registration failed, please try again" });
  }
};

export {loginUser, registerUser};
