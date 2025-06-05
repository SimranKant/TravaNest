const express = require("express");
const router = express.Router();
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const reviewController = require("../controllers/users.js");

router
  .route("/signup")
  .get(reviewController.renderSignUpForm)
  .post(wrapAsync(reviewController.signUp));

router
  .route("/login")
  .get(reviewController.renderLoginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    wrapAsync(reviewController.login)
  );
router.get("/logout", reviewController.logout);

module.exports = router;
