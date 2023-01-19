const jwt = require('jsonwebtoken');
require('dotenv').config();

class Token {
  expiresIn;
  algorithm;
  payload;
  jwtSecret;

  constructor() {
    this.jwtConfig = {
      expiresIn: '1000min',
      algorithm: 'HS256',
    };
    this.payload = { email: '' };
    this.jwtSecret = process.env.JWT_SECRET || 'Isopotametemumdomsani618';
  }
  
  generateToken = (email) => {
    this.payload = { email };
    const json = jwt.sign(this.payload, this.jwtSecret);
    return json;
  };

  verify = (token) => {
    try {
      const ver = jwt.verify(token, this.jwtSecret);
      if (ver) { return true }
      return false;
    } catch( error) {
      return false;
    }
  }
};

module.exports = Token;