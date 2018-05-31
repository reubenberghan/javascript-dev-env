import GreetingComponent from './GreetingComponent';

import './index.css';

const name = 'Reuben';
const el = GreetingComponent(name);

document.body.appendChild(el);