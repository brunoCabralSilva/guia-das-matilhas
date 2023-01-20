import React from 'react';
import { motion } from 'framer-motion';
import ContactIcon from '../components/ContactIcon';


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
        return "fa-solid fa-link";
    }
  }
  contact = () => {
    const { links } = this.props;
    const contact = links.map((cont, index) => {
      const { href, rede } = cont;
      return (
        <ContactIcon key={ index }  iconName={this.returnCont(rede)} link={ href } index={ index } />
      );
    });
    return (<div className="w-full flex flex-row justify-center md:justify-start flex-wrap">{ contact }</div>);
  }

  render() {
    const {
      name,
      description,
      index,
      image,
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
        className="flex flex-col md:flex-row m-3 text-white 2xl:leading-8 md:leading-7 leading-8 text-base 2xl:text-xl"
        variants={parceiros}
        custom={index}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="w-full md:w-1/3 lg:w-1/6 min-h-48 md:mr-3 md:bg-f-transp bg-gradient-to-r from-f-transp to-transparent flex items-center justify-center">
          {
            image === ""
              ? "Sem imagem"
              : <motion.img
                whileHover={{ scale: 1.1 }}
                src={require(`../images/logos/${image}`)}
                alt="imagem do parceiro"
                className="sm:w-11/12  h-60 object-contain p-4"
            />
          }
        </div>
        <div className="w-full md:w-2/3 lg:w-5/6 bg-gradient-to-r from-f-transp to-transparent mt-3 md:mt-0 flex flex-col justify-center">
          <h1 className="text-2xl 2xl:text-4xl text-center md:text-left p-6 md:p-4">{name}</h1>
          <p className="px-6 md:px-4">{
            description === ''
              ? 'Aguardando texto descritivo por parte dos colaboradores'
              : <span className="text-center md:text-left">{ description }</span>
          }
          </p>
          <div className="p-6 md:p-4 flex flex-row">
            {this.contact()}
          </div>
        </div>
      </motion.section>
    );
  }
}