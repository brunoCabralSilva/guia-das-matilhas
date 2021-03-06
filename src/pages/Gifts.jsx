import React from 'react';
import { motion } from 'framer-motion';
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

  componentDidMount() {
    window.scrollTo(0, 0);
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
        return 'disable-title-filter';
      }
      return '';
    }
  }

  rankSelected = (event) => {
    const { rankSelected } = this.state;
    const { name, innerText } = event.target;
    const info = name === undefined ? innerText : name;
    if (!rankSelected.includes(info)) {
      this.setState((prevState) => ({ rankSelected: [...prevState.rankSelected, info] }));
    } else {
      const removeItem = rankSelected.filter((item) => {
        return (!item.includes(info));
      });
      this.setState({ rankSelected: removeItem });
    }
  }

  bookSelected = (event) => {
    const { bookSelected } = this.state;
    const { name, innerText } = event.target;
    const info = name === undefined ? innerText : name;
    if (!bookSelected.includes(info)) {
      this.setState((prevState) => ({ bookSelected: [...prevState.bookSelected, info] }));
    } else {
      const removeItem = bookSelected.filter((item) => {
        return (!item.includes(info));
      });
      this.setState({ bookSelected: removeItem });
    }
  }

  featureSelected = (event) => {
    const { feature } = this.state;
    const { name, innerText } = event.target;
    const info = name === undefined ? innerText : name;
    if (!feature.includes(info)) {
      this.setState((prevState) => ({ feature: [...prevState.feature, info] }));
    } else {
      const removeItem = feature.filter((item) => {
        return (!item.includes(info));
      });
      this.setState({ feature: removeItem });
    }
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
      return (item === "Impuros" || item === "Homin??deos" || item === "Lupinos");
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
      if (item !== "Impuros" && item !== "Homin??deos" && item !== "Lupinos") {
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
            ? "hidden"
            : "flex"}
        >
          Ra??as:
        </p>
        {breeds}
        <p className={
          augurios.length === 0
            ? "hidden"
            : "flex"}
        >
          Aug??rios:
        </p>
        {augurios}
        <p className={
          tribos.length === 0
            ? "hidden"
            : "flex"}
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
      <div className="bg-wolf-01 bg-cover bg-center sm:bg-top relative pt-2 flex flex-col text-white">
        <div className="bg-f-transp absolute"></div>
          <Nav />
        <motion.div
          className="z-20"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          exit={{
            y: -20,
            opacity: 0,
            transition: { duration: 0.5 }
          }}
        >
          <div className="flex flex-col leading-9">
          <motion.h2
              className="text-4xl text-white bg-gradient-to-r from-f-transp to-transparent p-5 ml-3 mt-2 sm:mt-3"
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              Dons
            </motion.h2>
            <div className="flex bg-gradient-to-r from-f-transp to-transparent mt-3 flex-col text-center md:text-left p-2 md:flex-row items-center justify-center md:justify-between md:min-h-33vh  mx-3">
                <p className="w-11/12 md:w-1/2 md:py-0 p-3">
                  O mundo espiritual divide muitos segredos com os lobisomens e outros metamorfos.
                  De acordo com um antigo pacto, os esp??ritos ensinam habilidades m??gicas chamadas Dons aos Garou. Os Dons permitem aos lobisomens concentrar uma energia espiritual para afetar a Tellurian. Tribos, aug??rios e at?? mesmo ra??as diferentes aprendem Dons dinstintos.
                </p>
              <img src={require('../images/wallpapers/wolf_soul.png')} alt="Dois Garou em comunh??o" className="w-11/12 md:w-1/2 h-60 object-cover md:py-0 py-3" />
            </div>
            <div className="flex bg-gradient-to-r from-f-transp to-transparent mt-3 flex-col-reverse text-center md:text-left p-2 md:flex-row items-center justify-center md:justify-between md:min-h-33vh mx-3">
              <img src={require('../images/wallpapers/caern.png')} alt="Caern em festa" className="w-11/12 md:w-1/2  h-60 object-cover md:py-0 py-3" />
                <p className="w-11/12 md:w-1/2 md:py-0 p-3">
                  Cada Grupo tem seus pr??prios segredos e suas pr??prias e exclusivas liga????es espirituais e, como consequ??ncia, existem muitos Dons espalhados ao longo de todos os livros que foram publicados, dificultando a busca ou tornando-a no m??nimo massiva. Esta ??rea foi criada para auxiliar esta oportunidade encontrada e aqui voc?? pode pesquisar rapidamente por um ou mais dons que desejar.
                </p>
            </div>
            <div className="flex bg-gradient-to-r from-f-transp to-transparent mt-3 flex-col text-center md:text-left p-2 md:flex-row items-center justify-center md:justify-between md:min-h-33vh mx-3">
                <p className="w-11/12 md:w-1/2 md:py-0 p-3">
                Para realizar a busca, voc?? pode escolher um ou mais filtros: filtros de Ra??as, Tribos e Aug??rios retornar??o qualquer dom que inclua um dos selecionados. Filtros de posto e livro s?? retornar??o os dons que tiverem os filtros selecionados. Ao selecionar algum filtro, ele aparecer?? em um pop-up no canto superior direito, onde voc?? poder?? acompanhar todos os filtros escolhidos e tamb??m remov??-los caso deseje.
                N??o selecionar nenhum filtro retornar?? uma lista com todos os dons.
                </p>
              <img src={require('../images/wallpapers/thunder-wyrm.png')} alt="Lobisomem enfrentando Wyrm Trov??o" className="w-11/12 md:w-1/2 object-cover md:py-0 py-3 h-60" />
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
            <div className="">
              <Filter
                name="Ra??as"
                select={this.featureSelected}
                statusMinimize={minimizeBreed}
                list={raca}
                nameMinimize="minimizeBreed"
                funcMin={this.minimizes}
                itemsSelected={[...feature, ...rankSelected, ...bookSelected]}
              />
              <Filter
                name="Tribos"
                select={this.featureSelected}
                statusMinimize={minimizeTrybe}
                list={tribos}
                nameMinimize="minimizeTrybe"
                funcMin={this.minimizes}
                itemsSelected={[...feature, ...rankSelected, ...bookSelected]}
              />
              <Filter
                name="Aug??rios"
                select={this.featureSelected}
                statusMinimize={minimizeAuspices}
                list={augurios}
                nameMinimize="minimizeAuspices"
                funcMin={this.minimizes}
                itemsSelected={[...feature, ...rankSelected, ...bookSelected]}
              />
              <Filter
                name="Postos"
                select={this.rankSelected}
                statusMinimize={minimizeRank}
                nameMinimize="minimizeRank"
                funcMin={this.minimizes}
                list={posto}
                itemsSelected={[...feature, ...rankSelected, ...bookSelected]}
              />
              <Filter
                name="Livros"
                select={this.bookSelected}
                statusMinimize={minimizeBook}
                nameMinimize="minimizeBook"
                funcMin={this.minimizes}
                list={this.bookList().sort()}
                itemsSelected={[...feature, ...rankSelected, ...bookSelected]}
              />
              <div className="w-full flex justify-center">
              <button
                className="w-95% sm:w-99% m-3 bg-black py-2 hover:border hover-border-white"
                onClick={this.giftReturn}
              >
                Realizar Busca
              </button>
              </div>
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
        </motion.div>
          <Footer />
      </div>
    );
  }
}