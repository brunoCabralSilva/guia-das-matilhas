const Token = require("../utils/Token");

module.exports = class Authenticate {
  token;

  constructor() {
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
}