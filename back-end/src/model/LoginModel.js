const connection = require("./connection");
const Token = require('../utils/Token');

module.exports = class LoginModel {
  connection;
  token;

  constructor() {
    this.connection = connection;
    this.token = new Token();
  }

  async login(user, password) {
    const [search] = await this.connection.execute(`SELECT * FROM login_app WHERE login_user = ? AND login_password = ?`, [user, password]);
    if (search.length === 0) {
      return false;
    } else {
      const generate = this.token.generateToken(user);
      return generate;
    }
  };
};
