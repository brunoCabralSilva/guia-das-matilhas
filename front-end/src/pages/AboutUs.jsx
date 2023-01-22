import React from 'react';
import { motion } from 'framer-motion';
import Nav from '../components/Nav';
import ContactIcon from '../components/ContactIcon'
import Footer from '../components/Footer';

export default class AboutUs extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const text = {
      hidden: { opacity: 0, y: 30 },
      visible: (index) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.2 + index * 0.2, duration: 0.5 }
      }),
      exit: (index) => ({
        opacity: 0,
        y: 30,
        transition: { delay: 0.2 + index * 0.1, duration: 0.5 }
      }),
    };

    const { history } = this.props;
    return (
      <div className="bg-wolf-01 bg-cover bg-center sm:bg-top relative pt-2">
      <section className="text-white h-full">
        <Nav />
        <motion.h2
          className="text-4xl text-white bg-gradient-to-r from-f-transp to-transparent p-5 ml-3 mt-2 sm:mt-3"
          custom={0}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          Quem Somos
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 m-3 ">
          <motion.div
            className="w-full h-full mr-3 md:mr-0"
            custom={1}
            variants={text}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <img
              src={require('../images/logos/Garou Nordeste2.png')}
              alt="Garou Nordeste"
              className="p-2 bg-g-transp mb-3 object-cover h-96 sm:w-50vw"
            />

            <div className="flex flex-col items-center justify-center bg-gradient-to-r from-g-transp to-transparent p-5 mt-3">
              <h1 className="text-2xl">Garou Nordeste</h1>
              <div className="flex flex-row flex-wrap">
                <ContactIcon iconName="fa-instagram" link="https://www.instagram.com/garounordeste/" />
                <ContactIcon iconName="fa-spotify" link="https://open.spotify.com/show/7kal4LDO3ptHc3sG64btYI" />
                <ContactIcon iconName="fa-youtube" link="https://www.youtube.com/c/GarouNordeste" />
                <ContactIcon iconName="fa-facebook-f" link="https://www.facebook.com/garounordeste" />
              </div>
            </div>
            <div className="bg-gradient-to-r from-g-transp to-transparent p-5 mt-3 leading-8 text-center md:text-left">
              <p className="pt-4">
                O Garou Nordeste é um projeto que busca trazer toda a riqueza do Nordeste do Brasil ambientada para
                "Lobisomem: O Apocalipse", cenário de RPG encontrado dentro do sistema WoD (Mundo das Trevas).
              </p>
              <p className="pt-4">Tudo começou quando três loucos, Bruno Gabryell, Felipe Brito e Jocélio Procópio, unidos por um
                projeto
                incrível chamado "Taverna Literária", decidiram investir em um novo projeto, totalmente voltado ao
                nordeste e ao mundo dos Garou, para mostrar a todos do Brasil que há muito o que ser admirado em
                nossa
                região além de apenas fome, seca e pobreza.
              </p>
              <p className="pt-4">
                Bruno Gabryell (Garou Nordeste) e Thiago Lucas (Matilha da Kombi) são os criadores deste site, sendo o primeiro o editor e o segundo o idealizador, revisor e tradutor!
              </p>
              <div className="w-full flex justify-center">
                <button
                  type="button"
                  onClick={() => history.push('/garou-nordeste')}
                  className="p-2 w-1/2 mt-4 bg-black hover:bg-blueShadow hover:border hover-border-white transition duration-1000">
                  Veja mais
                </button>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="w-full mr-3 md:mr-0 mt-3 md:mt-0 ml-0 md:ml-3"
            custom={2}
            variants={text}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <img src={require('../images/logos/kombi.jpg')} alt="Matilha da Kombi" className="p-2 bg-g-transp mb-3 object-cover h-96 sm:w-50vw" />
            <div className="flex flex-col items-center justify-center bg-gradient-to-r from-g-transp to-transparent p-5 mt-3">
              <h1 className="text-2xl">Matilha da Kombi</h1>
              <div className="flex flex-row flex-wrap">
                <ContactIcon iconName="fa-instagram" link="https://www.instagram.com/cronicas_da_kombi/" />
                <ContactIcon iconName="fa-facebook-f" link="https://www.facebook.com/cronicasdakombi" />
              </div>
            </div>
            <div className="bg-gradient-to-r from-g-transp to-transparent p-5 mt-3 leading-8 text-center md:text-left">
            <p className="pt-4">
                A Matilha da Kombi, antes de qualquer coisa, sempre foi um grupo de amigos que se conheceu através do RPG. Surgiu em uma conversa despretensiosa no Facebook da Nação Garou, que em duas semanas virou uma mesa mensal e uma campanha marcante no Cenário de Lobisomem o Apocalipse, na Cidade de Niterói, no Rio de Janeiro. Diversos Garou já correram juntos dessa Matilha, mas ela começou com: Thiago Lucas, Rafael Trindade, Hanã Moreira, Diogo Linhares, Luiz "Caderninho" Vieira, Daniel Braga, Bruno De Biase, Marcus Laport e Rafael TrilhadoVento. Alguns ficaram pelo caminho, mas ainda ocupam seu espaço no memorial do nosso Caern - e quem sabe ainda voltem a correr conosco.
              </p>
              <p className="pt-4">
                Conhecidos pela criatividade e pelo humor ácido, logo as piadas internas romperam as barreiras da nossa mesa e começaram a ocupar o Feed do Rage Across Brasil. Com textos autorais e diversos memes sobre todos os cenários de WoD, logo alçamos voo solo e começamos a página Crônicas da Kombi, no facebook e no instagram, valorizando o que há de melhor no RPG: a diversão.
              </p>
              <div className="w-full flex justify-center">
                <button
                  type="button"
                  onClick={() => history.push('/matilha-da-kombi')}
                  className="p-2 w-1/2 mt-4 bg-black hover:bg-blueShadow hover:border hover-border-white transition duration-1000">
                  Veja mais
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
    );
  }
}