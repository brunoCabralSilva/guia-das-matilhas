import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default class Nav extends React.Component {
  state = {
    showMenu: false,
  }

  menu = () => {
    const { showMenu} = this.state;
    this.setState({ showMenu: !showMenu });
  }

  barra1 = () => {
    const { showMenu} = this.state;
    if(!showMenu) {
      return 'rotate-0 transition duration-500';
    } return 'rotate-45deg transition duration-500 translate-y-2';
  }

  barra2 = () => {
    const { showMenu} = this.state;
    if(!showMenu) {
      return 'rotate-0 transition duration-500';
    } return 'rotate-45 transition duration-500';
  }

  barra3 = () => {
    const { showMenu} = this.state;
    if(!showMenu) {
      return 'opacity-1 transition duration-500';
    } return 'opacity-0 transition duration-500';
  }

  returnItemMenu = () => {
    const { showMenu } = this.state;
    if(showMenu) {
      return 'fixed top-0 left-0 opacity-1 z-30 w-screen h-screen items-end pt-12 pr-4 transition duration-500 flex flex-col text-white bg-t-transp justify-center'
    } else return 'opacity-0 hidden items-end p-3 transition duration-500 text-white';
  }

  returnLiMenu = () => {
    const { showMenu } = this.state;
  if(showMenu) {
    return 'px-3 my-4 font-bold opacity-1 z-30 w-full text-center'
  } else return 'opacity-0 z-1 transition duration-500' 
  }

  returnItemsMenu = () => {
    const { showMenu } = this.state;
    if(showMenu) {
      return 'items-center justify-center';
    } return 'items-end';
  }

  render() {
    return (
      <nav className="w-full z-40 font-andika text-base relative 2xl:text-xl leading-6">
        <div className={`absolute right-0 top-0 z-40 mr-8 mt-8 flex flex-col ${this.returnItemsMenu()} sm:hidden`} onClick={this.menu}>
          <div className={`h-1 w-7 bg-white mb-1 z-40 ${this.barra1()}`}> </div>
          <div className={`h-1 w-7 bg-white mb-1 z-40 ${this.barra2()}`}> </div>
          <div className={`h-1 w-7 bg-white mb-1 z-40 ${this.barra3()}`}> </div>
          <motion.ul
            className={`${this.returnItemMenu()}`}
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            exit={{ y: -30, opacity: 0, transition: { duration: 0.5 } }}
          >
            <li className={this.returnLiMenu()}>
              <Link
                to="/"
                className="text-white hover:text-crepusculo transition duration-1000 px-2"
              >
                Início
              </Link>
            </li>
            <li className={this.returnLiMenu()}>
              <Link to="/trybes"
                className="text-white hover:text-crepusculo transition duration-1000 px-2"
              >
                Tribos
              </Link>
            </li>
            <li className={this.returnLiMenu()}>
              <Link to="/auspices"
                className="text-white hover:text-crepusculo transition duration-1000 px-2"
              >
                Augúrios
              </Link>
            </li>
            <li className={this.returnLiMenu()}>
              <Link to="/breeds"
                className="text-white hover:text-crepusculo transition duration-1000 px-2"
              >
                Raças
              </Link>
            </li>
            <li className={this.returnLiMenu()}>
              <Link to="/about"
                className="text-white hover:text-crepusculo transition duration-1000 px-2"
              >
                Quem Somos
              </Link>
            </li>
            <div className="py-7 flex justify-center w-full">
            <hr className="bg-crepusculo w-1/2" />
            </div>
            <div className="w-full flex flex-col items-center sm:justify-start p-2 my-4 sm:my-0">
              <Link to="/login">
                <p className="text-white font-bold">Login</p>
              </Link>
              <div className="flex pt-10">
              <img
                src={require('../images/logos/Garou Nordeste.png')}
                alt="Logo do Garou Nordeste"
                className="w-16"
              />
              <img
                src={require('../images/logos/Crônicas da Kombi.png')}
                alt="Logo da Matilha da Kombi"
                className="w-16"
              />
              </div>
        </div>
        </motion.ul>
        </div>
        <motion.ul className="hidden sm:flex flex-row text-white justify-center pt-3 flex-wrap w-10/12 mx-auto"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          exit={{ y: -30, opacity: 0, transition: { duration: 0.5 } }}>
          <li className="px-3 mt-2">
            <Link
              to="/"
              className="text-white hover:text-crepusculo transition duration-1000 px-2"
            >
              Início
            </Link>
          </li>
          <li className="px-3 mt-2">
            <Link to="/trybes"
              className="text-white hover:text-crepusculo transition duration-1000 px-2"
            >
              Tribos
            </Link>
          </li>
          <li className="px-3 mt-2">
            <Link to="/auspices"
              className="text-white hover:text-crepusculo transition duration-1000 px-2"
            >
              Augúrios
            </Link>
          </li>
          <li className="px-3 mt-2">
            <Link to="/breeds"
              className="text-white hover:text-crepusculo transition duration-1000 px-2"
            >
              Raças
            </Link>
          </li>
          <li className="px-3 mt-2">
            <Link to="/about"
              className="text-white hover:text-crepusculo transition duration-1000 px-2"
            >
              Quem Somos
            </Link>
          </li>
        </motion.ul>
      </nav>
    );
  }
}
