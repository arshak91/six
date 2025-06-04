import jwt from "jsonwebtoken"

export const loginMiddle = async (req, res, next) => {
  const {email, password} = req.body
  if (!email) {
    return res.status(401).json({
      message: "email@ chka!"
    })
  }
  next()
}

export const authMiddleware = async (req, res, next) => {
  try {
    const secret = process.env.JWT_SECRET || "hello";
    const result = jwt.verify(req.headers.token, secret);
    console.log(result);
    next()
  } catch (error) {
    return res.status(401).json({
      message: "invalid token"
    })
  }
}
