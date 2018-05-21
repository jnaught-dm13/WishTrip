// import required packages
require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const {
  SESSION_SECRET,
  PORT
} = process.env;

const dbCtrl = require(`${__dirname}/controllers/databaseController`);

const session = require("express-session");

// Define express invoked as "app"
const app = express();

// Define Port from .env
const port = PORT || 3001;

app.use(json());
app.use(cors());

// Create Session with express-session
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
    // cookie: {
    //   maxAge: 3600 * 24 * 7
    // }
  })
);

//Database Endpoints
app.get('/api/getData', dbCtrl.getData);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
