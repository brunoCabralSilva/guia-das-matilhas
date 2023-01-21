import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import fetch from '../../fetch';

const listMenu = [
  {
    img: 'https://64.media.tumblr.com/e3a999e989e0f17dac10be8b649707eb/af64a96270ae26f2-dd/s400x600/c1164ced59af1891c7c60ca70613a4d4643d0bb9.gifv',
    name: 'Início',
    link: '/',
    col: 'col-span-3 sm:col-span-2',
  },
  {
    img: 'https://64.media.tumblr.com/c9575ab369921aee090c02f7cb3da9e7/8305528fa1608264-bc/s640x960/5d7e370cfc67635f488cca966080910577aa5f78.gif',
    name: 'Tribos',
    col: 'col-span-2 sm:col-span-2',
  },
  {
    img: 'https://media4.giphy.com/media/S9hmjJG3ZL4gCSWXze/giphy.gif?cid=790b7611a6244ac30bd8cab58718cf6f40efb92a3b78e81a&rid=giphy.gif&ct=g',
    name: 'Augúrios',
    col: 'col-span-2 sm:col-span-1',
  },
  {
    img: 'https://64.media.tumblr.com/4fdd580543a70f91cca8ad8c3536b13a/68794e779f4c07af-37/s540x810/d10a99c1fba35bb8ae9416029915ddfd8d3ab675.gif',
    name: 'Sobre',
    col: 'col-span-3 sm:col-span-1',
  },
  {
    img: 'https://64.media.tumblr.com/4393e9e60edec4a6e821d5f14892a87a/af64a96270ae26f2-ea/s400x600/e8c3dae337ef0dadb718ac4718cac91631265f5b.gifv',
    name: 'Raças',
    col: 'col-span-5 sm:col-span-1',
  },
  {
    img: 'https://64.media.tumblr.com/a72bd03fd505da05c2062d6191a8aa8a/8305528fa1608264-fd/s640x960/959cb2c224904b96b93b4a04a6beedfa810937fd.gif',
    name: 'Dons',
    link:'/painel-dons',
    col: 'col-span-3 sm:col-span-3',
  },
  {
    img: 'https://64.media.tumblr.com/bbd00f6149aeeb146b07c9fc5b778407/8305528fa1608264-fc/s640x960/e5dc5fbc6bf1c866c5135161e9962e13984145fe.gif',
    name: 'Perfil',
    col: 'col-span-2 sm:col-span-2',
  },
  {
    img: 'https://64.media.tumblr.com/46bfcab063ecc267e34e95f163a55870/8305528fa1608264-22/s640x960/4bf52343deb15f79350bd118c6a2d06fd192f045.gif',
    name: 'Rituais',
    col: 'col-span-2 sm:col-span-1',
  },
  {
    img: 'https://i.pinimg.com/originals/27/4d/1d/274d1d08a0366d47bd20fe5bd1c447ff.gif',
    name: 'Parceiros',
    col: 'col-span-3 sm:col-span-2',
  },
];

export default class Painel extends React.Component {
  
  async componentDidMount() {
    const { history } = this.props;
    const token = localStorage.getItem('token');
    try {
      const authentication = await axios.post (`${fetch()}/login/verify`, {
        token, 
      });
      if (!authentication.data.token) {
        history.push('/login');
      }
    } catch(error) {
      console.log(error.message);
    }
  };

  render() {
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
                  src={`${list.img}`}
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
}