import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const app = express();
const PORT = process.env.PORT || 8080;

/* eslint-disable no-console */

app.use(compression());
app.use(express.static(path.join(__dirname, '../dist/')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));

app.get('/recipes', (req, res) => {
  res.json([
    { "id": 1, "title": "Fish Tacos", "ingredients": [ "Fish", "Tacos" ], "steps": [ "Cook fish", "Put in tacos" ] },
    { "id": 2, "title": "Ham Sandwhich", "ingredients": [ "Ham", "Bread", "Mustard" ], "steps": [ "Spread mustard on bread", "Add ham" ] },
    { "id": 3, "title": "Banana Smoothie", "ingredients": [ "Banana", "Almond Milk" ], "steps": [ "Blend banana and almond milk", "Serve" ] }
  ]);
});

app.listen(PORT, err => err ? console.error(err) : open(`http://localhost:${ PORT }`));
