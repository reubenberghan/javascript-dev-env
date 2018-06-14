export default props => <h1>{ props.greeting(props.name) }</h1>;

// export default document => name => {
//   const h1 = document.createElement('h1');
//   h1.innerHTML = greeting(name);
//   return h1;
// };
