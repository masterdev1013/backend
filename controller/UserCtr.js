const config = require("../config/db");
const bcrypt = require("bcryptjs");
// const userinfoSchema = require("../models/userinfo.js");
const keys = require("../config/keys");
// const { db } = require("../models/userinfo.js");
const { json } = require("body-parser");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { token } = require("morgan");
const { use } = require("passport");

//! @api        /v1/api/register
//! @params     no
//! @comment    Register

exports.signup = async (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.json({ msg: "Email already exist!" });
    } else {
      const newUser = new User(req.body);
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
};

//! @api        /v1/api/login
//! @params     no
//! @comment    Login

exports.signin = async (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (!user) {
      return res.json({ msg: "User not Found!" });
    } else {
      bcrypt.compare(req.body.password, user.password).then((isM) => {
        if (isM) {
          const payload = { id: user.id, email: user.email, role: user.role };
          {
            payload;
          }
          jwt.sign(payload, "secret", { expiresIn: 3600 }, (err, token) => {
            return res.json({ token: "bearer " + token });
          });
        } else {
          return res.json({ msg: "Password Incorrect" });
        }
      });
    }
  });
};
