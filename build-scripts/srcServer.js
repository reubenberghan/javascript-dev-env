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

app.listen(PORT, err => err ? console.log(err) : open(`http://localhost:${PORT}`));