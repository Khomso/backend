const express = require("express");
const router = express.Router();
const userCtrl = requie("../controllers/user.js");

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);

module.exports = router;
