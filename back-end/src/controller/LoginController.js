const LoginService = require('../service/LoginService');
const Token = require('../utils/Token');

module.exports = class LoginController {
  service;
  token;
 
  constructor() {
    this.service = new LoginService();
    this.token = new Token();
  }
  
  verifyLogin = async (req, res) => {
    const { token } = req.body;
    try{
      const search = this.token.verify(token);
      if (search) {
        return res.status(201).json({ token: true });
      } return res.status(201).json({ token: false });
    } catch(error) {
      return res.status(404).json({ token: false });
    }
  };

  login = async (req, res) => {
    const { user, password } = req.body;
    const search = await this.service.login(user, password);
    if (search) {
      return res.status(201).json({ token: search });
    } return res.status(404).json({ token: false });
  };
}
