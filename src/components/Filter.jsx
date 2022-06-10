import React from 'react';
import '../css/filter.css';
import List from '../components/List';

export default class Filter extends React.Component {
  render() {
    const {
      name,
      select,
      statusMinimize,
      list,
      nameMinimize,
      funcMin,
      itemsSelected,
    } = this.props;
    return (
      <section className="filter">
        <div
          className="filter-name-arrow"
          onClick={() => funcMin(nameMinimize)}>
          <h2 onClick={() => funcMin(nameMinimize)}>{name}</h2>
          <div className="filter-arrow-animate" onClick={() => funcMin(nameMinimize)}>
            {
              statusMinimize
                ? <img
                  alt="seta para cima"
                  src={require('../images/logos/arrow-up.png')}
                  className="img-arrow"
                />
                : <img
                  alt="seta para baixo"
                  src={require('../images/logos/arrow-down.png')}
                  className="img-arrow"
                />
            }
          </div>
        </div>
        <div>
          <div
            className={
              statusMinimize
                ? null
                : "disable"}
          >
            <List
              list={list}
              type={name}
              select={select}
              itemsSelected={itemsSelected}
            />
          </div>
        </div>
      </section >
    );
  }
}