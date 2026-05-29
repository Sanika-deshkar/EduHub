import { User } from "../models/user.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import TryCatch from "../middlewares/TryCatch.js";

export const register = TryCatch(async (req, res) => {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });
    if (user) return res.status(400).json({
        message: "User already exists",
    });

    const hashPassword = await bcrypt.hash(password, 10);

    await User.create({
        name,
        email,
        password: hashPassword,
    });

    res.status(201).json({
        message: "Registration successful! Please login.",
    });
});

export const loginUser = TryCatch(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({
        message: "No user with this email",
    });

    const mathPassword = await bcrypt.compare(password, user.password);

    if (!mathPassword)
        return res.status(400).json({
            message: "Wrong Password",
        });

    const token = jwt.sign({ _id: user._id }, process.env.Jwt_Sec, {
        expiresIn: "15d",
    });

    res.json({
        message: `Welcome Back ${user.name}`,
        user,
        token,
    });
});

export const myProfile = TryCatch(async (req, res) => {
    const user = await User.findById(req.user._id);
    res.json({ user });
});

// Resets a password directly by email — no verification email required.
export const forgotPassword = TryCatch(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user)
        return res.status(404).json({
            message: "No user with this email",
        });

    user.password = await bcrypt.hash(password, 10);

    await user.save();

    res.json({
        message: "Password updated! Please login.",
    });
});
