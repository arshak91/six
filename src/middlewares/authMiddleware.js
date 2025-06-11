import jwt from "jsonwebtoken"
import fs from "fs"

export const loginMiddle = async (req, res, next) => {
  const {email, password} = req.body
  if (!email) {
    return res.status(401).json({
      message: "email@ chka!"
    })
  }
  const users = JSON.parse(fs.readFileSync("./db/users.json"));
  let validUser = false
  for (const user of users) {
    if (user.email === email) {
      validUser = true;
      req.user = user;
      break;
    }
  }
  validUser ? next() : res.status(401).json({
    message: "User@ goyutyun chuni!"
  })
}

export const authMiddleware = async (req, res, next) => {
  const secret = process.env.JWT_SECRET;
  let validToken = false;
  let errorMessage = "";
  let email = ""
  jwt.verify(req.headers.token, secret, (err, decoded) => {
    if (err) {
      console.log(err);
      errorMessage = err.message
    } else {
      validToken = true
    }
    email = decoded.email
  });
  req.user = {
    email
  }
  if (validToken) {
    next()
  } else {
    return res.status(401).json({
      message: errorMessage
    })
  }
}
