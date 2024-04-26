const express = require("express");
const router = express.Router();
const mid1 = require("../middleware/mid1");
router.get("/", mid1, (req, res) => {
  res.send("hello world");
});
module.exports = router;
