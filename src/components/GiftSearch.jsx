import React from 'react';
import GiftExibition from '../components/GiftExibition';
const dados = require('../data/dons.json');

export default class GiftSearch extends React.Component {
  state = {
    gift: false,
  }

  giftFilterReturn = () => {
    const { featureSearch, rankSearch, bookSearch } = this.props;
    const { gift: gifts } = this.state;

    let filter = [];
    if (bookSearch.length > 0) {
      filter = dados.filter((dom) => {
        const { source } = dom;
        const books = bookSearch.map((book) => source.includes(book));
        return (books.includes(true));
      });
    } else if (bookSearch.length === 0) {
      filter = dados;
    }

    if (rankSearch.length > 0) {
      filter = filter.filter((eachGift) => {
        const { categories } = eachGift;
        const ranks = rankSearch.map((rank) => {
          let valor = 0;
          switch (rank) {
            case 'Cliath':
              valor = 1;
              break;
            case 'Fostern':
              valor = 2;
              break;
            case 'Adren':
              valor = 3;
              break;
            case 'Athro':
              valor = 4;
              break;
            case 'Ancião':
              valor = 5;
              break;
            case 'Lendário':
              valor = 6;
              break;
            default:
              valor = 0;
              break;
          }
          const cadaRank = categories.map((categoria) => categoria.rank === valor);
          if (cadaRank.includes(true)) return true;
        });
        if (ranks.includes(true)) return eachGift;
      });
    }

    if (featureSearch.length > 0) {
      filter = filter.filter((dom) => {
        const { categories } = dom;
        const items = featureSearch.map((item) => {
          const eachName = categories.map((cat) => cat.name.includes(item));
          if (eachName.includes(true)) return true;
        });
        if (items.includes(true)) return dom;
      });
    }
    const filtredGifts = filter.map((dom) => {
      let count = 0;
      let level = 0;
      const arrayCategories = dom.categories.map((cat) => {
        if (dom.categories.length - 1 === count) {
          level = cat.rank;
          return (<span>{cat.name}</span>);
        }
        count += 1;
        level = cat.rank;
        return (<span>{cat.name}, </span>);
      });

      const arraysub = dom.categories.filter((cat) => cat.subtype !== null);

      const arraysubtypes = arraysub.map((cat) => {
        if (dom.categories.length - 1 === count) {
          return (<span>{cat.subtype} ({cat.name})</span>);
        }
        count += 1;
        return (<span>{cat.subtype} ({cat.name}), </span>);
      });
      return (
        <GiftExibition
          source={dom.source}
          arrayCategories={arrayCategories}
          arraysubtypes={arraysubtypes}
          description={dom.description}
          system={dom.system}
          level={level}
          name={dom.name}
          gifts={gifts}
        />
      );
    });
    return filtredGifts;
  }
  render() {
    const giftFiltred = this.giftFilterReturn();
    const number = giftFiltred.length;
    return (
      <div>
        <h1 className="title-page title-page-gift">
          {
            (number === 0)
              ? "Nenhum Dom foi Encontrado"
              : `Dons Encontrados: ${giftFiltred.length}`
          }</h1>
        <section className="gift-list">
          {giftFiltred}
        </section >
      </div>
    );
  }
}