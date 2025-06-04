import { Router } from "express";

const routes = Router()

routes.post("/registration", (req, res) => {
  // console.log('/registration body', req.body);
  // console.log('/registration params', req.params);
  // console.log('/registration query', req.query);
  const {name, surname, email, age, password} = req.body
  // check user by email
  
  
  res.json({
    body: req.body || {},
    params: req.params,
    query: req.query
  })
})

routes.post("/login", (req, res) => {
  const {email, password} = req.body
  res.json(req.body)
})


export default routes