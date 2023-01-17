import GiftModel from "../model/GiftModel";

export default class GiftService {
  model: GiftModel;

  constructor() {
    this.model = new GiftModel();
  }

  getGiftByName = async(name: string) => {
    const query = await this.model.getGiftByName(name);
    return query;
  };

  getAllGifts = async() => {
    const query = await this.model.getAllGifts();
    return query;
  };

  registerGift = async(gift: any) => {
    const query = await this.model.registerGift(gift);
    return query;
  };
};