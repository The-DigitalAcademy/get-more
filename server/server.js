require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./Database/db");
const port = process.env.PORT || 10000;

connectDB();

app.use(cors());

app.use(express.json());

app.use("/api", require("./Routes/routes"));

app.get("/", (req, res) => {
  res.json({ message: "Hello from the server" });
});

app.listen(port, () => {
  console.log(`server is up http://localhost:${port}`);
});

// Handling Error
process.on("unhandledRejection", (err) => {
  console.log(`An error occurred: ${err.message}`);
  server.close(() => process.exit(1));
});
