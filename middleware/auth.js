const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header("Authorization");

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }
  // Verify token
  try {
    jwt.verify(token, "secret", (error, decoded) => {
      console.log(decoded);
      if (error) {
        return res.status(401).json({ msg: "Token is not valid" });
      } else {
        req.user = decoded;
        if (req.user.role == "admin") {
          console.log("admin is running");
          next();
        } else {
          return res.status(401).json({ msg: "Admin can access only" });
        }
      }
    });
  } catch (err) {
    console.error("something wrong with auth middleware");
    res.status(500).json({ msg: "Server Error" });
  }
};
