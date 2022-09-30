const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { userModel } = require("../model/user");
const userController = express.Router();

userController.post("/signup", async (req, res) => {
	const { email, password, age } = req.body;
	bcrypt.hash(password, 6, async function (err, hash) {
		// Store hash in your password DB.
		if (err) {
			res.status(500).send({ msg: "signup error" });
		} else {
			const newuser = new userModel({ email, password: hash, age });
            await newuser.save();
			res.status(200).send({ msg: "Singup successfull" });
		}
	});
});

userController.post("/login", async (req, res) => {
	const { email, password } = req.body;
	const user = await userModel.findOne({ email });
	// console.log(user);
	if (!user) {
		return res.status(404).send({ msg: "something really wrong." });
	} else {
		const hash = user.password;
		bcrypt.compare(password, hash, function (err, result) {
			// result == true
			if (err) {
				res.status(500).send({ msg: "Login Failed" });
			}
			if (result) {
				const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
				res.status(200).send({ msg: "Login Successfull", token });
			}
		});
	}
});

module.exports = { userController };
