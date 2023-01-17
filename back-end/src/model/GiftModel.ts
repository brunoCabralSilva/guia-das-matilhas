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

  returnAllGifts = async () => {
    const [queryBreeds] = await this.connection.execute('');
    const [queryAuspices] = await this.connection.execute('');
    const [queryTrybes] = await this.connection.execute('');
    const [queryBooks] = await this.connection.execute('');
    return {
      queryBreeds,
      queryAuspices,
      queryTrybes,
      queryBooks,
    }
  };

  getGiftByName = async(name: string): Promise<RowDataPacket[] | null> => {
    const [query] = await this.connection.execute<RowDataPacket[]>('SELECT * FROM gifts WHERE gift_name = ?', [name]);
    return query;
  };

  getGiftById = async(id: number): Promise<RowDataPacket[] | null> => {
    const [query] = await this.connection.execute<RowDataPacket[]>('SELECT * FROM gifts WHERE gift_id = ?', [id]);
    return query;
  };

  getAllGifts = async(): Promise<RowDataPacket[] | null> => {
    const [query] = await this.connection.execute<RowDataPacket[]>('SELECT * FROM gifts');
    return query;
  };

  registerBelong = async (idGift: number, belongs: string[]) => {
    await Promise.all(
      belongs.map( async(belong: string) => {
        const [id]: any = await this.connection.execute<RowDataPacket[]>('SELECT * FROM guia_das_matilhas.belongs WHERE belong_name = ?', [belong]);

        const [query]: any = await this.connection.execute<RowDataPacket[]>('INSERT INTO guia_das_matilhas.gifts_belong (gift_id, belong_id) VALUES (?, ?)', [idGift, id[0].belong_id]);

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
        const [query]: any = await this.connection.execute<RowDataPacket[]>('INSERT INTO guia_das_matilhas.fonts (font_book, font_page, font_edition) VALUES (?, ?, ?)', [book, page, edition]);

        const [query2] = await this.connection.execute<RowDataPacket[]>('INSERT INTO guia_das_matilhas.gifts_font (gift_id, font_id) VALUES (?, ?)', [id, query.insertId]);
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
    
    const [query]: any = await this.connection.execute('INSERT INTO guia_das_matilhas.gifts (gift_name, gift_rank, gift_textPtBr, gift_systemPtBr, gift_textOriginal, gift_systemOriginal) VALUES (?, ?, ?, ?, ?, ?)', [name, rank, textPtbr, systemPtbr, textOriginal, systemOriginal]);

    this.registerBelong(query.insertId, belong);
    this.registerFont(query.insertId, font);

    const foundGift = await this.getGiftById(query.insertId);
    return foundGift;
  };
};