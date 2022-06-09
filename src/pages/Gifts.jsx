import React from 'react';
import '../css/gifts.css';
import '../css/popup.css';
import Nav from '../components/Nav';
import Filter from '../components/Filter';
import GiftSearch from '../components/GiftSearch';
import Footer from '../components/Footer';
import PopUp from '../components/PopUp';
const raca = require('../data/racas.json');
const posto = require('../data/posto.json');
const dados = require('../data/dons.json');
const augurios = require('../data/augurios.json');
const tribos = require('../data/tribos.json');

export default class Gifts extends React.Component {
  state = {
    feature: [],
    rankSelected: [],
    bookSelected: [],
    featureSearch: [],
    rankSearch: [],
    bookSearch: [],
    minimizeBreed: false,
    minimizeTrybe: false,
    minimizeAuspices: false,
    minimizeRank: false,
    minimizeBook: false,
    minimizePopUp: false,
    showGifts: false,
    animationPopUp: 'selected-popUp2',
    nameFilter: '',
  }

  giftReturn = () => {
    const { feature, rankSelected, bookSelected } = this.state;
    this.setState({
      featureSearch: feature,
      rankSearch: rankSelected,
      bookSearch: bookSelected,
      showGifts: true,
    });
    this.setState({
      feature: [],
      rankSelected: [],
      bookSelected: [],
    });
  }

  nameFilterDisable = () => {
    const { minimizePopUp, animationPopUp } = this.state;
    if (!minimizePopUp) {
      if (animationPopUp !== 'selected-popUp' || animationPopUp !== 'selected-popUp animation' || animationPopUp !== 'selected-popUp animation2') {
        return 'disable';
      }
      return '';
    }
  }


  // animaPopUp = () => {
  //   const { minimizePopUp, animationPopUp } = this.state;
  //   if (!minimizePopUp) {
  //     this.setState((prevState) => ({
  //       animationPopUp: `${prevState.animationPopUp} animation`,
  //     }));
  //     setTimeout(() => {
  //       const newClass = animationPopUp.replace(' animation', '');
  //       this.setState({ animationPopUp: newClass });
  //     }, 1000);
  //   } else {
  //     this.setState((prevState) => ({
  //       animationPopUp: `${prevState.animationPopUp} animation2`,
  //     }));
  //     setTimeout(() => {
  //       const newClass = animationPopUp.replace(' animation2', '');
  //       this.setState({ animationPopUp: newClass });
  //     }, 1000);
  //   }
  // }

  rankSelected = (event, type) => {
    console.log(type);
    const { rankSelected } = this.state;
    const { name, innerText } = event.target;
    const info = name === undefined ? innerText : name;
    if (!rankSelected.includes(info)) {
      this.setState((prevState) => ({ rankSelected: [...prevState.rankSelected, info] }));
    }
    this.animaPopUp();
  }

  bookSelected = (event) => {
    const { bookSelected } = this.state;
    const { name, innerText } = event.target;
    const info = name === undefined ? innerText : name;
    if (!bookSelected.includes(info)) {
      this.setState((prevState) => ({ bookSelected: [...prevState.bookSelected, info] }));
    }
    this.animaPopUp();
  }

  featureSelected = (event) => {
    const { feature } = this.state;
    const { name, innerText } = event.target;
    const info = name === undefined ? innerText : name;
    if (!feature.includes(info)) {
      this.setState((prevState) => ({ feature: [...prevState.feature, info] }));
    }
    this.animaPopUp();
  }

  bookList = () => {
    const books = [];
    const allSrc = dados.map((gift) => gift.source);
    const moreThanOneBook = allSrc.filter((book) => book.includes('/'));
    const oneBookBySrc = allSrc.filter((book) => !book.includes('/'));
    moreThanOneBook.forEach((book) => {
      let l = 0;
      for (let i = 0; i < book.length; i += 1) {
        if (book[i].includes('/')) {
          l += 1;
        }
      }
      if (l === 1) {
        const srcDivide = book.split(' / ', 2);
        srcDivide.forEach((book) => oneBookBySrc.push(book));
      } else {
        const srcDivide = book.split(' / ', 3);
        srcDivide.forEach((book) => oneBookBySrc.push(book));
      }
    });
    oneBookBySrc.forEach((book) => {
      if (!books.includes(book)) {
        books.push(book);
      }
    });
    return books;
  }

