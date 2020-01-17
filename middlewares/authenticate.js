const jwt = require('../utils/jwt');

module.exports = function (req, res, next) {
    let token;
  
    if (req.headers['x-acces-token']) {
      token = req.headers['x-access-token'];
    }
    if (req.headers['authorization']) {
      token = req.headers['authorization'];
    }
    if (req.headers['token']) {
      token = req.headers['token'];
    }
    if (req.query['token']) {
      token = req.query['token'];
    }
    if (token) {
      jwt.verifyToken(token, function(err,id){
        if(err){
            return next(err)
        }
         req.id = id;
         return next()
      })
    }
    else {
      next({
        msg: "Token not provided"
      })
    }
  }