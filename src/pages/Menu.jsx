import React from 'react';
import '../css/menu.css';
import Nav from '../components/Nav';
import Transition from '../components/Transition';
import Navegation from '../components/Navegation';
import Footer from '../components/Footer';

export default class Home extends React.Component {
  render() {
    return (
      <section className="menu">
        <Transition />
        <Navegation />
        <Footer />
      </section>
    );
  }
}