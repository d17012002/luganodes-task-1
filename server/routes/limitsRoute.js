const express = require("express");
const router = express.Router();
const {
    setLimit,
    checkLimit
} = require("../controllers/limitController");

router.route("/setlimit").post(setLimit);
router.route("/checklimit").post(checkLimit);

module.exports = router;
