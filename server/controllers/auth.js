const User = require('../models/user');
const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try {
        if (!req.body.fullName || !req.body.email || !req.body.password) {
            return res.status(StatusCodes.BAD_REQUEST).send({ msg: "Enter all the fields" });
        }
        const user = await User.create({ ...req.body });
        const token = user.createJWT();
        return res.status(StatusCodes.CREATED).send('account created');
    } catch (err) {
        console.log(err);
        return res.status(StatusCodes.BAD_REQUEST).send({ msg: err._message });

    }

}

const logIn = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(StatusCodes.BAD_REQUEST).send({ msg: "Enter the email or password" })
    }
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(StatusCodes.BAD_REQUEST).send({ msg: "Email not exist" })
    }
    const isPasswordCorrect = await user.camparePassword(password);
    if (!isPasswordCorrect) {
        return res.status(StatusCodes.BAD_REQUEST).send({ msg: "Password Mismatch" });
    }
    const token = user.createJWT();
    delete user.password;
    console.log(user);
    res.cookie('token', token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
    }).status(StatusCodes.OK).send(user);
}
const profile = async (req, res) => {
    const { token } = req.cookies;
    if (!token) return res.status(500).send('token not find');

    const payload = jwt.verify(token, process.env.JWT_SECRET);
    console.log(payload);
    const user = await User.findOne({ _id: payload.userId }).select("-password");
    console.log(user);
    // delete user.password;
    res.status(StatusCodes.OK).send(user);
}

const logout = async (req, res) => {
    res.clearCookie("token").status(200).send('logout');
}


module.exports = { register, logIn, logout, profile };


