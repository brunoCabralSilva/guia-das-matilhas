import React from 'react';
import '../css/aboutUs.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default class AboutUs extends React.Component {
  render() {
    return (
      <div className="main">
        <Nav />
        <section className="about-us">
          <div>
            <h2 className="title-page">Quem Somos?</h2>
            <div className="about-content" >
              <div className='about-description'>
                <img src={require('../images/logos/Garou Nordeste.png')} alt="Garou Nordeste" className="about_logo" />
                <div>
                  <h1>Garou Nordeste</h1>
                  <div className="about-contact">
                    <a href="https://www.instagram.com/garounordeste/" target="_blank" rel="noreferrer">
                      <i className="fa-brands fa-instagram div-icon"></i>
                    </a>
                    <a href="https://open.spotify.com/show/7kal4LDO3ptHc3sG64btYI" target="_blank" rel="noreferrer">
                      <i className="fa-brands fa-spotify div-icon"></i>
                    </a>
                    <a href="https://www.youtube.com/c/GarouNordeste" target="_blank" rel="noreferrer">
                      <i className="fa-brands fa-youtube div-icon"></i>
                    </a>
                    <a href="https://www.facebook.com/garounordeste" target="_blank" rel="noreferrer">
                      <i className="fa-brands fa-facebook-f div-icon"></i>
                    </a>
                  </div>
                  <p>
                    O Garou Nordeste é um projeto que busca trazer toda a riqueza do Nordeste do Brasil ambientada para
                    "Lobisomem: O Apocalipse", cenário de RPG encontrado dentro do sistema WoD (Mundo das Trevas).
                  </p>
                  <p>Tudo começou quando três loucos, Bruno Gabryell, Felipe Brito e Jocélio Procópio, unidos por um
                    projeto
                    incrível chamado "Taverna Literária", decidiram investir em um novo projeto, totalmente voltado ao
                    nordeste e ao mundo dos Garou, para mostrar a todos do Brasil que há muito o que ser admirado em
                    nossa
                    região além de apenas fome, seca e pobreza.
                  </p>
                  <p className='filtros'>
                    Bruno Gabryell (Garou Nordeste) e Thiago Lucas (Matilha da Kombi) são os criadores deste site, sendo o primeiro o editor e o segundo o idealizador, revisor e tradutor!
                  </p>
                </div>
              </div>
              <div className='about-description'>
                <img src={require('../images/logos/Crônicas da Kombi.png')} alt="Matilha da Kombi" className="about_logo" />
                <div>
                  <h1>Matilha da Kombi</h1>
                  <div className="about-contact">
                    <a href="https://www.instagram.com/cronicas_da_kombi/" target="_blank" rel="noreferrer">
                      <i className="fa-brands fa-instagram div-icon"></i>
                    </a>
                    <a href="https://www.facebook.com/cronicasdakombi" target="_blank" rel="noreferrer">
                      <i className="fa-brands fa-facebook-f div-icon"></i>
                    </a>
                  </div>
                  <p>
                    A Matilha da Kombi, antes de qualquer coisa, sempre foi um grupo de amigos que se conheceu através do RPG. Surgiu em uma conversa despretensiosa no Facebook da Nação Garou, que em duas semanas virou uma mesa mensal e uma campanha marcante no Cenário de Lobisomem o Apocalipse, na Cidade de Niterói, no Rio de Janeiro. Diversos Garou já correram juntos dessa Matilha, mas ela começou com: Thiago Lucas, Rafael Trindade, Hanã Moreira, Diogo Linhares, Luiz "Caderninho" Vieira, Daniel Braga, Bruno De Biase, Marcus Laport e Rafael TrilhadoVento. Alguns ficaram pelo caminho, mas ainda ocupam seu espaço no memorial do nosso Caern - e quem sabe ainda voltem a correr conosco.
                  </p>
                  <p>
                    Conhecidos pela criatividade e pelo humor ácido, logo as piadas internas romperam as barreiras da nossa mesa e começaram a ocupar o Feed do Rage Across Brasil. Com textos autorais e diversos memes sobre todos os cenários de WoD, logo alçamos voo solo e começamos a página Crônicas da Kombi, no facebook e no instagram, valorizando o que há de melhor no RPG: a diversão.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}