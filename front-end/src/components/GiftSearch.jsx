import React from 'react';
import GiftExibition from '../components/GiftExibition';

export default class GiftSearch extends React.Component {
  state = {
    gift: false,
  }

  returnAllItems() {
    const { featureSearch, rankSearch, bookSearch } = this.props;
    const { listAllGifts } = this.props;
    let filter = [];
    if (bookSearch.length > 0) {
      filter = listAllGifts.filter((dom) => {
        const { font } = dom;
        const books = bookSearch.map((book) => {
          const fontFiltered = font.filter((f) => f.book === book);
          if(fontFiltered.length > 0) return true;
        });
        if (books.includes(true)) return dom;
      });
    } else if (bookSearch.length === 0) {
      filter = listAllGifts;
    }

    if (rankSearch.length > 0) {
      const rankNames = rankSearch.map((rankSearch) => {
        switch(rankSearch) {
          case "Cliath": return 1;
          case "Fostern": return 2;
          case "Adren": return 3;
          case "Athro": return 4;
          case "Ancião": return 5;
          case "Lendário": return 6;
          default: return false;
        }
      });
      filter = filter.filter((eachGift) => {
        const { rank } = eachGift;
        const items = rankNames.filter((item) => item === rank);
        if(items.length > 0) return items;
      });
    }

    if (featureSearch.length > 0) {
      filter = filter.filter((dom) => {
        const { belong } = dom;
        const items = featureSearch.map((item) => {
          const eachName = belong.map((cat) => cat.includes(item));
          if (eachName.includes(true)) return true;
        });
        if (items.includes(true)) return dom;
      });
    }
    const filtredGifts = filter.map((dom, index) => (
      <GiftExibition
        key={ index } 
        source={dom.font}
        arrayCategories={dom.belong}
        arraysubtypes={[]}
        description={dom.textOriginal}
        system={dom.systemOriginal}
        descriptionPtBr={dom.textPtBr}
        systemPtBr={dom.systemPtBr}
        level={dom.rank}
        name={dom.name_gift}
        gifts={dom}
        admin={false}
      />
      ));
    return filtredGifts;
  }


  render() {
    const listWithFilters = this.returnAllItems();
    let number = 0;
    if (listWithFilters) {
      number = listWithFilters.length;
    }
    return (
      <div>
        <h1 className="text-4xl w-full text-white bg-gradient-to-r from-f-transp to-transparent p-5 ml-3 mt-2 sm:mt-3 text-center">
          {
            (number === 0)
              ? "Nenhum Dom foi Encontrado"
              : `Dons Encontrados: ${number}`
          }</h1>
        <section className="flex flex-wrap mb-2 sm:mb-3 justify-between">
          {this.returnAllItems()}
        </section >
      </div>
    );
  }
}