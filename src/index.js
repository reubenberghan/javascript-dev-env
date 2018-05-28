import greeting from './greeting';

import './index.css';

const h1 = document.createElement('h1');
const name = 'Reuben';

h1.innerHTML = greeting(name);

document.body.appendChild(h1);