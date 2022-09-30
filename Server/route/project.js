const express = require("express");
const { projectModel } = require("../model/projects");
const projectController = express.Router();

projectController.get("/", async (req, res) => {
	const project = await projectModel.find();
	// console.log(project);
	if (project.length > 0) {
		res.status(200).send(project);
	} else {
		res.status(500).status({ msg: "not available any projects." });
	}
});

projectController.post("/create", async (req, res) => {
	const newproject = new projectModel(req.body);
	await newproject
		.save()
		.then(() => {
			res.status(200).send({ msg: "Project is created" });
		})
		.catch((e) => {
			res.status(200).send({ msg: "something is really wrong" });
		});
});

projectController.delete("/delete/:projectId", async (req, res) => {
	const { projectId } = req.params;
	// console.log(projectId);
	const deletedNote = await projectModel.findOneAndDelete({
		_id: projectId,
		// userId: req.body.userId,
	});
	if (deletedNote) {
		res.status(200).send("Deleted");
	} else {
		res.send("couldn't delete");
	}
});

projectController.patch("/edit/:projectId", async (req, res) => {
	const { projectId } = req.params;
	const updateNote = await projectModel.findOneAndUpdate(
		{ _id: projectId },
		req.body
	);
	if (updateNote) {
		res.send("Updated");
	} else {
		res.send("couldn't Updated");
	}
});

module.exports = { projectController };
