const express = require('express');

const app = express();

const API_ROUTES = require('./routes/api.routes')

const sequelize = require('./utils/database');

//built-in middleware
app.use(express.urlencoded({
    extended: true
}))

//router level middleware
app.use('/api', API_ROUTES);

//application level middleware page not found
app.use(function(req,res,next){
    res.status(404).json({
        msg: 'Page not Found'
    })
})


//error handling middleware
app.use(function(err,req,res,next){
    res.json({
        err: err
    })
})


//sync sequelize schema to database
sequelize.sync()
.then((result) => {
    return app.listen(8000);
})
.then(()=> console.log('Listening at Port 8080'))
.catch(err => console.log(err));