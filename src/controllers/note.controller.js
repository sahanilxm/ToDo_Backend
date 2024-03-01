const pool = require("../config/db.config.js");

const createNote = async (req, res) => {
  try {
    const { title, description } = req.body;

    let imageURL = null;
    if(req.file){
      imageURL = req.file.path;
    }

    const newNote = await pool.query(
      'INSERT INTO notes (title, description, image_url) VALUES($1, $2, $3) RETURNING *', 
      [title, description, imageURL]
    );
    res.status(201).json(newNote.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      error: "Internal server error",
    });
  }
};

const getNote = async (req, res) => {
  try {
    const { id } = req.params;

    const note = await pool.query(
      'SELECT * FROM notes WHERE note_id = $1', 
      [id]
    );
    res.status(200).json(note.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      error: "Internal server error",
    });
  }
};

const getAllNote = async (req, res) => {
  try {
    const { page, pageSize } = req.query;
    const pageNumber = parseInt(page) || 1;
    const size = parseInt(pageSize) || 3;
    const offset = (pageNumber - 1) * size;

    const allNotes = await pool.query(
      'SELECT * FROM notes ORDER BY note_id OFFSET $1 LIMIT $2',
      [offset, size]
    );

    let totalCount = await pool.query('SELECT COUNT(*) FROM notes');
    totalCount = parseInt(totalCount.rows[0].count);

    res.status(200).json({
      currentPage: pageNumber,
      totalPages: Math.ceil(totalCount / size),
      notes: allNotes.rows,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      error: "Internal server error",
    });
  }
};

const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    let imageURL = null;
    if(req.file){
      imageURL = req.file.path;
    }

    const updateNote = await pool.query(
      'UPDATE notes SET title = $1, description = $2, image_url = $3 WHERE note_id = $4',
      [title, description, imageURL, id]
    );

    res.status(202).json("Note get updated!");
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ 
        error: "Internal server error" 
    });
  }
};

const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query(
      'DELETE FROM notes WHERE note_id = $1',
      [id]);
    res.status(202).json("Note gets deleted!");
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ 
        error: "Internal server error" 
    });
  }
};

module.exports = { createNote, getNote, getAllNote, updateNote, deleteNote };
