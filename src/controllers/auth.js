import jwt from "jsonwebtoken"


export const login = async (req, res) => {
  const {email, password} = req.body
  const secret = process.env.JWT_SECRET || "hello"
  const token = jwt.sign({
    email,
  }, secret, {
    expiresIn: "1h"
  })
  res.json({
    token
  })
}

