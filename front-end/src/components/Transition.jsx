import React from 'react';

export default class Transition extends React.Component {
  render() {
    const { homeReturn } = this.props;
    return (
      <section className="flex flex-row relative justify-between items-center w-full h-full bg-w20 bg-center">
        <div className="absolute w-full h-full bg-7-transp" />
          <img
            src={require('../images/logos/arrow-left.png')}
            alt="Seta para baixo"
            className="h-50% sm:h-80% w-24 mx-1 sm:mx-4 z-40 animate-pulse hover:animate-pulse-fast object-contain"
            onClick={homeReturn}
          />
        <div className="flex flex-col items-end justify-center px-4 font-andika text-right text-xl">
          <h3 className="z-20 sm:text-3xl font-bold">
            "Que Gaia tenha piedade de nós!"
          </h3>
          <h4 className="z-20 text-right pt-1 text-base sm:text-xl sm:font-bold">- Lobisomem: O Apocalipse (Ed. Revisada)</h4>
        </div>
      </section>
    );
  }
}