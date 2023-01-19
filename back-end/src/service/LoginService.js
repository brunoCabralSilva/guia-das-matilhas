const LoginModel = require('../model/LoginModel');

module.exports = class LoginService {
  model;
  
  constructor() {
    this.model = new LoginModel();
  }

  async login(user, password) {
    const search = await this.model.login(user, password);
    return search;
  };
}