'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
import {saveSave} from "./functions/saveSave"
import {getSave} from "./functions/getSave"

const router = express.Router();

app.get("/", async (req, res) => {
  res.send("hello, world!")
});

app.put("/save", async (req, res) => {
  const data = req.body;
  const response = await saveSave(client, functions, data);
  res.send(response)
});

app.get("/get/:saveName", async (req, res) => {
  const response = await getSave(client, req.params.saveName);
  res.send(response)
})


app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);
