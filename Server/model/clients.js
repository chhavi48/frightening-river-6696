const mongoose = require("mongoose");
const clientSchema = mongoose.Schema({
	name: { type: String, required: true },
	project: { type: String, required: true },
	email: { type: String, required: true },
	business: { type: String, required: true },
	// others: {
	// 	tax: { type: Number, required: true },
	// 	discount: { type: Number, required: true },
	// 	due_terms: { type: String, required: true },
	// },
});
const clientModel = mongoose.model("client", clientSchema);

module.exports = { clientModel };
