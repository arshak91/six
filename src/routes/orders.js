import { Router } from "express";

const routes = Router();


routes.post("/", (req, res) => {
  res.json(req.body)
})

routes.post("/item", (req, res) => {
  res.json(req.body)
})

routes.get("/", (req, res) => {
  res.json(req.body)
})

export default routes