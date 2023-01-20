import React from "react";

export default class TextFromGifts extends React.Component{
  render() {
    return(
      <div className="flex flex-col items-start my-2 ml-3">
        <div className="flex flex-col sm:flex-row sm:items-start">
          <div className="w-99% md:py-0 relative my-3 py-2 flex flex-col sm:flex-col justify-center sm:justify-start mr-4">
            <img src={require('../images/wallpapers/002.jpg')} alt="Dois Garou em comunhão" className="w-full object-cover h-full absolute z-0" />
            <div className="bg-7-transp absolute h-full w-full"/>
            <p className="z-10 relative pt-4 px-4 text-center sm:text-left w-full">
              O mundo espiritual divide muitos segredos com os lobisomens e outros metamorfos.
              De acordo com um antigo pacto, os espíritos ensinam habilidades mágicas chamadas Dons aos Garou. Os Dons permitem aos lobisomens concentrar uma energia espiritual para afetar a Tellurian. Tribos, augúrios e até mesmo raças diferentes aprendem Dons dinstintos.
            </p>
            <p className="z-10 relative pt-2 sm:pt-4 pb-4 px-4 text-center sm:text-left w-full">
              Cada Grupo tem seus próprios segredos e suas próprias e exclusivas ligações espirituais e, como consequência, existem muitos Dons espalhados ao longo de todos os livros que foram publicados, dificultando a busca ou tornando-a no mínimo massiva. Esta área foi criada para auxiliar esta oportunidade encontrada e aqui você pode pesquisar rapidamente por um ou mais dons que desejar.
            </p>
          </div>
        </div>
        <div className="w-99% md:py-0 relative mt-2 mb-3 flex flex-col justify-center sm:justify-start mr-4">
          <img src={require('../images/wallpapers/touch.jpg')} alt="Dois Garou em comunhão" className="w-full object-cover h-full absolute z-0" />
          <div className="bg-7-transp absolute h-full w-full"/>
          <h1 className="w-full my-6 sm:ml-4 text-2xl font-bold relative text-center sm:text-left">Como utilizar o filtro de busca</h1>
          <ul className="list-disc ml-10 relative pb-5">
            <li className="w-99%">
              Filtros de Raças, Tribos e Augúrios retornarão qualquer dom que inclua um dos selecionados:
            </li>
            <p className="py-4 pr-2">
              <strong>Exemplo</strong> - Ao selecionar raça hominídea e tribo dos roedores de ossos, a busca retornará qualquer dom que pertença aos hominídeos ou aos roedores de ossos, sem necessariamente precisar pertencer aos dois filtros selecionados;
            </p>
            <li className="w-99%">
              Filtros de posto e livro só retornarão os dons que tiverem os filtros selecionados:
            </li>
            <p className="py-4">
              <strong>Exemplo</strong> - Se selecionar o posto fostern, só aparecerão dons que pertencerem ao posto fostern ou, ainda, se selecionar o livro W20, só aparecerão dons pertencentes ao W20;
            </p>
            <li className="w-99%">
              Mesclando as duas categorias de filtros acima citados, você pode achar qualquer dom que desejar:
            </li>
            <p className="py-4">
              <strong>Exemplo</strong> - ao selecionar os filtros de augúrio Ahroun, tribo Wendigo e posto Ancião, serão retornados todos os dons de posto Ancião que pertençam ao augúrio Ahroun ou a tribo Wendigo;
            </p>
            <li className="w-99%">
              Ao selecionar algum filtro, o item selecionado aparecerá em um pop-up no canto inferior direito, onde você poderá acompanhar todos os filtros escolhidos e também removê-los caso deseje;
            </li>
            <li className="w-99%">
              Não selecionar nenhum filtro retornará uma lista com todos os dons.
            </li>
          </ul>
        </div>
      </div>
    );
  }
}