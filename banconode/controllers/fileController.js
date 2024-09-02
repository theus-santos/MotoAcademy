const fileService = require('../services/fileService');

async function getImages(req, res) {
    try {
        const images = await fileService.getImages();
        res.status(200).json(images);
    } catch (error) {
        res.status(500).send(error)
    }
}

async function getImage(req, res) {
    const {id} = req.params;

    try {
        const image = await fileService.getImage(id);
        res.status(200).json(image);
    } catch (error) {
        res.status(500).send(error)
    }
}

async function uploadImage(req, res) {
    try {
        const result = await fileService.uploadImage(req.file);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function updateImage(req, res) {
    try {
        const result = await fileService.updateImage(req.file);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function deleteImage(req, res) {
    
}

module.exports = {
    getImages,
    getImage,
    uploadImage,
    updateImage,
    deleteImage
}