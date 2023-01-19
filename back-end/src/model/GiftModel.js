 const connection = require("./connection");

module.exports = class GiftModel {
  connection;

  constructor() {
    this.connection = connection;
  }

  getGiftByName = async(name) => {
    const [query] = await this.connection.execute('SELECT * FROM gifts WHERE gift_nameOriginal = ?', [name.toLowerCase()]);
    const objGift = [{
      ...query[0],
      belongs: await this.getBelongByGift(query[0].gift_id),
      fonts: await this.getFontByGift(query[0].gift_id),
    }];
    return objGift;
  };

  getGiftById = async(id) => {
    const [query] = await this.connection.execute('SELECT * FROM gifts WHERE gift_id = ?', [id]);
    return query;
  };

  getFontsAndBelongs = async(list) => {
    const fonts = await Promise.all(list.map(async (item) => {
        const value = await Promise.all( await item.fonts.map( async(font) => {
          const [query] = await this.connection.execute('SELECT * FROM fonts WHERE font_id = ?', [font.font_id]);
          return query[0];
        }));
      const newObj = {...item, fonts: value };
      return newObj;
    }));
    return fonts;
  }

  getFontByGift = async(id) => {
    const [fonts] = await this.connection.execute('SELECT * FROM gifts_font WHERE gift_id = ?', [id]);
    return fonts;
  };

  getBelongByGift = async(id) => {
    const [belongs] = await this.connection.execute('SELECT * FROM gifts_belong WHERE gift_id = ?', [id]);
    return belongs;
  };

  getAllGifts = async() => {
    const [query] = await this.connection.execute('SELECT * FROM gifts');
    const fontsBelongs = await Promise.all(
      query.map( async(item) => {
        const objGift = {
          ...item,
          belongs: await this.getBelongByGift(item.gift_id),
          fonts: await this.getFontByGift(item.gift_id),
        }
        return objGift;
      }),
    );
    return fontsBelongs;
  };

  registerBelong = async (idGift, belongs) => {
    await Promise.all(
      belongs.map( async(belong) => {
        const [query] = await this.connection.execute('INSERT INTO gifts_belong (gift_id, belong_name) VALUES (?, ?)', [idGift, belong]);

        return ({
          'belong': query.insertId,
        });
      }
    ));
  };

  registerFont = async (id, fonts) => {
    await Promise.all(
      fonts.map( async(font) => {
        const { book, page, edition } = font;
        const [query] = await this.connection.execute('INSERT INTO fonts (font_book, font_page, font_edition) VALUES (?, ?, ?)', [book, page, edition]);

        await this.connection.execute('INSERT INTO gifts_font (gift_id, font_id) VALUES (?, ?)', [id, query.insertId]);
      }
    ));
  };

  registerGift = async(gift) => {
    const {
      namePtBr,
      nameOriginal,
      rank,
      font,
      belong,
      textPtBr,
      systemPtBr,
      note,
      textOriginal,
      systemOriginal
    } = gift;

    const newDate = new Date(Date.now());
    const date = `${newDate.getDate()}/${newDate
      .getMonth() < 10 && '0'}${newDate
      .getMonth() + 1}/${newDate.getFullYear()}`;
    
    const [query] = await this.connection.execute('INSERT INTO gifts (gift_namePtBr, gift_nameOriginal, gift_rank, gift_textPtBr, gift_systemPtBr, gift_note, gift_textOriginal, gift_systemOriginal, gift_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [namePtBr.toLowerCase(), nameOriginal.toLowerCase(), rank, textPtBr, systemPtBr, note, textOriginal, systemOriginal, date]);

    this.registerBelong(query.insertId, belong);
    this.registerFont(query.insertId, font);

    const foundGift = await this.getGiftById(query.insertId);
    return foundGift;
  };

  returnFeatures = async() => {
    const [queryBooks] = await this.connection.execute('SELECT * FROM belongs');
    const [queryBreeds] = await this.connection.execute('SELECT * FROM breeds');
    const [queryAuspices] = await this.connection.execute('SELECT * FROM auspices');
    const [queryTrybes] = await this.connection.execute('SELECT * FROM trybes');
    return {
      queryBooks,
      queryBreeds,
      queryAuspices,
      queryTrybes,
    };
  }
};