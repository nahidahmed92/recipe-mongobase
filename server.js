const express = require("express");
const app = express();
const bodyparser = require("body-parser");
require("dotenv").config();
const port = process.env.PORT || 5000;
app.use(bodyparser.json());
app.use("/", require("./routes/route1"));
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
