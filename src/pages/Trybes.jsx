import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default class Trybes extends React.Component {
  render() {
    return (
      <div className="main">
        <Nav />
        <section className="content">
          Tribos
        </section>
        <Footer />
      </div>
    );
  }
}