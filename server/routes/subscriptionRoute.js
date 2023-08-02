const express = require("express");
const router = express.Router();
const {
    dailyUpdate,
    subscribeCurrency
} = require("../controllers/subscriptionController");

router.route("/subscribe").post(dailyUpdate);
router.route("/subscribe/currency").post(subscribeCurrency);
// router.route("/signin").post(signIn);
// router.route("/signin/verify").post(verifyLogin);

module.exports = router;
