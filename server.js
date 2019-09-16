// const express = require("express");
// const path = require("path");
// const PORT = process.env.PORT || 3001;
// const app = express();


import config from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import recordRoutes from './routes/RecordRoutes';

config.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3001;

app.use('./routes/RecordRoutes.js', recordRoutes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// when a random route is inputed
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to this API.',
}));

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

export default app;
