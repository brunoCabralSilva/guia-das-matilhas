export default function fetch() {
  const HOST = process.env.REACT_APP_API_HOST || 'https://guia-das-matilhas-back-end.up.railway.app/';
  const PROTOCOL = process.env.REACT_APP_PROTOCOL || 'https';
  return (`${PROTOCOL}://${HOST}`);
}