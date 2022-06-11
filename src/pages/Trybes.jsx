import React from 'react';
import '../css/features.css';
import Nav from '../components/Nav';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import tribos from '../data/tribos.json';

export default class Trybes extends React.Component {
   render() {
    return (
      <section className="features">
        <div className=""></div>
        <div className="features-div">
          <div className="nav-features">
            <Nav />
          </div>
          <h1 className="title-page title-features">Tribos</h1>
          <Carousel list={tribos} repository={'trybes'} />
          </div>
          <div className="footer-features">
          <Footer />
        </div>
      </section>
    );
  }
}