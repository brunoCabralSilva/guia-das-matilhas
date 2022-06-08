import React from 'react';
import Nav from '../components/Nav';
import Construction from '../components/Construction';
import Footer from '../components/Footer';

export default class Page extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="darkness"></div>
        <div className="main-nav">
          <Nav />
        </div>
        <Construction />
        <Footer />
      </div>
    );
  }
}