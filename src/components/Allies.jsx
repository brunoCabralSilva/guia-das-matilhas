import React from 'react';
import '../css/allies.css';
import { motion } from 'framer-motion';


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
    const iconesRedes = {
      hidden: { opacity: 0, x: 20 },
      visible: (index) => ({
        opacity: 1,
        x: 0,
        transition: { delay: 0.5 + index * 0.3, duration: 0.2 }
      }),
      exit: (index) => ({
        opacity: 0,
        x: -20,
        transition: { delay: 0.5 + index * 0.1, duration: 0.2 }
      }),
    }
    const contact = links.map((cont, index) => {
      const { href, rede } = cont;
      return (
        <motion.div
          variants={iconesRedes}
          custom={index}
          initial="hidden"
          animate="visible"
          exit="exit"
          whileHover={{ scale: 1.2, transition: { duration: 0.5 } }
          }
        >
          <a href={href} target="_blank" rel="noreferrer">
            <i className={` ${this.returnCont(rede)} friend-i `}></i>
          </a>
        </motion.div >
      );
    });
    return contact;
  }

  render() {
    const {
      name,
      description,
      image,
      index,
    } = this.props;

    const parceiros = {
      hidden: { opacity: 0, x: 20 },
      visible: (index) => ({
        opacity: 1,
        x: 0,
        transition: { delay: 0.5 + index * 0.3, duration: 0.5 }
      }),
      exit: (index) => ({
        opacity: 0,
        x: -20,
        transition: { delay: 0.5 + index * 0.1, duration: 0.5 }
      }),
    };

    return (
      <motion.section
        className="friend-section"
        variants={parceiros}
        custom={index}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="friend-div-img">
          {
            image === ""
              ? "Sem imagem"
              : <motion.img
                whileHover={{ scale: 1.1 }}
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
      </motion.section>
    );
  }
}