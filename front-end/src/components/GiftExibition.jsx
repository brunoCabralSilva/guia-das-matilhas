import React from 'react';
import axios from 'axios';
import fetch from '../fetch';

export default class GiftExibition extends React.Component {
  state = {
    giftDescription: 'hidden',
  }

  deleteItem = async (name, level, description) => {
    const deleteGift =  await axios.delete(`${fetch()}/gifts/delete`, { data: { name, level, description }});
    window.alert(deleteGift.data.message);
  }

  enableDisableGift = () => {
    const { giftDescription } = this.state;
    if (giftDescription === 'hidden') {
      this.setState({ giftDescription: 'gift-found-content' });
    } else {
      this.setState({ giftDescription: 'hidden' });
    }
  }

  returnListBelongs = (arrayCategories) => {
    const array = arrayCategories.map((array, index) => {
      if (index + 1 < arrayCategories.length) {
        return (<span key={ index } >
          {array.belong_name}
          {', '}
        </span>
        );
      }
      else { 
        return (
          <span key={ index } >
            {array.belong_name}
            {'.'}
          </span>
        );
      }
      });
    return array;
  };

  returnListFonts = (source) => {
    return source.map((array, index) => (
      <p key={ index } >
        Livro:
        {' '}
        {array.book}
        {', '}
        Pag.
        {' '}
        {array.page}
        {' - '}
        Edição:
        {' '}
        { array.edition }
        {'.'}
      </p>
    ));
  };

  render() {
    const {
      source,
      arrayCategories,
      arraysubtypes,
      description,
      descriptionPtBr,
      systemPtBr,
      system,
      name,
      level,
      admin
    } = this.props;
    const { giftDescription } = this.state;
    return (
      <section className={
        giftDescription !== 'hidden'
          ? "w-full bg-gradient-to-r from-f-transp to-transparent p-5 ml-3 mt-2 sm:mt-3"
          : "w-full sm:w-48% bg-gradient-to-r from-f-transp to-transparent p-5 ml-3 mt-2 sm:mt-3"}
      >
        <div className='flex items-center justify-between' onClick={this.enableDisableGift}>
          <p
            className={
              giftDescription !== 'hidden'
                ? "w-full"
                : "w-full sm:w-1/2"
            }
            onClick={this.enableDisableGift}
          >
            <strong>{name} (Nível {level})</strong>
          </p>
          {/* {
            giftDescription === 'hidden'
              ? <img
                alt="seta para baixo"
                src={require('../images/logos/arrow-down.png')}
                className="h-12 pr-4"
              />
              : <img
                alt="seta para cima"
                src={require('../images/logos/arrow-up.png')}
                className="h-12 pr-4"
              />
          } */}
        </div>
        {giftDescription !== 'hidden' && <hr className="my-3 w-9/12 sm:w-10/12 bg-white text-white" />}
        <div className={giftDescription}>
          <p className="my-2"><strong>Fonte:</strong> { this.returnListFonts(source) }</p>
          <p className="my-2"><strong>Pertencente a: </strong>
          { this.returnListBelongs(arrayCategories) }</p>
          {arraysubtypes.length === 0
            ? <p> </p>
            : <p className="my-2"><strong>Pré-Requisito: </strong>{ arraysubtypes }</p>}
          <p className="my-2"><strong>Texto Traduzido: </strong>{ descriptionPtBr }</p>
          <p className="my-2"><strong>Sistema:</strong> { systemPtBr }</p>
          <p className="my-2"><strong>Texto do livro:</strong></p>
          <p className="my-2">{description}</p>
          <p className="my-2"><strong>System:</strong> {system}</p>
          {
            admin &&
            <div className="mt-6">
              <button className="bg-black mr-1 p-3">Editar</button>
              <button
                className="bg-black ml-2 p-3"
                onClick={ () => this.deleteItem(name, level, description) }
              >
                Excluir
              </button>
            </div>
          }
        </div>
      </section >
    );
  }
}