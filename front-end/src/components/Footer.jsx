import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-f-transp text-white p-0 flex flex-col sm:flex-row justify-between items-center">
        <div className="sm:w-1/4 flex flex-row justify-center sm:justify-start p-2 my-4 sm:my-0">
          <img
            src={require('../images/logos/Garou Nordeste.png')}
            alt="Logo do Garou Nordeste"
            className="w-16"
          />
          <img
            src={require('../images/logos/Crônicas da Kombi.png')}
            alt="Logo da Matilha da Kombi"
            className="w-16"
          />
        </div>
        <div className="sm:w-3/4 p-3 sm:pr-6">
          <p className="text-center sm:text-right w-full">© 2022 Copyright - Bruno Gabryell Cabral da Silva & Thiago Lucas Martins da Silva</p>
        </div>
      </footer>
    );
  }
}