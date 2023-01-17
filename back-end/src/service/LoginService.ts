import LoginModel from '../model/LoginModel';
import { Request, Response } from 'express';
//model

export default class LoginService {
  model: LoginModel;

  constructor() {
    this.model = new LoginModel();
  }

  async login(user: string, password: string): Promise<boolean | string> {
    const search = await this.model.login(user, password);
    return search;
  };
}