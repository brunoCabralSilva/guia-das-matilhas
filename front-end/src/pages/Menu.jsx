import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Transition from '../components/Transition';

const list = [
  {
    img: 'garou_nordeste.jpg',
    name: 'Garou Nordeste',
    link: '/garou-nordeste',
    class: 'col-span-2 row-span-1 md:col-span-1 md:row-span-2',
  },
  {
    img: 'https://media3.giphy.com/media/eGNpmOUeIIYUB4P4Al/giphy.gif?cid=790b76113d42c68657c63c771efd15378e71009f3ac51c5f&rid=giphy.gif&ct=g',
    name: 'Blog',
    link: '/page',
    class: 'col-span-2 row-span-2 md:col-span-1 md:row-span-4',
  },
  {
    img: 'kombi.jpg',
    name: 'Matilha da Kombi',
    link: '/matilha-da-kombi',
    class: 'flex md:hidden col-span-2 row-span-1 md:col-span-1 md:row-span-2',
  },
  {
    img: 'https://64.media.tumblr.com/e3a999e989e0f17dac10be8b649707eb/af64a96270ae26f2-dd/s400x600/c1164ced59af1891c7c60ca70613a4d4643d0bb9.gifv',
    name: 'Dons',
    link: '/dons',
    class: 'col-span-4 row-span-1 md:col-span-2 md:row-span-2',
  },
  {
    img: 'kombi.jpg',
    name: 'Matilha da Kombi',
    link: '/matilha-da-kombi',
    class: 'md:flex hidden col-span-2 row-span-1 md:col-span-1 md:row-span-2',
  },
  {
    img: 'https://www.icegif.com/wp-content/uploads/waterfall-icegif.gif',
    name: 'Admin',
    link: '/login',
    class: 'col-span-2 row-span-1 md:col-span-1 md:row-span-2',
  },
  {
    img: 'https://64.media.tumblr.com/4393e9e60edec4a6e821d5f14892a87a/af64a96270ae26f2-ea/s400x600/e8c3dae337ef0dadb718ac4718cac91631265f5b.gifv',
    name: 'Parceiros',
    link: '/parceiros',
    class: 'col-span-2 row-span-1 md:col-span-1 md:row-span-2',
  },
];

export default class Menu extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  homeReturn = () => {
    const { history } = this.props;
    history.push('/');
    
  }
  render() {
    const item = {
      hidden: {
        y: 20,
        opacity: 0
      },
      visible: (index) => ({
        y: 0,
        opacity: 1,
        transition: {
          delay: 0.5 + (0.1 * index),
          duration: 0.5,
          type: 'spring',
          stiffness: 150
        }
      }),
      exit: (index) => ({
        y: 20,
        opacity: 0,
        transition: {
          delay: (0.1 * index),
          duration: 0.1,
        }
      }),
    }

    return (
      <section className="">
        <div className="grid grid-rows-5 grid-cols-4 gap-2 items-center justify-center h-screen p-2">
          <motion.div
            className="flex items-end h-full relative col-span-4 row-span-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 1,
              type: 'spring',
              stiffness: 150
            }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <div className="darkness-more"></div>
            <Transition homeReturn={this.homeReturn} />
          </motion.div>

          {
            list.map((nav, index) => (
              <motion.div
                key={index}
                className={`${nav.class} flex h-full relative hover:border hover:border-white`}
                custom={index}
                variants={item}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                { nav.name === 'Garou Nordeste' || nav.name === "Matilha da Kombi"
                ? <Link
                  to={nav.link}
                  >
                  <img
                    src={require(`../images/menu/${nav.img}`)}
                    alt="werewolf"
                    className="h-full w-full absolute object-cover"
                  />
                  <p className="w-full h-full absolute z-10 text-white font-bold flex items-end p-2">
                    {nav.name}
                  </p>
                </Link>
                : <Link
                to={nav.link}
                >
                <img
                  src={nav.img}
                  alt="werewolf"
                  className="h-full w-full absolute object-cover"
                />
                {console.log(nav.name)}
                <p className="w-full h-full absolute z-10 text-white font-bold flex items-end p-2">
                  {nav.name}
                </p>
              </Link>
                }
              </motion.div>
            ))
          }
        </div>
        <div className="bg-black"><Footer /></div>
      </section>
    );
  }
}