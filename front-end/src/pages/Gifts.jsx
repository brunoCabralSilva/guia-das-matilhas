import React from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Nav from '../components/Nav';
import Filter from '../components/Filter';
import GiftSearch from '../components/GiftSearch';
import Footer from '../components/Footer';
import PopUp from '../components/PopUp';
import TextFromGifts from '../components/TextFromGifts';
import fetch from '../fetch';

const posto = require('../data/posto.json');

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
    const data = await axios.get(`${fetch()}/gifts`);
    const allLists = await axios.get(`${fetch()}/gifts/lists`);

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
      } return null;
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
            <TextFromGifts />
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
            <div className="flex flex-wrap">
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
            </div>
            {
              showGifts && this.state.listAllGifts
              ? <div>
                  <GiftSearch
                    listAllGifts={this.state.listAllGifts}
                    featureSearch={featureSearch}
                    rankSearch={rankSearch}
                    bookSearch={bookSearch}
                  />
                </div>
              : null
            }
          </div>
        </motion.div>
      </div>
        <Footer />
      </div>
    );
  }
}