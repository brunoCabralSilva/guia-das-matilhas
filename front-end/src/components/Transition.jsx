import React from 'react';

export default class Transition extends React.Component {
  render() {
    const { homeReturn } = this.props;
    return (
      <section className="flex text-white flex-row relative justify-between items-center w-full h-full bg-w20 bg-center ">
        <img
          src={require('../images/menu/werewolfw20.png')}
          className="absolute h-full w-full object-cover"
          alt=""
        />
        <div className="absolute w-full h-full bg-black/80" />
          <img
            src={require('../images/logos/arrow-left.png')}
            alt="Seta para o retorno"
            className="h-50% cursor-pointer sm:h-80% w-24 mx-1 sm:mx-4 z-40 animate-pulse hover:animate-pulse-fast object-contain"
            onClick={homeReturn}
          />
        <div className="absolute hidden w-full sm:flex flex-col items-end justify-center px-4 font-andika text-right text-xl">
          <h3 className="z-20 sm:text-3xl font-bold">
            "Que Gaia tenha piedade de nós!"
          </h3>
          <h4 className="z-20 text-right pt-1 text-base sm:text-xl sm:font-bold">- Lobisomem: O Apocalipse (Ed. Revisada)</h4>
        </div>
        <div className="sm:hidden w-full sm:pl-4 z-30 pl-0 flex flex-row justify-center my-4 ">
          <img
            src={require('../images/logos/Garou Nordeste.png')}
            alt="Logo do Garou Nordeste"
            className="w-16"
          />
          <img
            src={require('../images/logos/Crônicas da Kombi.png')}
            alt="Logo da Matilha da Kombi"
            className="w-16 ml-3"
          />
        </div>
      </section>
    );
  }
}