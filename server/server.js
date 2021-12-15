const express = require('express');
const cors = require('cors');

const app = express();

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};



// var corsOptions = {
//     origin: 'https://localhost:5000'
// }

// middlewares

// app.use(cors(corsOptions));
app.use(allowCrossDomain);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers
const router = require('./routes/userEmailRouter.js');
app.use('/api/useremails', router)

app.get("/", (req, res) => {
    res.send("hello welcome to my app");
})

const PORT = process.env.PORT ||  5000;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});