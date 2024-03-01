const joi = require('joi');

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

  next();
};

module.exports = { validateNote };
