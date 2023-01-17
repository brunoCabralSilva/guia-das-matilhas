import React from 'react';
import { motion } from 'framer-motion';

export default class Construction extends React.Component {
  render() {
    return (
      <section className="h-full flex flex-col items-center justify-center text-white text-2xl font-andika">
        <motion.h2
          initial={{opacity:0}}
          animate={{opacity:1, transition: {delay: 0.5, duration: 1 }}}
          exit={{opacity:0, transition: { duration: 0.5 }}}
          className="mb-6 text-center w-10/12 mt-20 sm:mt-0"
        >
          Estamos em Construção...
        </motion.h2>
        <motion.h2
          initial={{opacity:0}}
          animate={{opacity:1, transition: {delay: 0.7, duration: 1 }}}
          exit={{opacity:0, transition: { duration: 0.5 }}}
          className="text-center w-10/12"
        >
          Aguarde e em breve retornaremos mais fortes!
        </motion.h2>
        <motion.div 
          initial={{opacity:0}}
          animate={{opacity:1, transition: {delay: 0.7, duration: 1 }}}
          exit={{opacity:0, transition: { duration: 0.5 }}}
          className="flex flex-row justify-center"
        >
          {/* <img
            src={require("../images/logos/wolf_run.gif")}
            alt="gif de lobo branco correndo"
            className="constr-gif-wolf"
          />
          <img
            src={require("../images/logos/wolf_run.gif")}
            alt="gif de lobo branco correndo"
            className="hidden sm:flex constr-gif-wolf"
          />
          <img
            src={require("../images/logos/wolf_run.gif")}
            alt="gif de lobo branco correndo"
            className="hidden md:flex an constr-gif-wolf"
          /> */}
        </motion.div>
      </section>
    );
  }
}