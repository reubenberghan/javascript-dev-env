import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export const getRecipes = () => get('recipes');

const get = url => fetch(baseUrl + url).then(onSuccess, onError);

const onError = error => console.log(error); // eslint-disable-line no-console
const onSuccess = response => response.json(); // eslint-disable-line no-console
