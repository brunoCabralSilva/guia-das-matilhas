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
      <section className=" mx-3">
        <div
          className="w-full flex flex-row justify-between items-center bg-f-transp pt-2 px-4 my-2"
          onClick={() => funcMin(nameMinimize)}>
          <h2 className="" onClick={() => funcMin(nameMinimize)}>{name}</h2>
          <div className="" onClick={() => funcMin(nameMinimize)}>
            {
              statusMinimize
                ? <img
                  alt="seta para cima"
                  src={require('../images/logos/arrow-up.png')}
                  className="w-12"
                />
                : <img
                  alt="seta para baixo"
                  src={require('../images/logos/arrow-down.png')}
                  className="w-12"
                />
            }
          </div>
        </div>
        <div>
          <div
            className={
              statusMinimize
                ? null
                : "hidden"}
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