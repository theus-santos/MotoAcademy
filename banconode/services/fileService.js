const fs = require('fs').promises;
const path = require('path');
const mysql = require('mysql2/promise');
const config = require('../config/config');

const imageDirectory = path.join(__dirname, '../uploads');

async function getImages() {
    const connection = await mysql.createConnection(config);
    const [results] = await connection.query('SELECT * FROM `images`');

    return results;
}

async function getImage(id) {
    const connection = await mysql.createConnection(config);
    const sql = 'SELECT * FROM `images` WHERE `id` = ?'; 
    const values = [+id];

    const image = await connection.execute(sql, values);
    console.log(image);
    return { 
        filename: image[0][0].filename, 
        path: image[0][0].path 
    };
}

async function uploadImage(file) {
    const filePath = path.join(imageDirectory, file.originalname);
    await fs.writeFile(filePath, file.buffer);

    const connection = await mysql.createConnection(config);
    const sql = 'INSERT INTO `images`(`filename`, `path`) VALUES (?, ?)';
    const values = [file.originalname, filePath];
    await connection.execute(sql, values);

    return { 
        filename: file.originalname, 
        path: filePath 
    };
}

async function updateImage(file) {
    const filePath = path.join(imageDirectory, file.originalname);
    await fs.writeFile(filePath, file.buffer);

    const connection = await mysql.createConnection(config);
    const sql = 'UPDATE `images` SET `filename` = ?, `path` = ? WHERE `id` = ?';
    const values = [file.originalname, filePath];
    await connection.execute(sql, values);

    return { 
        filename: file.originalname, 
        path: filePath 
    };
}

async function deleteImage() {

}

module.exports = {
    getImages,
    getImage,
    uploadImage,
    updateImage,
    deleteImage
}