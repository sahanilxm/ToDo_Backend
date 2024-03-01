const express = require('express');
const multer = require('multer');

const router = express.Router();
const upload = multer({ dest: "./imagesUpload/" });
const { createNote, getNote, getAllNote, updateNote, deleteNote } = require('../controllers/note.controller.js');


router.post("/create", upload.single('image'), createNote);
router.get("/:id", getNote);
router.get("/", getAllNote);
router.put("/update/:id", upload.single('image'), updateNote);
router.delete("/delete/:id", deleteNote);

module.exports = router;
