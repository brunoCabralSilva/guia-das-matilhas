import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

interface Payload {
  email: string,
};

interface JwtConfig {
  expiresIn: string,
  algorithm: string,
};

export default class Token {
  jwtConfig : JwtConfig;
  payload: Payload;
  jwtSecret: string;

  constructor() {
    this.jwtConfig = {
      expiresIn: '1000min',
      algorithm: 'HS256',
    };
    this.payload = { email: '' };
    this.jwtSecret = process.env.JWT_SECRET || 'Isopotametemumdomsani618';
  }
  
  generateToken = (email: string): string => {
    this.payload = { email };
    const json = jwt.sign(this.payload, this.jwtSecret);
    return json;
  };

  verify = (token: string): boolean => {
    try {
      const ver = jwt.verify(token, this.jwtSecret);
      if (ver) { return true }
      return false;
    } catch( error) {
      return false;
    }
  }
};