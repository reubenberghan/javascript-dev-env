import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const PORT = 3000;

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, { logLevel: 'warn', publicPath: config.output.publicPath }));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../src/index.html')));

app.get('/recipes', (req, res) => {
  res.json([
    { "id": 1, "title": "Fish Tacos", "ingredients": [ "Fish", "Tacos" ], "steps": [ "Cook fish", "Put in tacos" ] },
    { "id": 2, "title": "Ham Sandwhich", "ingredients": [ "Ham", "Bread", "Mustard" ], "steps": [ "Spread mustard on bread", "Add ham" ] },
    { "id": 3, "title": "Banana Smoothie", "ingredients": [ "Banana", "Almond Milk" ], "steps": [ "Blend banana and almond milk", "Serve" ] }
  ]);
});

app.listen(PORT, err => err ? console.log(err) : open(`http://localhost:${PORT}`));
