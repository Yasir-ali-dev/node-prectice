const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const { createUser, dashboard } = require("../controllers/user-controller");

router.route("/login").post(createUser);
router.route("/dashboard").get(auth, dashboard);

module.exports = router;
