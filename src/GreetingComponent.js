import greeting from './greeting';

export default name => {
  const h1 = document.createElement('h1');
  h1.innerHTML = greeting(name);
  return h1; 
};