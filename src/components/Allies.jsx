import React from 'react';
import '../css/allies.css';
import { Link } from 'react-router-dom';


export default class Allies extends React.Component {

  returnCont = (rede) => {
    switch (rede) {
      case "instagram":
        return "fa-brands fa-instagram";
      case "tiktok":
        return "fa-brands fa-tiktok";
      case "facebook":
        return "fa-brands fa-facebook-f";
      case "youtube":
        return "fa-brands fa-youtube";
      case "twitch":
        return "fa-brands fa-twitch";
      case "spotify":
        return "fa-brands fa-spotify";
      case "twitter":
        return "fa-brands fa-twitter";
      case "discord":
        return "fa-brands fa-discord";
      default:
        return "fa-solid fa-link-simple";
    }
  }
  contact = () => {
    const { links } = this.props;
    const contact = links.map((cont) => {
      const { href, rede } = cont;
      return (
        <div>
          <a href={href} target="_blank" rel="noreferrer">
            <i className={` ${this.returnCont(rede)} friend-i `}></i>
          </a>
        </div>
      );
    });
    return contact;
  }

  render() {
    const {
      name,
      description,
      image,
    } = this.props;
    return (
      <section className="friend-section">
        <div className="friend-div-img">
          {
            image === ""
              ? "Sem imagem"
              : <img
                src={require(`../images/logos/${image}`)}
                alt="imagem do parceiro"
                className="friend-img"
              />
          }
        </div>
        <div className="friend-text">
          <h1 className="friend-name">{name}</h1>
          <p className="friend-description">{
            description === ''
              ? 'Aguardando texto descritivo por parte dos colaboradores'
              : description
          }
          </p>
          <div className="friend-contact">
            {this.contact()}
          </div>
        </div>
      </section>
    );
  }
}