import multer from 'multer';

const storage = multer.diskStorage({
	destination:(req, file, cb) => {
		cb(null, 'upload/')
	},
	filename : (req, file, cb) => {
		cd(null, Date.now()+'-'+file.originalname)
	}
});

cosnt fileUpload = multer({
	storage:storage
})

export {fileUpload}