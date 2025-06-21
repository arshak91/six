export const uploadfile = (req, res) => {
  console.log("body: ", req.body);
  console.log("file: ", req.file);
  const imageUrl = `http://localhost:3000/images/${req.file.filename}`
  const order = {
    ...req.body,
  }
  res.json({
    status: 1,
    message: "image created",
    imageUrl
  })
}