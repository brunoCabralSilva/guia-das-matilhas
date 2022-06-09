import React from 'react';
import '../css/giftexibition.css';

export default class GiftExibition extends React.Component {
  state = {
    giftDescription: 'disable',
  }

  enableDisableGift = () => {
    const { giftDescription } = this.state;
    if (giftDescription === 'disable') {
      this.setState({ giftDescription: 'gift-found-content' });
    } else {
      this.setState({ giftDescription: 'disable' });
    }
  }
  render() {
    const {
      source,
      arrayCategories,
      arraysubtypes,
      description,
      system,
      name,
      level,
    } = this.props;
    const { giftDescription } = this.state;
    return (
      <section className={
        giftDescription === 'disable'
          ? "gift-found"
          : "gift-found-full"}
      >
        <div className='gift-name-and-img' onClick={this.enableDisableGift}>
          <p
            className={
              giftDescription === 'disable'
                ? "title-gift-found"
                : "title-gift-found-full"
            }
            onClick={this.enableDisableGift}
          >
            <strong>{name} (Nível {level})</strong>
          </p>
          {
            giftDescription === 'disable'
              ? <img
                alt="seta para baixo"
                src={require('../images/logos/arrow-down.png')}
                className="img-arrow-exibition"
              />
              : <img
                alt="seta para cima"
                src={require('../images/logos/arrow-up.png')}
                className="img-arrow-exibition"
              />
          }
        </div>
        <div className={giftDescription}>
          <p className="gift-found-content-p"><strong>Fonte:</strong> {source}, pg. X</p>
          <p className="gift-found-content-p"><strong>Pertencente a: </strong>{arrayCategories}</p>
          {arraysubtypes.length === 0
            ? <p> </p>
            : <p className="gift-found-content-p"><strong>Pré-Requisito: </strong>{arraysubtypes}</p>}
          <p className="gift-found-content-p">Texto Traduzido</p>
          <p className="gift-found-content-p"><strong>Sistema:</strong> Sistema Traduzido</p>
          <p className="gift-found-content-p"><strong>Texto do livro:</strong></p>
          <p className="gift-found-content-p">{description}</p>
          <p className="gift-found-content-p"><strong>System:</strong> {system}</p>
        </div>
      </section >
    );
  }
}