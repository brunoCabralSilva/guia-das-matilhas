import React from 'react';
import '../css/features.css';
import Nav from '../components/Nav';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import racas from '../data/racas.json';

export default class Breeds extends React.Component {
  render() {
    return (
      <section className="features">
        <div className=""></div>
        <div className="features-div-breeds">
          <div className="nav-features">
            <Nav />
          </div>
          <h1 className="title-features">Raças</h1>
          <Carousel list={racas} repository={'breeds'} />
          </div>
          <div className="footer-features">
          <Footer />
        </div>
      </section>
    );
  }
}