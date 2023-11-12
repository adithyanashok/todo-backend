import userModel from "../model/user.model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export const register = async (req, res, next) => {
    console.log(`usermodel ${req.body}`)



    try {
        const user = await userModel.findOne({ email: req.body.email });
        if (user) return res.json({ status: false, message: "User already exist!" });

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new userModel({ ...req.body, password: hash });
        const savedUser = await newUser.save();
        const token = jwt.sign({ id: savedUser._id, email: savedUser.email }, process.env.JWT, { expiresIn: "9d" });
        const { password, ...others } = savedUser._doc

        res.status(200).json({ status: true, token: token })
    } catch (error) {
        throw error;
    }
}

export const signin = async (req, res, next) => {
    try {
        const user = await userModel.findOne({ email: req.body.email });
        if (!user) return res.json({ status: false, message: "User not found!" });

        const isCorrect = await bcrypt.compare(req.body.password, user.password);

        if (!isCorrect) return res.json({ status: false, message: "Wrong password!" });

        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT, { expiresIn: "9d" });
        const { password, ...others } = user._doc

        res.status(200).json({ status: true, token: token })
    } catch (err) {
        throw new Error(err);
    }
};
