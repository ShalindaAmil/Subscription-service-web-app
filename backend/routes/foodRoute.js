import express from "express"
import { addFood, listFood, removeFood } from "../controllers/foodcontroller.js"
import multer from "multer"
import path from "path"

const foodRouter=express.Router();

//image storage engine
const storage = multer.diskStorage({
    destination: 'upload',
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const extension = path.extname(file.originalname);
      cb(null, `${uniqueSuffix}${extension}`);
    }
  });
const upload=multer({storage:storage})

foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood)

export default foodRouter;