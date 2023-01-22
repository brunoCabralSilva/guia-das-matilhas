
// const REACT_APP_API_HOST = 'guia-das-matilhas-back-end.up.railway.app';
const REACT_APP_API_HOST = 'localhost:3001';

// const REACT_APP_PROTOCOL = 'https';
const REACT_APP_PROTOCOL = 'http';

export default function fetch() {
  const HOST = REACT_APP_API_HOST;
  const PROTOCOL = REACT_APP_PROTOCOL;
  return (`${PROTOCOL}://${HOST}`);
}