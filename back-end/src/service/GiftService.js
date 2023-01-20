const GiftModel = require("../model/GiftModel");

class GiftService {
  model;

  constructor() {
    this.model = new GiftModel();
  }

  getGiftByName = async(name) => {
    const query = await this.model.getGiftByName(name);
    return query;
  };

  getFontsAndBelongs = async(list) => {
    const query = await this.model.getFontsAndBelongs(list);
    return query;
  };

  deleteGift = async(name) => {
    const gift = await this.model.deleteGift(name);
    return gift;
  };

  getAllGifts = async() => {
    const query = await this.model.getAllGifts();
    return query;
  };

  registerGift = async(gift) => {
    const query = await this.model.registerGift(gift);
    return query;
  };

  returnFeatures = async() => {
    const query = await this.model.returnFeatures();
    return query;
  };
};

module.exports = GiftService;