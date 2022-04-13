const express = require('express');
const router = express.Router();
const db  = require('./dbConnection');
const { signupValidation, loginValidation } = require('./validation');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
 
 
router.post('/login', loginValidation, (req, res, next) => {
  db.query(
    `SELECT * FROM Users WHERE emailID = ${db.escape(req.body.email)};`,
    (err, result) => {
      // user does not exists
      if (err) {
        throw err;
        return res.status(400).send({
          msg: err
        });
      }
      if (!result.length) {
        return res.status(401).send({
          msg: 'Email or password is incorrect!'
        });
      }
      // check password
	  console.log(req.body.password,result[0]['pass']);
      bcrypt.compare(
        req.body.password,
        result[0]['pass'],
        (bErr, bResult) => {
          // wrong password
          if (bErr) {
			console.log('Passwords did not match');
            throw bErr;
            return res.status(401).send({
              msg: 'Email or password is incorrect!'
            });
          }
          if (bResult) {
			console.log('Passwords matched');
            const token = jwt.sign({id:result[0].UserID},'the-super-strong-secrect',{ expiresIn: '1h' });
            db.query(
              `UPDATE Users SET last_login = now() WHERE UserID = '${result[0].UserID}'`
            );
            return res.status(200).send({
              msg: 'Logged in!',
              token,
              user: result[0]
            });
          }
          return res.status(401).send({
            msg: 'Username or password is incorrect!'
          });
        }
      );
    }
  );
});
 
module.exports = router;