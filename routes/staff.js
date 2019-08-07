const express = require("express");
const router = express.Router();
const staffs = require("../controller/staffs.ctrl");

router.get("/", staffs.all);
router.get("/:id", staffs.detail);
router.put("/:id", staffs.edit);
router.delete("/:id", staffs.delete);

module.exports = router;
