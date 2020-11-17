const {check, validationResult} = require('express-validator');

exports.validateUser = [
  check('email').isEmail().withMessage('Ivalid Email '),
  check('password').isLength({ min: 1 }).withMessage('Password is required'),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty())
        return res.status(422).json({errors: errors.array()});
      next();
    },
  ];