require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./Database/db");
const port = process.env.PORT || 1000;

//Connecting the Database
connectDB();

app.use(cors());
app.use(express.json())

app.use("/api/users/", require("./Routes/userRoutes"));


app.get("/", (req, res) => {
  res.json({ message: "Hello from the server" });
});

app.listen(port, () => {
  console.log(`server is up http://localhost:${port}`);
});
