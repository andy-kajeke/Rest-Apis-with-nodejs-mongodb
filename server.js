const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.listen(6000, ()=> {console.log('server running at port: 6000')});

mongoose.connect(
    process.env.DB_CONNECTION, { useNewUrlParser: true }, ()=> console.log('Connected to mongodb')
);

//import routes
const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute)