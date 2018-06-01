import GreetingComponent from './GreetingComponent';
import { getRecipes } from './api/recipeApi';

import './index.css';

const name = 'Reuben';
const el = GreetingComponent(name);

document.body.appendChild(el);

getRecipes()
  .then(data => {
    // const div = document.createElement('div');
    // let divBody = '';

    // data.reduce((recipeHtml, recipe) => {

    // }, divBody);
    console.log(data); // eslint-disable-line no-console
  })
  .catch(err => console.log(err)); // eslint-disable-line no-console
