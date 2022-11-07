var express = require('express'),
bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('./database/index');

const userRoute = require('./routes/user.route');

var app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/user', userRoute);



app.listen(3000,function(){
    console.log('Im alive! and listening on port 3000');
});