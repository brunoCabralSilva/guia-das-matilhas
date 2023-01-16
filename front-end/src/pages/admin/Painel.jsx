import axios from 'axios';
import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import fetch from '../../fetch';

export default function Painel() {
  const history = useHistory();
  const listMenu = [
    {
      img: 'earthblood.gif',
      name: 'Tribos',
      col: 'col-span-3 sm:col-span-2',
    },
    {
      img: 'lupus.jpg',
      name: 'Raças',
      col: 'col-span-2 sm:col-span-2',
    },
    {
      img: 'moon.jpg',
      name: 'Augúrios',
      col: 'col-span-2 sm:col-span-1',
    },
    {
      img: 'watterfall.gif',
      name: 'Blog',
      col: 'col-span-3 sm:col-span-1',
    },
    {
      img: 'night-forest.jpg',
      name: 'Sobre',
      col: 'col-span-5 sm:col-span-1',
    },
    {
      img: 'forest.gif',
      name: 'Dons',
      link:'/painel-dons',
      col: 'col-span-3 sm:col-span-3',
    },
    {
      img: 'heaven.jpg',
      name: 'Perfil',
      col: 'col-span-2 sm:col-span-2',
    },
    {
      img: 'ritual.gif',
      name: 'Rituais',
      col: 'col-span-2 sm:col-span-1',
    },
    {
      img: 'forest2.jpg',
      name: 'Parceiros',
      col: 'col-span-3 sm:col-span-2',
    },
  ];
  useEffect(() => {
    const authToken = async () => {
    const token = localStorage.getItem('token');
    const authentication = await axios.post (`${fetch()}/painel`, {
      token, 
    });
    if (!authentication.data.token) {
      history.push('/login');
    }
    }
    authToken();
  }, []);
  return(
    <div className="grid grid-rows-3 grid-cols-5 gap-2 m-4 items-center justify-center">
      {
        listMenu.map((list, index) => (
        <Link
          key={ index }
          className={`${list.col} h-30vh relative`}
          to={list.link}
          >
          <img
            src={require(`../../images/menu/${list.img}`)}
            alt="werewolf"
            className="h-full w-full absolute object-cover"
          />
          <p className="w-full h-full absolute z-10 text-white font-bold flex items-end p-2">
            {list.name}
          </p>
        </Link>
        ))
      }
    </div>
  );
}