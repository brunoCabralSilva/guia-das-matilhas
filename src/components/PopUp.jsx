import React from 'react';
import { IoIosArrowDown } from "react-icons/io";

export default class PopUp extends React.Component {

  allFiltersReturn = () => {
    const {
      feature,
      rankSelected,
      bookSelected,
      minimizePopUp,
      removeRank,
      removeBook,
      divideFeature,
    } = this.props;

    const rankList = rankSelected.map((item) => {
      return (
        <div className="">
          <label htmlFor={item} className="">
            <input
              checked={true}
              id={item}
              name={item}
              type="checkbox"
              onChange={removeRank}
              className=""
            />
            {` ${item} `}
          </label>
        </div>
      );
    });
    const bookList = bookSelected.map((item) => {
      return (
        <div>
          <label htmlFor={item} className="">
            <input
              className=""
              checked={true}
              id={item}
              name={item}
              type="checkbox"
              onChange={removeBook}
            />
            {` ${item} `}
          </label>
        </div>
      );
    });
    return (
      <div className={
        minimizePopUp
          ? null
          : "hidden"}
      >
        <scroll-container>
          {divideFeature(feature)}
          <p className={
            rankSelected.length === 0
              ? "hidden"
              : "flex"}
          >
            Postos:
          </p>
          {rankList}
          <p className={
            bookSelected.length === 0
              ? "hidden"
              : "flex"}
          >
            Livros:
          </p>
          {bookList}
        </scroll-container>
      </div>
    );
  }

  render() {
    const {
      feature,
      rankSelected,
      bookSelected,
      minimizePopUp,
      minimizes,
      animationPopUp,
      nameFilterDisable,
    } = this.props;
    return (
      <div
        className={
          feature.length === 0 && rankSelected.length === 0 && bookSelected.length === 0
            ? "hidden transition duration-500"
            : 'bg-black flex flex-col right-0 top-0 fixed w-60 transition duration-500'
        }
      >
        <div
          className="flex flex-row p-2 text-white"
          onClick={() => minimizes('minimizePopUp')}
        >
          <p className={`${nameFilterDisable()} p-3 w-80%`}>Filtros selecionados:</p>
          <IoIosArrowDown
              onClick={() => minimizes('minimizePopUp')}
              className={
                minimizePopUp
                  ? "w-20% p-3 object-cover text-white transition duration-500"
                  : "w-20% p-4'object-cover text-white transition duration-500"
              }
            />
        </div>
        {this.allFiltersReturn()}
      </div>
    );
  }
}