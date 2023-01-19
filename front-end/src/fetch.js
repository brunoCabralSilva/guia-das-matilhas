export default function fetch() {
  const HOST = process.env.REACT_APP_API_HOST || 'localhost:3001';
  const PROTOCOL = process.env.REACT_APP_PROTOCOL || 'http';
  return (`${PROTOCOL}://${HOST}`);
}