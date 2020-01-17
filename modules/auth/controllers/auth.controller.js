const User = require('./../model/auth.model');

const jwt = require('../../../utils/jwt')

exports.register = (req, res, next) => {
    
    User.create({
        email: req.body.email,
        username: req.body.userName,
        password: req.body.password
    })
    .then(() => {
        res.json({
            msg: 'Inserted 1 row'
        })
    })
    .catch((err) => {
        console.log('HEre')
        return next(err)
    })
}

exports.showAll = (req, res, next) => {
    User.findAll()
    .then((result) => res.send(result))
    .catch((err) => next(err))
}

exports.login = (req, res, next) => {

    User.findAll({
        where: {
            username: req.body.userName,
            password: req.body.password
        }
    })
    .then((result) => {
        if(! result.length){
            return next({
                msg: 'Invalid Credentials'
            })
        }

        res.json({
            data: req.body,
            token: jwt.getToken(result[0])
        })
        
    })
    .catch(err => next(err))
}

exports.dashboard = (req, res, next) => {
    const currentLoginUserID = req.id;
    User.findAll({where: {
        id: currentLoginUserID
    }})
    .then(result => {
        res.json({
            email: result[0].email,
            username: result[0].username
        })
    })
    .catch(err => next(err))   
}