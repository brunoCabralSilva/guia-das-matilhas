import React from 'react';
import '../css/list.css';
import '../css/list-images.css';

export default class List extends React.Component {
  render() {
    const {
      list,
      select,
      type,
      itemsSelected,
    } = this.props;
    const divList = list.map((element) => {
      const {
        imagemGlifoBranco,
        imgGlifoSemFundo,
        imgGlifo,
        nome,
        id,
        furia,
        posto,
      } = element;
      if (type === "Augúrios") {
        return (
          <div
            className={
              itemsSelected.includes(nome)
              ? "container-list-selected"
              : "container-list"
            }
            name={nome} onClick={select}
          >
            <img
              src={require(`../images/auspices/${imagemGlifoBranco}`)}
              alt={nome}
              name={nome}
              className={`image-list image-auspices-${furia}`}
            />
            <p name={nome}>{nome}</p>
          </div>
        );
      }

      if (type === "Tribos") {
        return (
          <div
            className={
              itemsSelected.includes(nome)
              ? "container-list-selected"
              : "container-list"
            }
            name={nome} onClick={select}
          >
            <img
              src={require(`../images/trybes/${imgGlifoSemFundo}`)}
              className={`image-list image-trybe-${id}`}
              alt={nome}
              name={nome}
            />
            <p>{nome}</p>
          </div>
        );
      }

      if (type === 'Postos') {
        return (
          <div
            className={
              itemsSelected.includes(posto)
              ? "container-list-selected container-list-text"
              : "container-list container-list-text"
            }
            name={nome} onClick={select}
          >
            <p name={nome}>{posto}</p>
          </div>
        );
      }

      if (type === 'Raças') {
        return (
          <div
            className={
              itemsSelected.includes(nome)
              ? "container-list-selected"
              : "container-list"
            }
            name={nome} onClick={select}
          >
            <img
              src={require(`../images/breeds/${imgGlifo}`)}
              className={`image-list image-breed-${id}`}
              alt={nome}
              name={nome}
            />
            <p name={nome}>{nome}</p>
          </div>
        );
      }

      return (
        <div
            className={
              itemsSelected.includes(element)
              ? "container-list-selected container-list-text"
              : "container-list container-list-text"
            }
            name={nome} onClick={select}
          >
          <p name={element}>{element}</p>
        </div>
      );
    });

    return (
      <div className="container-all-lists">
        {divList}
      </div>
    );
  }
}