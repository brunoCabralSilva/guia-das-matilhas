import { Pool, RowDataPacket } from 'mysql2/promise';
import connection from "./connection";

interface giftReturn {
  gift_id: number,
  gift_name: string,
  gift_rank: number,
  gift_textPtBr: string,
  gift_systemPtBr: string,
  gift_textOriginal: string,
  gift_systemOriginal: string,
};

interface giftFont {
  book: string,
  page: number,
  edition: string,
};

export default class GiftModel {
  connection: Pool;

  constructor() {
    this.connection = connection;
  }

  getGiftByName = async(name: string): Promise<RowDataPacket[] | null> => {
    const [query] = await this.connection.execute<RowDataPacket[]>('SELECT * FROM gifts WHERE gift_name = ?', [name]);
    return query;
  };

  getGiftById = async(id: number): Promise<RowDataPacket[] | null> => {
    const [query] = await this.connection.execute<RowDataPacket[]>('SELECT * FROM gifts WHERE gift_id = ?', [id]);
    return query;
  };

  getFontByGift = async(id: number) => {
    const [fonts]: any = await this.connection.execute('SELECT * FROM gifts_font WHERE gift_id = ?', [id]);
    const namefonts = await Promise.all(
      fonts.map( async (fnt: any) => {
        const [searchfont]: any = await this.connection.execute('SELECT * FROM fonts WHERE font_id = ?', [fnt.font_id]);
        return searchfont;
      }));
    return namefonts;
  };

  getBelongByGift = async(id: number): Promise<string[]> => {
    const [belongs]: any = await this.connection.execute('SELECT * FROM gifts_belong WHERE gift_id = ?', [id]);
    const [nameBelongs] = await Promise.all(
      await belongs.map( async (bel: any) => {
        const [searchBelong]: any = await this.connection.execute('SELECT * FROM belongs WHERE belong_id = ?', [bel.belong_id]);
        return searchBelong[0];
      }));
    return nameBelongs;
  };

  getAllGifts = async() => {
    const [query] = await this.connection.execute<RowDataPacket[]>('SELECT * FROM gifts');
    const fontsBelongs = await Promise.all(
      query.map( async(item) => {
        const [belongs]: any = await this.connection.execute('SELECT * FROM gifts_belong WHERE gift_id = ?', [item.gift_id]);
        const nameBelongs = await Promise.all(
          await belongs.map( async (bel: any) => {
            const [searchBelong]: any = await this.connection.execute('SELECT * FROM belongs WHERE belong_id = ?', [bel.belong_id]);
            return searchBelong[0];
          }));
        const objGift = {
          ...item,
          belongs: nameBelongs,
          fonts: await this.getFontByGift(item.gift_id),
        }
        return objGift;
      })
    );
    return fontsBelongs;
  };

  registerBelong = async (idGift: number, belongs: string[]) => {
    await Promise.all(
      belongs.map( async(belong: string) => {
        const [id]: any = await this.connection.execute<RowDataPacket[]>('SELECT * FROM belongs WHERE belong_name = ?', [belong]);

        const [query]: any = await this.connection.execute<RowDataPacket[]>('INSERT INTO gifts_belong (gift_id, belong_id) VALUES (?, ?)', [idGift, id[0].belong_id]);

        return ({
          'belong': query.insertId,
        });
      }
    ));
  };

  registerFont = async (id: number, fonts: giftFont[]) => {
    await Promise.all(
      fonts.map( async(font: giftFont) => {
        const { book, page, edition } = font;
        const [query]: any = await this.connection.execute<RowDataPacket[]>('INSERT INTO fonts (font_book, font_page, font_edition) VALUES (?, ?, ?)', [book, page, edition]);

        const [query2] = await this.connection.execute<RowDataPacket[]>('INSERT INTO gifts_font (gift_id, font_id) VALUES (?, ?)', [id, query.insertId]);
        
      }
    ));
  };

  registerGift = async(gift: any) => {
    const {
      name,
      rank,
      font,
      belong,
      textPtbr,
      systemPtbr,
      textOriginal,
      systemOriginal
    } = gift;
    
    const [query]: any = await this.connection.execute('INSERT INTO gifts (gift_name, gift_rank, gift_textPtBr, gift_systemPtBr, gift_textOriginal, gift_systemOriginal) VALUES (?, ?, ?, ?, ?, ?)', [name, rank, textPtbr, systemPtbr, textOriginal, systemOriginal]);

    this.registerBelong(query.insertId, belong);
    this.registerFont(query.insertId, font);

    const foundGift = await this.getGiftById(query.insertId);
    return foundGift;
  };

  returnFeatures = async() => {
    const [queryBooks]: any = await this.connection.execute('SELECT * FROM belongs');
    const [queryBreeds]: any = await this.connection.execute('SELECT * FROM breeds');
    const [queryAuspices]: any = await this.connection.execute('SELECT * FROM auspices');
    const [queryTrybes]: any = await this.connection.execute('SELECT * FROM trybes');
    return {
      queryBooks,
      queryBreeds,
      queryAuspices,
      queryTrybes,
    };
  }
};