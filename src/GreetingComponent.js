import greeting from './greeting';

export default document => name => {
  const h1 = document.createElement('h1');
  h1.innerHTML = greeting(name);
  return h1;
};
