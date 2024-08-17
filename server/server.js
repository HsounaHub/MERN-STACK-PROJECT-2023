const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
require("dotenv").config();

const PORT = process.env.PORT;

app.use(cors({credentials: true,origin: "http://localhost:3000"}),
express.json(),
express.urlencoded({extended:true}),
cookieParser(),
);

require('./Config/mongoose.config');
require('./Routes/app.route')(app)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`) );