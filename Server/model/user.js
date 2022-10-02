const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
	email: {
		type: String,
		require: true,
		index: true,
		unique: true,
		sparse: true,
	},
	password: { type: String, required: true },
	age: Number,
});
const userModel = mongoose.model("user", userSchema);

module.exports = { userModel };
