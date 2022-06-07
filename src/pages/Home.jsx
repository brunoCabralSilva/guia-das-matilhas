import React from 'react';
import '../css/home.css';
import Nav from '../components/Nav';
import AdvertList from '../components/AdvertList';
import Transition from '../components/Transition';
import Navegation from '../components/Navegation';
import Footer from '../components/Footer';

export default class Home extends React.Component {
  state = {
    wallpaper: ['wallpaper01', 'wallpaper02', 'wallpaper03'],
    screen: 'wallpaper01',
    atividade: false,
    button1: false,
    button2: true,
    button3: false,
  }

  componentDidMount() {
    const { wallpaper } = this.state;
    let number = 0;
    setInterval(() => {
      const { atividade } = this.state;
      if (atividade === false) {
        if (number > 2) {
          number = 0;
        }
        this.setState({ screen: wallpaper[number] })
        number += 1;
      }
    }, 5000);
  }

  setaWallpaper = (number) => {
    this.setState({ [`button${number}`]: true });
    const { wallpaper } = this.state;
    this.setState({
      screen: wallpaper[number],
      atividade: true,
    });
    setTimeout(() => {
      const { button1, button2, button3 } = this.state;
      if (button1 | button2 | button3) {
        this.setState({ [`button${number}`]: false });
      } else {
        this.setState({
          atividade: false,
          [`button${number}`]: false,
        });
      }
    }, 10000);
  }

  render() {
    const { screen, wallpaper } = this.state;
    return (
      <div className="main">
        <Nav />
        <div className={` ${screen} home-title `}>
          <div className="darkness"></div>
          <div className="content-content">
            <h1 className="content-title-page">Guia das Matilhas</h1>
            <AdvertList
              wallpaper={wallpaper}
              screen={screen} />
          </div>
          <div className="content-alternate">
            <div
              className={
                screen === wallpaper[0]
                  ? "div-alternate div-alternate-selected"
                  : "div-alternate"
              }
              onClick={() => this.setaWallpaper(0)}
            >
            </div>
            <div
              className={
                screen === wallpaper[1]
                  ? "div-alternate div-alternate-selected"
                  : "div-alternate"
              }
              onClick={() => this.setaWallpaper(1)}
            >
            </div>
            <div
              className={
                screen === wallpaper[2]
                  ? "div-alternate div-alternate-selected"
                  : "div-alternate"
              }
              onClick={() => this.setaWallpaper(2)}
            >
            </div>
          </div>
        </div>
        <Transition />
        <Navegation />
        <Footer />
      </div>
    );
  }
}