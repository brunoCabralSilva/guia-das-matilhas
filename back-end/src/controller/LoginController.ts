import { Response, Request } from 'express';
import LoginService from '../service/LoginService';
import Token from '../utils/Token';

export default class LoginController {
  private service: LoginService;
  private token: Token;
 
  constructor() {
    this.service = new LoginService();
    this.token = new Token();
  }
  
  verifyLogin = async (req: Request, res: Response): Promise<Response> => {
    const { token } = req.body;
    try{
      const search = await this.token.verify(token);
      if (search) {
        return res.status(201).json({ token: true });
      } return res.status(201).json({ token: true });
    } catch(error) {
      return res.status(404).json({ token: false });
    }
  };

  login = async (req: Request, res: Response): Promise<Response> => {
    const { user, password } = req.body;
    const search = await this.service.login(user, password);
    if (search) {
      return res.status(201).json({ token: search });
    } return res.status(404).json({ token: false });
  };
}
