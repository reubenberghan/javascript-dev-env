export default () => {
  const inDevelopment = window.location.hostname === 'localhost';
  return inDevelopment ? '/' : '/'; // TODO add prod url
};
