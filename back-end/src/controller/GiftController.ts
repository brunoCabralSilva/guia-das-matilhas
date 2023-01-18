import { Request, Response } from 'express';
import GiftService from "../service/GiftService";

export default class GiftController {
  service: GiftService;

  constructor() {
    this.service = new GiftService();
  }

  getGiftByName = async(req: Request, res: Response) => {
    const { name } = req.body;
    try {
      const query: any = await this.service.getGiftByName(name);
      if (query.length > 0) {
        return res.status(201).json({ gift: true });
      } return res.status(404).json({ gift: false });
    } catch(error) {
      return res.status(404).json({ gift: false });
    }
  };

  getAllGifts = async(req: Request, res: Response) => {
    try {
      const query = await this.service.getAllGifts();
      if (query) {
        return res.status(201).json({ list: query });
      } return res.status(404).json({ list: false });
    } catch(error) {
      return res.status(404).json({ list: false });
    }
  };

  registerGift = async(req: Request, res: Response) => {
    const gift = {
      name: req.body.name,
      rank: req.body.rank,
      font: req.body.font,
      belong: req.body.belong,
      textPtbr: req.body.textPtbr,
      systemPtbr: req.body.systemPtbr,
      textOriginal: req.body.textOriginal,
      systemOriginal: req.body.systemOriginal,
    }
    try {
      const query = await this.service.registerGift(gift);
      if (query) {
        const objReturn = {
          id: query[0].gift_id,
          name: query[0].gift_name,
        };
        return res.status(201).json(objReturn);
      } return res.status(201).json(false);
    } catch(error) {
      return res.status(404).json({ register: error });
    }
  };

  returnFeatures = async(req: Request, res: Response) => {
    try {
      const query = await this.service.returnFeatures();
      if (query) {
        return res.status(201).json(query);
      } return res.status(404).json({
        queryBooks: [],
        queryBreeds: [],
        queryAuspices: [],
        queryTrybes: [],
      });
    } catch(error) {
      return res.status(404).json({
        queryBooks: [],
        queryBreeds: [],
        queryAuspices: [],
        queryTrybes: [],
      });
    }
  }
};