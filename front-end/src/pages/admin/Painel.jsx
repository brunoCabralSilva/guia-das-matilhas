import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import fetch from '../../fetch';

const listMenu = [
  {
    img: 'https://64.media.tumblr.com/211b80132af34bd972de8120549c5bd8/68794e779f4c07af-b6/s540x810/9bf323293d4da6cd7bea260ca02a3fdfeefed162.gif',
    name: 'Tribos',
    col: 'col-span-3 sm:col-span-2',
  },
  {
    img: 'https://64.media.tumblr.com/c9575ab369921aee090c02f7cb3da9e7/8305528fa1608264-bc/s640x960/5d7e370cfc67635f488cca966080910577aa5f78.gif',
    name: 'Raças',
    col: 'col-span-2 sm:col-span-2',
  },
  {
    img: 'https://64.media.tumblr.com/1d963ed7421196b4d274b4fdf372fb57/9dfb927208d4ab3b-fc/s540x810/6b24aea8c33dfc0529c924af358abe69b5e4043b.gifv',
    name: 'Augúrios',
    col: 'col-span-2 sm:col-span-1',
  },
  {
    img: 'https://www.wikitree.com/photo.php/f/f9/Cook-24870-1.gif',
    name: 'Blog',
    col: 'col-span-3 sm:col-span-1',
  },
  {
    img: 'https://amazonaid.org/wp-content/uploads/2019/02/ezgif.com-optimize.gif',
    name: 'Sobre',
    col: 'col-span-5 sm:col-span-1',
  },
  {
    img: 'https://i.pinimg.com/originals/fa/e4/85/fae4856baa42a511b653a225359bc7ee.gif',
    name: 'Dons',
    link:'/painel-dons',
    col: 'col-span-3 sm:col-span-3',
  },
  {
    img: 'https://media4.giphy.com/media/S9hmjJG3ZL4gCSWXze/giphy.gif?cid=790b7611a6244ac30bd8cab58718cf6f40efb92a3b78e81a&rid=giphy.gif&ct=g',
    name: 'Perfil',
    col: 'col-span-2 sm:col-span-2',
  },
  {
    img: 'https://media3.giphy.com/media/eGNpmOUeIIYUB4P4Al/giphy.gif?cid=790b76113d42c68657c63c771efd15378e71009f3ac51c5f&rid=giphy.gif&ct=g',
    name: 'Rituais',
    col: 'col-span-2 sm:col-span-1',
  },
  {
    img: 'https://i.pinimg.com/originals/87/81/0a/87810a0cf7c9f3d787b2a4059ab601ed.gif',
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
              src={require(`${list.img}`)}
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