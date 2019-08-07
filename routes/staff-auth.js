const express = require("express");
const router = express.Router();
const staffs = require("../controller/staffs.ctrl");

router.post("/signin", staffs.signin);
router.post("/signup", staffs.signup);

module.exports = router;
