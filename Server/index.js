
const express = require("express");
const { connection } = require("./config/db");
const { clientController } = require("./route/client");
const { projectController } = require("./route/project");
const { userController } = require("./route/user");
require("dotenv").config();
PORT = process.env.PORT || 8080;
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	res.status(200).send({ msg: "Home Page" });
});
// app.use(authentication)

app.use("/user", userController);

app.use("/project", projectController);
app.use("/client", clientController);

app.listen(PORT, async () => {
	try {
		await connection;
		console.log("Connected to DB");
	} catch (e) {
		console.log("Does not Connect To Database", e);
	}
});

