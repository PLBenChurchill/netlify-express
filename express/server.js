'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
import faunadb from "faunadb"
const functions = {
  Ref: faunadb.query.Ref,
  Paginate: faunadb.query.Paginate,
  Get: faunadb.query.Get,
  Match: faunadb.query.Match,
  Select: faunadb.query.Select,
  Index: faunadb.query.Index,
  Create: faunadb.query.Create,
  Collection: faunadb.query.Collection,
  Join: faunadb.query.Join,
  Call: faunadb.query.Call,
} = faunadb.query;

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


export async function saveSave(client, functions, save) {
  const doc = await client.query(
    functions.Create(
      functions.Collection('saves'),
      {
        data: save
      }
    )
  );
  return doc;
}

export async function getSave(client, saveName) {
  try {
    return await client.query(
      functions.Get(functions.Match(functions.Index('saves_by_name'), [saveName]))
    )
  } catch (e) {
    console.log(e)
    return {};
  }
}


module.exports = app;
module.exports.handler = serverless(app);
