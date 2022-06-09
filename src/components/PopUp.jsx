import React from 'react';
import '../css/popup.css';

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
        <div>
          <label htmlFor={item} className="label-item">
            <input
              checked={true}
              id={item}
              name={item}
              type="checkbox"
              onChange={removeRank}
              className="label-item"
            />
            {` ${item} `}
          </label>
        </div>
      );
    });
    const bookList = bookSelected.map((item) => {
      return (
        <div>
          <label htmlFor={item} className="label-item">
            <input
              className="label-item"
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
          : "disable"}
      >
        <scroll-container>
          {divideFeature(feature)}
          <p className={
            rankSelected.length === 0
              ? "disable"
              : "title-pop-up"}
          >
            Postos:
          </p>
          {rankList}
          <p className={
            bookSelected.length === 0
              ? "disable"
              : "title-pop-up"}
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
            ? "disable"
            : animationPopUp
        }
      >
        <div
          className="div-pop-up"
          onClick={() => minimizes('minimizePopUp')}
        >
          <p className={`${nameFilterDisable()} classFilterEnable `}>Filtros selecionados:</p>
          {minimizePopUp
            ? <img
              src={require('../images/logos/arrow-up.png')}
              alt="Seta para cima"
              onClick={() => minimizes('minimizePopUp')}
              className={
                minimizePopUp
                  ? "img-arrow-pop-up-max"
                  : "img-arrow-pop-up"
              }
            />
            : <img
              src={require('../images/logos/arrow-down.png')}
              alt="seta para baixo"
              onClick={() => minimizes('minimizePopUp')}
              className={
                minimizePopUp
                  ? "img-arrow-pop-up-max"
                  : "img-arrow-pop-up"
              }
            />
          }
        </div>
        {this.allFiltersReturn()}
      </div>
    );
  }
}