import ReactDOM from 'react-dom';

import GreetingComponent from './components/GreetingComponent';
import greeting from './greeting';
import { getRecipes } from './api/recipeApi';

import './index.css';

const name = 'Reuben';
const el = <GreetingComponent greeting={ greeting } name={ name } />;

ReactDOM.render(el, document.getElementById('root'));

getRecipes()
  .then(data => {
    const div = document.createElement('div');

    let divBody = data.reduce((recipeHtml, recipe) => {
      return recipeHtml += `<div data-id="${ recipe.id }">
        <h2>${ recipe.title }</h2>
        <h3><u>Ingredients</u></h3>
        <ul>
          ${ recipe.ingredients.reduce((ingredientHtml, ingredient) => ingredientHtml += `<li>${ ingredient }</li>`, ``) }
        </ul>
        <h3><u>Steps</u></h3>
        <ol>
          ${ recipe.steps.reduce((stepHtml, step) => stepHtml += `<li>${ step }</li>`, ``) }
        </ol>
      </div>
      `;
    }, ``);

    div.setAttribute('id', 'recipes');
    document.body.appendChild(div);

    document.getElementById('recipes').innerHTML = divBody;
  })
  .catch(err => console.log(err)); // eslint-disable-line no-console
