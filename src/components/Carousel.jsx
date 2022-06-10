import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../css/carousel.css';

export default function Carousel(props) {
  const { list, repository } = props;
  const divCardItems = useRef(null);

  const handleClickRight = () => {
    divCardItems.current.scrollLeft -= 800;
  }

  const handleClickLeft = () => {
    divCardItems.current.scrollLeft += 800;
  }

  return (
    <div>
      <div className="carousel-div">
        <button
          class="btn-carousel"
          id="btn-left-carousel"
          onClick={handleClickRight}
        >
          <img
            src={require('../images/logos/arrow-left-dark.png')}
            alt = "seta para a esquerda"
            className="img-btn-carousel"
            onClick={handleClickRight}
            />
        </button>
        <div className="all-cards-carousel"
          ref={divCardItems}>
          {list.map((item) => {
            const { imagem, nome } = item;
            return (
              <Link to=""
                className="card-carousel"
              >
                <img
                  src={require(`../images/${repository}/${imagem}`)}
                  alt={nome}
                  className={`img-card-carousel-${repository}`}
                />
                <h1 className="h1-card-carousel">{nome}</h1>
              </Link>
            );
          })}
        </div>
        <button
          className="btn-carousel"
          id="btn-right-carousel"
          onClick={handleClickLeft}
        >
          <img
            src={require('../images/logos/arrow-right-dark.png')}
            alt = "seta para a direita"
            className="img-btn-carousel"
            />
        </button>
      </div>
    </div >
  );
}