import React from 'react';
import { motion } from 'framer-motion';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Allies from '../components/Allies';
import friends from '../data/friends.json';

export default class Friends extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  allFriends = (parceiros) => {
    const all = friends.map((friend, index) => {
      return (
        <Allies
          key={index}
          name={friend.nome}
          description={friend.descrição}
          image={friend.imagem}
          links={friend.links}
          variants={parceiros}
          index={index}
        />
      );
    });
    return all;
  }
  render() {
    const parceiros = {
      hidden: { opacity: 0, x: 20 },
      visible: (index) => ({
        opacity: 1,
        x: 0,
        transition: { delay: 0.5 + index * 0.2, duration: 0.5 }
      }),
      exit: (index) => ({
        opacity: 0,
        x: -20,
        transition: { delay: 0.5 + index * 0.1, duration: 0.5 }
      }),
    };

    return (
      <div className="bg-wolf-01 bg-cover bg-center sm:bg-top relative pt-2">
        <div className="min-h-screen">
          <Nav />
          <motion.h2
            className="text-4xl text-white bg-gradient-to-r from-f-transp to-transparent p-5 ml-3 mt-2 sm:mt-3"
            custom={0}
            variants={parceiros}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            Parceiros
          </motion.h2>
          {this.allFriends(parceiros)}
        </div>
        <Footer />
      </div>
    );
  }
}