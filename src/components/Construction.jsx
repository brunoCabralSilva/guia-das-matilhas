import React from 'react';
import '../css/construction.css';

export default class Construction extends React.Component {
  render() {
    return (
      <section className="constr">
        <h2 className="constr-h2">Estamos em Construção...</h2>
        <h2 className="constr-h2">Aguarde e em breve retornaremos mais fortes!</h2>
        <div className="constr-animation-wolf">
          <img
            src={require("../images/logos/wolf_run.gif")}
            alt="gif de lobo branco correndo"
            className="constr-gif-wolf"
          />
          <img
            src={require("../images/logos/wolf_run.gif")}
            alt="gif de lobo branco correndo"
            className="constr-gif-wolf"
          />
          <img
            src={require("../images/logos/wolf_run.gif")}
            alt="gif de lobo branco correndo"
            className="constr-gif-wolf"
          />
          <img
            src={require("../images/logos/wolf_run.gif")}
            alt="gif de lobo branco correndo"
            className="constr-gif-wolf"
          />
        </div>
      </section>
    );
  }
}