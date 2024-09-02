const express = require('express');
const fileController = require('../controllers/fileController')
const multer = require('multer');
const upload = multer();
const router = express.Router();

router.get('/', fileController.getImages);
router.get('/:id', fileController.getImage)
router.post('/upload', upload.single('image'), fileController.uploadImage);
router.put('/:id', upload.single('image'), fileController.updateImage);
router.delete('/:id', fileController.deleteImage);

module.exports = router;