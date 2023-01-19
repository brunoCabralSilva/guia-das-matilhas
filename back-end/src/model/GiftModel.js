 const connection = require("./connection");

module.exports = class GiftModel {
  connection;

  constructor() {
    this.connection = connection;
  }

  getGiftByName = async(name) => {
    const [query] = await this.connection.execute('SELECT * FROM gifts WHERE gift_nameOriginal = ?', [name.toLowerCase()]);
    return query;
  };

  getGiftById = async(id) => {
    const [query] = await this.connection.execute('SELECT * FROM gifts WHERE gift_id = ?', [id]);
    return query;
  };

  getFontByGift = async(id) => {
    const [fonts] = await this.connection.execute('SELECT * FROM gifts_font WHERE gift_id = ?', [id]);
    const namefonts = await fonts.map( async (fnt) => {
        const [searchfont] = await this.connection.execute('SELECT * FROM fonts WHERE font_id = ?', [fnt.font_id]);
        return searchfont;
      });
    return namefonts;
  };

  getBelongByGift = async(id) => {
    const [belongs] = await this.connection.execute('SELECT * FROM gifts_belong WHERE gift_id = ?', [id]);
    const nameBelongs = await belongs.map( async (bel) => {
        const [searchBelong] = await this.connection.execute('SELECT * FROM belongs WHERE belong_id = ?', [bel.belong_id]);
        return searchBelong[0];
      });
    return nameBelongs;
  };

  getAllGifts = async() => {
    const [query] = await this.connection.execute('SELECT * FROM gifts');
    const fontsBelongs = await Promise.all(
      query.map( async(item) => {
        const [belongs] = await this.connection.execute('SELECT * FROM gifts_belong WHERE gift_id = ?', [item.gift_id]);
        const nameBelongs = await belongs.map( async (bel) => {
          const [searchBelong] = await this.connection.execute('SELECT * FROM belongs WHERE belong_id = ?', [bel.belong_id]);
          return searchBelong[0];
        });
        const objGift = {
          ...item,
          belongs: nameBelongs,
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
        const [id] = await this.connection.execute('SELECT * FROM belongs WHERE belong_name = ?', [belong]);

        const [query] = await this.connection.execute('INSERT INTO gifts_belong (gift_id, belong_id) VALUES (?, ?)', [idGift, id[0].belong_id]);

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

        const [query2] = await this.connection.execute('INSERT INTO gifts_font (gift_id, font_id) VALUES (?, ?)', [id, query.insertId]);
        
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
    
    const [query] = await this.connection.execute('INSERT INTO gifts (gift_namePtBr, gift_nameOriginal, gift_rank, gift_textPtBr, gift_systemPtBr, gift_note, gift_textOriginal, gift_systemOriginal) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [namePtBr.toLowerCase(), nameOriginal.toLowerCase(), rank, textPtBr, systemPtBr, note, textOriginal, systemOriginal]);

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