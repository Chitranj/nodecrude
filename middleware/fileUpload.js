import multer from 'multer';
import fs from 'fs';
import path from 'path';

// Upload folder path
const uploadPath = path.join(process.cwd(), 'upload');

// 📁 Folder auto create
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
	destination:(req, file, cb) => {
		cb(null, 'upload/')
	},
	filename : (req, file, cb) => {
		cb(null, Date.now()+'-'+file.originalname)
	}
});

const fileUpload = multer({
	storage:storage,
	limits:{fileSize:1000000},
	fileFilter:(req, file, cb)=> {
		if(file.mimetype === "image/jpeg" ||file.mimetype === "image/png" ||file.mimetype === "image/jpg") {
			cb(null, true);
		}
		else {
			cb(new Error("Invalid file type"), false);
		}
	}
});

export {fileUpload}