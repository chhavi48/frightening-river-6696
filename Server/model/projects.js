const mongoose = require("mongoose");
const projectSchema = mongoose.Schema({
	name: { type: String, required: true },
	member: { type: String, required: true },
	budget: { type: String, required: true },
	billing: { type: String, required: true },
});
const projectModel = mongoose.model("project", projectSchema);

module.exports = { projectModel };
