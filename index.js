import { synonyms, translate } from "./apis/ReversoAPI.js"
import translator from "./apis/TranslatorAPI.js"

import express from 'express';
const app = express();
const ID = '12345678';
const port = 5000;

app.set(app.json);

app.get('/v1/:id/:text', async (req, res) => {
  if (req.params.id && req.params.id === ID) {
    if (req.params.text) {
      const result = await translate(req.params.text);

      res.send(result);
    } else {
      res.sendStatus(400).send(null);
    }
  } else {
    res.sendStatus(401).send(null);
  }
});

app.get('/v1s/:id/:text', async (req, res) => {
  if (req.params.id && req.params.id === ID) {
    if (req.params.text) {
      const result = await synonyms(req.params.text);

      res.send(JSON.stringify(result));
    } else {
      res.sendStatus(400).send(null);
    }
  } else {
    res.sendStatus(401).send(null);
  }
});

app.get('/v2/:id/:text', async (req, res) => {
  if (req.params.id && req.params.id === ID) {
    if (req.params.text) {
      const result = await translator(req.params.text);

      res.send(result);
    } else {
      res.sendStatus(400).send(null);
    }
  } else {
    res.sendStatus(401).send(null);
  }
});

app.listen(process.env.PORT || port, () => console.log(`Listening on port ${port}`));
