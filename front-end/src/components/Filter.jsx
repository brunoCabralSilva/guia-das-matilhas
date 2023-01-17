import React from 'react';
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
      <section className='mx-3 w-full'>
        <div
          className="flex flex-row justify-between items-center bg-f-transp py-2 px-4 my-2"
          onClick={() => funcMin(nameMinimize)}>
          <h2 className="text-xl" onClick={() => funcMin(nameMinimize)}>{name}</h2>
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