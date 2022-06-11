import React from 'react';
import { useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
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
          onClick={handleClickRight}
        >
          <IoIosArrowBack />
        </button>
        <div className="all-cards-carousel"
          ref={divCardItems}>
          {list.map((item) => {
            const { imagem, nome, lua } = item;
            return (
              <Link to=""
                className={
                  repository==="trybes"
                  ? "card-carousel"
                  : "card-carousel-others"
                }
              >
                <img
                  src={require(`../images/${repository}/${imagem}`)}
                  alt={nome}
                  className={`img-card-carousel-${repository}`}
                />
                <div>
                  <h1 className="h1-card-carousel">{nome}</h1>
                  <h1 className="h1-card-carousel-2">
                    {lua
                      ? `(${lua})`
                      : null
                    }
                  </h1>
                </div>
              </Link>
            );
          })}
        </div>
        <button
          className="btn-carousel"
          onClick={handleClickLeft}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div >
  );
}