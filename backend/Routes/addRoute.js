import express from 'express';
import multer from 'multer';
import { addPhoto } from '../controller/addController.js';

const photoRouter = express.Router();

//Image Storage Engine


const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
});

const upload = multer({storage:storage});

photoRouter.post("/add", upload.single("image"), addPhoto);

export default photoRouter