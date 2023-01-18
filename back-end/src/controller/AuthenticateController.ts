import { Request, Response } from 'express';
import Token from "../utils/Token";

export default class Authenticate {
  token: Token;

  constructor() {
    this.token = new Token();
  }

  verifyLogin = async (req: Request, res: Response) => {
    const { token }: any = req.body;
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