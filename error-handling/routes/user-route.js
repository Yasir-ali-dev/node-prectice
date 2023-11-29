const express = require("express");
const router = express.Router();
const { getAllUser, createUser } = require("../controllers/user-controller");
router.route("/").get(getAllUser).post(createUser);
module.exports = router;
