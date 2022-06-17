import React from 'react';
import '../css/friends.css';
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
      <div className="main">
        <div className="friends">
          <div className="friends-nav">
            <Nav />
          </div>
          <motion.h2
            className="title-page title-friend"
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
        <div className="friends-footer">
          <Footer />
        </div>
      </div>
    );
  }
}