  minimizes = (attrib) => {
    const {
      minimizeTrybe,
      minimizeAuspices,
      minimizeBreed,
      minimizeRank,
      minimizeBook,
      minimizePopUp,
    } = this.state;
    switch (attrib) {
      case 'minimizeTrybe':
        if (minimizeTrybe) this.setState({ minimizeTrybe: false });
        else this.setState({ minimizeTrybe: true });
        break;
      case 'minimizeAuspices':
        if (minimizeAuspices) this.setState({ minimizeAuspices: false });
        else this.setState({ minimizeAuspices: true });
        break;
      case 'minimizeBreed':
        if (minimizeBreed) this.setState({ minimizeBreed: false });
        else this.setState({ minimizeBreed: true });
        break;
      case 'minimizeRank':
        if (minimizeRank) this.setState({ minimizeRank: false });
        else this.setState({ minimizeRank: true });
        break;
      case 'minimizeBook':
        if (minimizeBook) this.setState({ minimizeBook: false });
        else this.setState({ minimizeBook: true });
        break;
      default:
        if (minimizePopUp) this.setState({
          minimizePopUp: false,
          animationPopUp: 'selected-popUp2',
        });
        else this.setState({
          minimizePopUp: true,
          animationPopUp: 'selected-popUp',
        });
        break;
    }
  }

  removeFeature = ({ target }) => {
    const { feature } = this.state;
    const { name } = target;
    const remove = feature.filter((item) => item !== name);
    this.setState({ feature: remove });
  }

  removeRank = ({ target }) => {
    const { rankSelected } = this.state;
    const { name } = target;
    const remove = rankSelected.filter((item) => item !== name);
    this.setState({ rankSelected: remove });
  }

  removeBook = ({ target }) => {
    const { bookSelected } = this.state;
    const { name } = target;
    const remove = bookSelected.filter((item) => item !== name);
    this.setState({ bookSelected: remove });
  }

  divideFeature = (features) => {
    const breedFilter = features.filter((item) => {
      return (item === "Impuros" || item === "Hominídeos" || item === "Lupinos");
    });

    const breeds = breedFilter.map((item) => {
      return (
        <div>
          <label htmlFor={item} className="label-item">
            <input
              className="label-item"
              checked={true}
              id={item}
              name={item}
              onChange={this.removeFeature}
              type="checkbox"
            />
            {` ${item} `}
          </label>
        </div>
      );
    });

    const filtroAugurios = features.filter((item) => {
      return (item === "Ahroun" || item === "Philodox" || item === "Galliard" || item === "Theurge" || item === "Ragabash")
    });

    const augurios = filtroAugurios.map((item) => {
      return (
        <div>
          <label htmlFor={item} className="label-item">
            <input
              className="label-item"
              checked={true}
              onChange={this.removeFeature}
              id={item}
              name={item}
              type="checkbox"
            />
            {` ${item} `}
          </label>
        </div>
      );
    });

    const filtroTribos = features.filter((item) => {
      if (item !== "Impuros" && item !== "Hominídeos" && item !== "Lupinos") {
        if (item !== "Ahroun" && item !== "Philodox" && item !== "Galliard" && item !== "Theurge" && item !== "Ragabash") {
          return <span className="label-item">item</span>;
        }
      }
    });

    const tribos = filtroTribos.map((item) => {
      return (
        <div>
          <label htmlFor={item} className="label-item">
            <input
              className="label-item"
              checked={true}
              id={item}
              name={item}
              type="checkbox"
              onChange={this.removeFeature}
            />
            {` ${item} `}
          </label>
        </div>
      )
    });

    return (
      <div>
        <p className={
          breeds.length === 0
            ? "disable"
            : "title-pop-up"}
        >
          Raças:
        </p>
        {breeds}
        <p className={
          augurios.length === 0
            ? "disable"
            : "title-pop-up"}
        >
          Augúrios:
        </p>
        {augurios}
        <p className={
          tribos.length === 0
            ? "disable"
            : "title-pop-up"}
        >
          Tribos:
        </p>
        {tribos}
      </div>
    );
  }

