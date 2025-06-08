import jwt from "jsonwebtoken"
import fs from "fs"
import bcrypt from "bcrypt"

export const login = async (req, res) => {
  const {email, password} = req.body
  const secret = process.env.JWT_SECRET || "hello"
  const token = jwt.sign({
    email
  }, secret, {
    expiresIn: "2h"
  })
  res.json({
    token
  })
}

export const register = async (req, res) => {
  // const {name, surname, email, age, password} = req.body
  const salt = bcrypt.genSaltSync(+process.env.ROUND ?? 10);
  console.log(salt);
  
  const pass = bcrypt.hashSync(req.body.password, salt);
  console.log(pass);
  
  const data = JSON.parse(fs.readFileSync("./db/users.json"))
  data.push({...req.body, password: pass})
  fs.writeFileSync("./db/users.json", JSON.stringify(data))
  res.json({
    data
  })
}

