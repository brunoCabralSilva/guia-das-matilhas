import React from 'react';
import '../css/friends.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Allies from '../components/Allies';
import friends from '../data/friends.json';

export default class Friends extends React.Component {
  allFriends = () => {
    const all = friends.map((friend) => {
      return (
        <Allies
          name={friend.nome}
          description={friend.descrição}
          image={friend.imagem}
          links={friend.links}
        />
      );
    });
    return all;
  }
  render() {
    return (
      <div className="main">
        <div className="friends">
          <div className="friends-nav">
            <Nav />
          </div>
          <h2 className="title-page title-friend">Parceiros</h2>
          {this.allFriends()}
        </div>
        <div className="friends-footer">
          <Footer />
        </div>
      </div>
    );
  }
}