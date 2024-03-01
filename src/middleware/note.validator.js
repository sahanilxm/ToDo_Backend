const joi = require('joi');


// validator to validate the schema of a note
const validateNote = (req, res, next) => {
  const schema = joi.object({
    title : joi.string().max(255).required(),
    description: joi.string().max(255).required()
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ 
        error: error.details[0].message 
    });
  }

  next(); // if note gets validated, then transfer to the controller
};

module.exports = { validateNote };
