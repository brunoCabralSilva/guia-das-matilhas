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
  }
};

module.exports = GiftService;