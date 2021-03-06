import React from 'react';
import '../css/menu.css';
import Navegation from '../components/Navegation';
import Footer from '../components/Footer';

export default class Home extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  homeReturn = () => {
    const { history } = this.props;
    history.push('/guia-das-matilhas');
  }
  render() {
    return (
      <section className="">
        <Navegation
          homeReturn={this.homeReturn}
        />
        <div className="bg-black"><Footer /></div>
      </section>
    );
  }
}