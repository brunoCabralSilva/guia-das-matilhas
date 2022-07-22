import React from 'react';

export default class Transition extends React.Component {
  render() {
    const { homeReturn } = this.props;
    return (
      <section className="flex flex-row relative justify-between items-center w-full h-full">
        <div className="absolute w-full h-full bg-g-transp" />
        <img
          src={require('../images/logos/arrow-left.png')}
          alt="Seta para baixo"
          className="w-24 px-4 z-20 animate-pulse hover:animate-pulse-fast"
          onClick={homeReturn}
        />
        <div className="flex flex-col items-end justify-center px-4 text-right">
          <h3 className="sm:text-xl z-20">
            Que Gaia tenha piedade de nós!
          </h3>
          <h4 className="sm:text-xl z-20 text-right pt-1">- Lobisomem: O Apocalipse (Ed. Revisada)</h4>
        </div>
      </section>
    );
  }
}