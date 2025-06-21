import { Router } from "express";
import multer from "multer"
import { uploadfile } from "../controllers/upload.js";
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
    
const __dirname = dirname(fileURLToPath(import.meta.url));
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './images')
  },
  filename: function (req, file, cb) {
    console.log(req.body);
    console.log(file);
    const mimeType = file.originalname.split(".")[1]
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, req.body.dirname + '-' + uniqueSuffix+`.${mimeType}`)
  }
})
const upload = multer({
  storage: storage
})
const routes = Router();


routes.post("/", upload.single("file"), uploadfile)

export default routes