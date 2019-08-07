const express = require("express");
const router = express.Router();

const staffRoute = require("./staff");
const staffAuthRoute = require("./staff-auth");
router.use("/staff", staffRoute);
router.use("/staff-auth", staffAuthRoute);

module.exports = router;