  render() {
    const {
      feature,
      rankSelected,
      bookSelected,
      featureSearch,
      rankSearch,
      bookSearch,
      showGifts,
      minimizeBreed,
      minimizeTrybe,
      minimizeAuspices,
      minimizeBook,
      minimizeRank,
      minimizePopUp,
      animationPopUp,
    } = this.state;
    return (
      <div className="gifts">
        <div className="darkness-gift"></div>
        <div className="main-nav">
          <Nav />
        </div>
        <div className="gift-content">
          <div className="search-by-gifts">
            <h1 className="title-page">Dons</h1>
            <div className="div-gift-text">
              <div className="gift-text">
                <p className="gift-p">
                  O mundo espiritual divide muitos segredos com os lobisomens e outros metamorfos.
                  De acordo com um antigo pacto, os espíritos ensinam habilidades mágicas chamadas Dons aos Garou. Os Dons permitem aos lobisomens concentrar uma energia espiritual para afetar a Tellurian. Tribos, augúrios e até mesmo raças diferentes aprendem Dons dinstintos.
                </p>
              </div>
              <img src={require('../images/wallpapers/wolf_soul.png')} alt="Dois Garou em comunhão" className="gift-img" />
            </div>
            <div className="div-gift-text">
              <img src={require('../images/wallpapers/caern.png')} alt="Caern em festa" className="gift-img" id="fire-image" />
              <div>
                <p className="gift-p">
                  Cada Grupo tem seus próprios segredos e suas próprias e exclusivas ligações espirituais e, como consequência, existem muitos Dons espalhados ao longo de todos os livros que foram publicados, dificultando a busca ou tornando-a no mínimo massiva. Esta área foi criada para auxiliar esta oportunidade encontrada e aqui você pode pesquisar rapidamente por um ou mais dons que desejar.
                </p>
              </div>
            </div>
            <div className="div-gift-text">
              <div className="gift-text">
                <p className="gift-p">
                  Para realizar a busca, você pode escolher um ou mais filtros: filtros de Raças, Tribos e Augúrios retornarão qualquer dom que inclua um dos selecionados. Filtros de posto e livro só retornarão os dons que tiverem os filtros selecionados. Ao selecionar algum filtro, ele aparecerá em um pop-up no canto superior direito, onde você poderá acompanhar todos os filtros escolhidos e também removê-los caso deseje.
                  Não selecionar nenhum filtro retornará uma lista com todos os dons.
                </p>
              </div>
              <img src={require('../images/wallpapers/thunder-wyrm.png')} alt="Lobisomem enfrentando Wyrm Trovão" className="gift-img" />
            </div>
            <PopUp
              feature={feature}
              rankSelected={rankSelected}
              bookSelected={bookSelected}
              minimizePopUp={minimizePopUp}
              minimizes={this.minimizes}
              removeRank={this.removeRank}
              removeBook={this.removeBook}
              divideFeature={this.divideFeature}
              animationPopUp={animationPopUp}
              nameFilterDisable={this.nameFilterDisable}
            />
            <div className="gift-pop-up-list">
              <Filter
                name="Raças"
                select={this.featureSelected}
                statusMinimize={minimizeBreed}
                list={raca}
                nameMinimize="minimizeBreed"
                funcMin={this.minimizes}
              />
              <Filter
                name="Tribos"
                select={this.featureSelected}
                statusMinimize={minimizeTrybe}
                list={tribos}
                nameMinimize="minimizeTrybe"
                funcMin={this.minimizes}
              />
              <Filter
                name="Augúrios"
                select={this.featureSelected}
                statusMinimize={minimizeAuspices}
                list={augurios}
                nameMinimize="minimizeAuspices"
                funcMin={this.minimizes}
              />
              <Filter
                name="Postos"
                select={this.rankSelected}
                statusMinimize={minimizeRank}
                nameMinimize="minimizeRank"
                funcMin={this.minimizes}
                list={posto}
              />
              <Filter
                name="Livros"
                select={this.bookSelected}
                statusMinimize={minimizeBook}
                nameMinimize="minimizeBook"
                funcMin={this.minimizes}
                list={this.bookList().sort()}
              />
              <button
                className="btn-gift-search"
                onClick={this.giftReturn}
              >
                Realizar Busca
              </button>
            </div>
            {showGifts
              ? <div>
                <GiftSearch
                  featureSearch={featureSearch}
                  rankSearch={rankSearch}
                  bookSearch={bookSearch}
                />
              </div>
              : null
            }
          </div>
        </div>
        <div className="footer-gifts">
          <Footer />
        </div>
      </div>
    );
  }
}