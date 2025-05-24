import express from "express";
import fs from "fs"
import "dotenv/config"

const app = express()
const port = process.env.PORT ?? 3000;
// const port = "jhdbyvegv"
app.use(express.json())

app.post("/users", (req, res) => {
console.log('post: ', req.method, req.url);
console.log("body: ", req.body);
const { name } = req.body;
console.log("name: ", name);
fs.writeFileSync('./db.json', JSON.stringify({id: 1, ...req.body}))

  res.json({
    url: req.url,
    method: req.method,
    body: req.body ?? ""
  })
})

app.get("/users", (req, res) => {
console.log('get: ', req.method, req.url);
console.log("query: ", req.query);
const data = fs.readFileSync("./db.json", {
  encoding: "utf8"
})

  res.json({
    url: req.url,
    method: req.method,
    query: req.query
  })
})

app.get("/users/:id", (req, res) => {
console.log('get: ', req.method, req.url);
console.log("params: ", req.params);

const data = JSON.parse(fs.readFileSync("./db.json", {
  encoding: "utf8"
}))
console.log(data.id);
console.log(req.params.id);

const user = data.id == req.params.id ? data : {}

  res.json({
    url: req.url,
    method: req.method,
    query: req.query,
    user
  })
})

app.put("/users", (req, res) => {
console.log('put: ', req.method, req.url);

  res.json({
    url: req.url,
    method: req.method
  })
})

app.delete("/users/:id", (req, res) => {
  console.log('delete: ', req.method, req.url);

  console.log("params: ", req.params);

  res.json({
    url: req.url,
    method: req.method,
    params: req.params
  })
})

app.use((req, res) => {
  console.log(req.url);
  console.log(req.method);
  res.json({
    name: "John",
    url: req.url,
    method: req.method
  })
})


app.listen(port, (err) => {
  if (err) {
    console.log("Err: ", err.message);
  } else console.log(`Server running on ${port} port`);
})