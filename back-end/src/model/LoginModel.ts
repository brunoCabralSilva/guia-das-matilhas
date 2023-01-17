import { Pool, RowDataPacket } from 'mysql2/promise';
import connection from "./connection";
import Token from '../utils/Token';

export default class LoginModel {
  connection: Pool;
  token: Token;

  constructor() {
    this.connection = connection;
    this.token = new Token();
  }

  async login(user: string, password: string): Promise<boolean | string> {
    const [search] = await this.connection.execute<RowDataPacket[]>(`SELECT * FROM login_app WHERE login_user = ? AND login_password = ?`, [user, password]);
    if (search.length === 0) {
      return false;
    } else {
      const generate = this.token.generateToken(user);
      return generate;
    }
  };
};
