const jwt = require('jsonwebtoken');

//use JWT_SECRET key here
function getToken(id){
    return jwt.sign({object: id}, 'Hello_123');
}

function verifyToken(token, cb){
    jwt.verify(token, 'Hello_123', function(err, decode){
        if(err){
            return cb(err)
        }
        cb(null, decode.object.id);
    })
}

module.exports = {getToken, verifyToken};