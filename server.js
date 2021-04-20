//import dependencies di dalam server.js
const express = require("express");
const cors = require("cors");
const user = require("./controllers/userController");
const app = express();

//setup middleware di dalam server.js
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//setup controller di dalam server.js
app.use("/api/user", user);

//setup listener di server.js
app.listen(8000, () => console.log("server berjalan di port 8000"));
