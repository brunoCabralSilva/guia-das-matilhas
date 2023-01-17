import React from 'react';

export default class PopUp extends React.Component {
  state = {
    value: false,
  };

  allFiltersReturn = () => {
    const {
      feature,
      rankSelected,
      bookSelected,
      removeRank,
      removeBook,
      divideFeature,
    } = this.props;

    const rankList = rankSelected.map((item, index) => {
      return (
        <div key={ index } className="snap-start ml-4">
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

    const bookList = bookSelected.map((item, index) => {
      return (
        <div key={ index } className="snap-start ml-4">
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
      <div className="ml-1 sm:ml-3 mt-5 sm:mt-0 overflow-y-auto h-80% snap-y"
      >
        <span className="ml-4">{divideFeature(feature)}</span>
        <p className={`${rankSelected.length === 0 ? "hidden" : "flex"} mt-2 font-bold snap-start`}
        >
          Postos:
        </p>
        {rankList}
        <p className={`${bookSelected.length === 0 ? "hidden" : "flex"} mt-2 font-bold snap-start`}
        >
          Livros:
        </p>
        {bookList}
      </div>
    );
  }

  filterFunction = () => {
    const { value } = this.state;
    if (value) {
      return('bg-boca min-w-60 flex flex-col mr-1 top-0 right-1 bottom-2 sm:mr-0 mt-4 fixed transition duration-500');
  } return('bg-boca rounded-full p-1 flex flex-col right-0 bottom-0 mb-4 mr-4 fixed transition duration-500 border border-white');
}

  render() {
    const { value } = this.state;
    const {
      feature,
      rankSelected,
      bookSelected,
      minimizePopUp,
      minimizes,
    } = this.props;
    return (
      <div
        className={
          feature.length === 0 && rankSelected.length === 0 && bookSelected.length === 0
            ? "hidden"
            : this.filterFunction()
        }
      >
        <div
          className={`p-2 text-white relative ${value ? 'h-screen w-full' : 'min-h-1' }`}
        >
          <div
            className="flex flex-row items-center w-full"
            onClick={() => {
              this.setState({ value: !value });
              minimizes(minimizePopUp);
            }}
          >
            {/* <img
              src={require('../images/logos/filter.png')}
              className={`object-contain h-8 ${value && 'mt-3 ml-2 mb-3 animate-pulse-fast'}`}
              alt="filter"
            /> */}
            {value && <span className="text-2xl font-bold pl-5">Filtros</span>}
          </div>
          <span className="text-white text-left z-40">{value && this.allFiltersReturn() }</span>
        </div>
      </div>
    );
  }
}