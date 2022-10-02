const express = require("express");
const { clientModel } = require("../model/clients");

const clientController = express.Router();

clientController.get("/", async (req, res) => {
	const client = await clientModel.find();
	// console.log(client);
	if (client.length > 0) {
		res.status(200).send(client);
	} else {
		res.status(500).status({ msg: "not available any client." });
	}
});

clientController.post("/create", async (req, res) => {
	const newclient = new clientModel(req.body);
	console.log(newclient);
	await newclient
		.save()
		.then(() => {
			res.status(200).send({ msg: "client data is created." });
		})
		.catch((e) => {
			res.status(200).send({ msg: "something is really wrong" });
		});
});

module.exports = { clientController };
