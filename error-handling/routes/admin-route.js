const express = require("express");
const router = express.Router();
const {
  getAllAdmins,
  createAdmin,
} = require("../controllers/admin-controller");
router.route("/").get(getAllAdmins).post(createAdmin);
module.exports = router;
