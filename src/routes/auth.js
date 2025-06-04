import { Router } from "express";
import { login } from "../controllers/auth.js";
import { loginMiddle } from "../middlewares/authMiddleware.js"
const routes = Router()

routes.post("/registration", (req, res) => {
  const {name, surname, email, age, password} = req.body
  res.json({
    body: req.body || {},
    params: req.params,
    query: req.query
  })
})

routes.post("/login", loginMiddle, login)
export default routes