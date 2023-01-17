import React from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
// import Nav from '../components/Nav';
// import Filter from '../components/Filter';
// import GiftSearch from '../components/GiftSearch';
// import Footer from '../components/Footer';
// import PopUp from '../components/PopUp';
import fetch from '../fetch';

// const posto = require('../data/posto.json');

export default class Gifts extends React.Component {
  state = {
    listAllGifts: false,
    listAuspices: [],
    listBreeds: [],
    listTrybes: [],
    listBooks: [],
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

  async componentDidMount() {
    window.scrollTo(0, 0);
    console.log('olá');
    const data = await axios.get(`${fetch()}/gifts`);
    const allLists = await axios.get(`${fetch()}/gifts/lists`);
    console.log(allLists);
    console.log('data',data);

    this.setState({ 
      listAuspices: allLists.data.queryAuspices,
      listBreeds: allLists.data.queryBreeds,
      listTrybes: allLists.data.queryTrybes,
      listBooks: allLists.data.queryBooks,
      listAllGifts: data.data,
    });
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

    const breeds = breedFilter.map((item, index) => {
      return (
        <div key={ index } className="ml-4">
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

    const augurios = filtroAugurios.map((item, index) => {
      return (
        <div key={ index } className="ml-4">
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

    const tribos = filtroTribos.map((item, index) => {
      return (
        <div key={ index } className="ml-4">
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
      <div className="snap-start">
        <p className={` ${breeds.length === 0 ? "hidden" : "flex"} snap-start`}>
          Raças:
        </p>
        {breeds}
        <p className={`${augurios.length === 0 ? "hidden" : "flex"} snap-start mt-2 font-bold`}>
          Augúrios:
        </p>
        {augurios}
        <p className={`${tribos.length === 0 ? "hidden" : "flex"} snap-start mt-2 font-bold`}
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
      <div className="bg-wolf-01 bg-cover bg-center sm:bg-top pt-2 text-white flex flex-col justify-center">
        <div className="w-full items-center relative flex flex-col">
        <div className="bg-f-transp absolute"></div>
          {/* <Nav /> */}
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
            <div className="flex flex-col items-start my-2 ml-3">
              <div className="flex flex-col sm:flex-row sm:items-start">
                <div className="w-99% md:py-0 relative my-3 py-2 flex flex-col sm:flex-col justify-center sm:justify-start mr-4">
                  {/* <img src={require('../images/wallpapers/002.jpg')} alt="Dois Garou em comunhão" className="w-full object-cover h-full absolute z-0" /> */}
                  <div className="bg-7-transp absolute h-full w-full"/>
                  <p className="z-10 relative pt-4 px-4 text-center sm:text-left w-full">
                    O mundo espiritual divide muitos segredos com os lobisomens e outros metamorfos.
                    De acordo com um antigo pacto, os espíritos ensinam habilidades mágicas chamadas Dons aos Garou. Os Dons permitem aos lobisomens concentrar uma energia espiritual para afetar a Tellurian. Tribos, augúrios e até mesmo raças diferentes aprendem Dons dinstintos.
                  </p>
                  <p className="z-10 relative pt-2 sm:pt-4 pb-4 px-4 text-center sm:text-left w-full">
                    Cada Grupo tem seus próprios segredos e suas próprias e exclusivas ligações espirituais e, como consequência, existem muitos Dons espalhados ao longo de todos os livros que foram publicados, dificultando a busca ou tornando-a no mínimo massiva. Esta área foi criada para auxiliar esta oportunidade encontrada e aqui você pode pesquisar rapidamente por um ou mais dons que desejar.
                  </p>
                </div>
              </div>
              <div className="w-99% md:py-0 relative mt-2 mb-3 flex flex-col justify-center sm:justify-start mr-4">
                  {/* <img src={require('../images/wallpapers/touch.jpg')} alt="Dois Garou em comunhão" className="w-full object-cover h-full absolute z-0" /> */}
                  <div className="bg-7-transp absolute h-full w-full"/>
                <h1 className="w-full my-6 sm:ml-4 text-2xl font-bold relative text-center sm:text-left">Como utilizar o filtro de busca</h1>
                <ul className="list-disc ml-10 relative pb-5">
                  <li className="w-99%">
                    Filtros de Raças, Tribos e Augúrios retornarão qualquer dom que inclua um dos selecionados:
                  </li>
                  <p className="py-4 pr-2">
                    <strong>Exemplo</strong> - Ao selecionar raça hominídea e tribo dos roedores de ossos, a busca retornará qualquer dom que pertença aos hominídeos ou aos roedores de ossos, sem necessariamente precisar pertencer aos dois filtros selecionados;
                  </p>
                  <li className="w-99%">
                    Filtros de posto e livro só retornarão os dons que tiverem os filtros selecionados:
                  </li>
                  <p className="py-4">
                    <strong>Exemplo</strong> - Se selecionar o posto fostern, só aparecerão dons que pertencerem ao posto fostern ou, ainda, se selecionar o livro W20, só aparecerão dons pertencentes ao W20;
                  </p>
                  <li className="w-99%">
                    Mesclando as duas categorias de filtros acima citados, você pode achar qualquer dom que desejar:
                  </li>
                  <p className="py-4">
                    <strong>Exemplo</strong> - ao selecionar os filtros de augúrio Ahroun, tribo Wendigo e posto Ancião, serão retornados todos os dons de posto Ancião que pertençam ao augúrio Ahroun ou a tribo Wendigo;
                  </p>
                  <li className="w-99%">
                    Ao selecionar algum filtro, o item selecionado aparecerá em um pop-up no canto inferior direito, onde você poderá acompanhar todos os filtros escolhidos e também removê-los caso deseje;
                  </li>
                  <li className="w-99%">
                    Não selecionar nenhum filtro retornará uma lista com todos os dons.
                  </li>
                </ul>
              </div>
          </div>
            {/* <PopUp
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
            /> */}
            {/* <div className="flex flex-wrap">
              <Filter
                name="Raças"
                select={this.featureSelected}
                statusMinimize={minimizeBreed}
                list={this.state.listBreeds}
                nameMinimize="minimizeBreed"
                funcMin={this.minimizes}
                itemsSelected={[...feature, ...rankSelected, ...bookSelected]}
              />
              <Filter
                name="Tribos"
                select={this.featureSelected}
                statusMinimize={minimizeTrybe}
                list={this.state.listTrybes}
                nameMinimize="minimizeTrybe"
                funcMin={this.minimizes}
                itemsSelected={[...feature, ...rankSelected, ...bookSelected]}
              />
              <Filter
                name="Augúrios"
                select={this.featureSelected}
                statusMinimize={minimizeAuspices}
                list={this.state.listAuspices}
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
                list={this.state.listBooks.sort()}
                itemsSelected={[...feature, ...rankSelected, ...bookSelected]}
              />
              <div className="w-full flex justify-center">
              <button
                className="w-95% sm:w-99% m-3 bg-black py-2 hover:border hover-border-white"
                onClick={ this.giftReturn }
              >
                Realizar Busca
              </button>
              </div>
            </div> */}
            {/* {
              showGifts && this.state.listAllGifts ? 
                <div>
                  <GiftSearch
                    listAllGifts={this.state.listAllGifts}
                    featureSearch={featureSearch}
                    rankSearch={rankSearch}
                    bookSearch={bookSearch}
                  />
                </div>
                : null
            } */}
          </div>
        </motion.div>
      </div>
        {/* <Footer /> */}
      </div>
    );
  }
}