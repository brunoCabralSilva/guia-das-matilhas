import React from 'react';
import '../css/menu.css';
import Navegation from '../components/Navegation';
import Footer from '../components/Footer';

export default class Home extends React.Component {
  homeReturn = () => {
    const { history } = this.props;
    history.push('/guia-das-matilhas');
  }
  render() {
    return (
      <section className="menu">
        <Navegation homeReturn={this.homeReturn} />
        <div className="menu-footer"><Footer /></div>
      </section>
    );
  }
}