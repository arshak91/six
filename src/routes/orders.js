import { Router } from "express";
<<<<<<< HEAD
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { createOrder } from "../controllers/order.js";
=======
>>>>>>> bb9319bc1267f52ddf9530e450202c15853e024e

const routes = Router();


<<<<<<< HEAD
routes.post("/", authMiddleware, createOrder)
=======
routes.post("/", (req, res) => {
  res.json(req.body)
})
>>>>>>> bb9319bc1267f52ddf9530e450202c15853e024e

routes.post("/item", (req, res) => {
  res.json(req.body)
})

routes.get("/", (req, res) => {
  res.json(req.body)
})

export default routes