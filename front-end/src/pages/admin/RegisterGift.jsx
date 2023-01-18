import React from 'react';
import axios from 'axios';
import Nav from '../../components/Nav';
import GiftExibition from '../../components/GiftExibition';
import fetch from '../../fetch';

export default class RegisterGift extends React.Component {
  state = {
    edition: '',
    book: '',
    page: 0,
    belong: '',
    vName: '',
    listBreeds: [],
    listAuspices: [],
    listTrybes: [],
    listBooks: [],
    listGifts: [],
    showFormGift: false,
    showGifts: true,
    name: '',
    rank: 0,
    textPtbr: '',
    systemPtbr: '',
    textOriginal: '',
    systemOriginal: '',
    listOfFonts: [],
    listOfBelongs: [],
  };

  showAllGifts = async () => {
    try {
      const register = await axios.get(`${fetch()}/gifts`);
      this.setState({ listGifts: register.data });
    } catch(error) {
      this.setState({ listGifts: [] });
    }
  };

  async componentDidMount() {
    await this.showAllGifts();
    const { history } = this.props;
    try {
      const getLists = await axios.get(`${fetch()}/gifts/lists`);
      this.setState({
        listBreeds: getLists.data.queryBreeds,
        listAuspices: getLists.data.queryAuspices,
        listTrybes: getLists.data.queryTrybes,
        listBooks: getLists.data.queryBooks,
      });
    } catch(error) {
      window.alert(error);
    }
    const token = localStorage.getItem('token');
    try {
    const authentication = await axios.post (`${fetch()}/authenticate`, {
      token, 
    });
    if (!authentication.data.token) {
      history.push('/login');
    }} catch(error) {
      history.push('/login');
    }
  };
  
  addFont = () => {
    const { book, page, edition } = this.state;
    if(book === '') {
      window.alert('Necessário escolher uma das opções de livro para cadastrar a Fonte');
    } else if (page <= 0) {
      window.alert('Necessário inserir um valor para a página maior e diferente de zero para cadastrar a Fonte');
    } else if (edition === '') {
      window.alert('Necessário escolher uma das edições oferecidas para cadastrar a Fonte');
    } else {
      this.setState((prev) => ({
        listOfFonts: [ ...prev.listOfFonts, { book, page, edition, }],
        book: '',
        page: 0,
        edition: '',
      }));
    }
    const bookSelect = document.getElementById("book");
    bookSelect.selectedIndex = 0;
    const editionSelect = document.getElementById('edition');
    editionSelect.selectedIndex = 0;
  };

  addNewBelong = () => {
    const { belong } = this.state;
    if (belong === '') {
      window.alert('Necessário escolher uma das opções disponíveis para cadastrar uma nova referência de pertencimento');
    } else {
      this.setState((prev) => ({
        listOfBelongs: [ ...prev.listOfBelongs, belong],
      }));
    }
    this.setState({ belong: '' });
    const selectBelong = document.getElementById("selectBelong");
    selectBelong.selectedIndex = 0;
  };

  deleteFont = (fonts) => {
    const { listOfFonts } = this.state;
    const newList = listOfFonts.filter((f) => Number(fonts.page) !== Number(f.page) || fonts.book !== f.book || fonts.edition !== f.edition);
    console.log(newList);
    this.setState({ listOfFonts: newList });
  };

  deleteBelong = (bel) => {
    const { listOfBelongs } = this.state;
    const newList = listOfBelongs.filter((b) => bel !== b);
    this.setState({ listOfBelongs: newList });
  };

  addGift = async () => {
    const {
      name,
      rank,
      listOfFonts,
      listOfBelongs,
      textPtbr,
      systemPtbr,
      textOriginal,
      systemOriginal,
    } = this.state;
    
    let verifyBoolean = false;
    try {
      const verify = await axios.post(`${fetch()}/gifts/name`, {
        name,
      });
      verifyBoolean = verify.data.gift;
    } catch(error) {
      verifyBoolean = false;
    }
    if (name === '' || name.length < 4) {
      window.alert('Necessário adicionar um nome com pelo menos quatro caracteres para o dom');
    } else if (rank === 0) {
      window.alert('Necessário escolher um Posto');
    } else if (listOfFonts.length === 0) {
      window.alert('Necessário cadastrar um Livro como referẽncia');
    } else if (listOfBelongs.length === 0) {
      window.alert('Necessário inserir a quem este dom pertence');
    } else if (textPtbr.length <= 10 ) {
      window.alert('Necessário inserir uma descrição maior para o campo "Texto Traduzido".');
    } else if (systemPtbr.length <= 10 ) {
      window.alert('Necessário inserir uma descrição maior para o campo "Sistema Traduzido".');
    } else if (textOriginal.length <= 10 ) {
      window.alert('Necessário inserir uma descrição maior para o campo "Texto original".');
    } else if (systemOriginal.length <= 10 ) {
      window.alert('Necessário inserir uma descrição maior para o campo "Sistema original"');
    } else if (verifyBoolean) {
      window.alert('Dom já existe na base de dados');
    }
    else {
      try {
        const register = await axios.post(`${fetch()}/gifts`, {
          name,
          rank,
          font: listOfFonts,
          belong: listOfBelongs,
          textPtbr,
          systemPtbr,
          textOriginal,
          systemOriginal
        });
        window.alert(register.data);
      } catch(error) {
        console.log(error.message);
      }

      const rankSelect = document.getElementById("rank");
      rankSelect.selectedIndex = 0;
      this.setState({
        name: '',
        textPtbr: '',
        systemOriginal: '',
        systemPtbr: '',
        textOriginal: '',
        listOfFonts: [],
        listOfBelongs: [],
      });
      window.alert(`Dom adicionado com sucesso!`);
      window.scrollTo(0, 0);
    }
    await this.showAllGifts();
  }

  verifyName = async () => {
    const { name } = this.state;
    if (name === '' || name.length < 4) {
      window.alert('Necessário adicionar um nome com pelo menos quatro caracteres para o dom');
    } else {
      try {
        const verify = await axios.post(`${fetch()}/gifts/name`, {
          name,
        });
        if (verify.data.gift) {
          this.setState({ vName: "Nome já existente na base de dados" });
        } else {
          this.setState({ vName: "Nome disponível para cadastro" });
        }
      } catch(error) {
        this.setState({ vName: "Nome disponível para cadastro" });
      }
    }
    setTimeout(() => {
      this.setState({ vName: "" });
    }, 2000);
  };

  render() {
    const { 
      name,
      vName,
      showFormGift,
      listBooks,
      listOfFonts,
      listOfBelongs,
      listTrybes,
      listBreeds,
      listAuspices,
      textPtbr,
      systemOriginal,
      systemPtbr,
      page,
      textOriginal,
      showGifts,
      listGifts,
    } = this.state;
    return (
      <div className={`w-full ${showFormGift ? 'min-h-screen' : 'h-screen'} bg-wolf-01 bg-cover flex flex-col relative`}>
        <div className="main-nav relative z-20">
          <Nav />
        </div>
        <div className="w-full mt-14 sm:mt-6 items-center" onClick={() => this.setState((prev) => ({ showFormGift: !prev.showFormGift }))}>
          <div className="pl-5 mx-3 flex justify-between bg-gradient-to-r from-f-transp to-transparent py-5" onClick={() => this.setState((prev) => ({ showFormGift: !prev.showFormGift }))}>
            <h1 className="text-4xl text-white" onClick={() => this.setState((prev) => ({ showFormGift: !prev.showFormGift }))}>Adicionar um Dom</h1>
            <img
              className="h-14 object-cover"
              src={require(`../../images/logos/${!showFormGift ? 'arrow-down.png': 'arrow-up.png'}`)}
              onClick={() => this.setState((prev) => ({ showFormGift: !prev.showFormGift }))}
              alt="arrow"
            />
          </div>
        </div>
        {
          showFormGift && <form className={`bg-gradient-to-r from-f-transp to-transparent m-3 flex flex-col p-8 z-10`}>
            <div className={`flex w-full bg-white ${vName !== '' ? 'rounded-t-lg' : 'rounded-lg' } p-2`}>
              <label
                htmlFor="name"
                className="mb-1 w-1/2 flex justify-between items-center"
              >
                <span className="w-1/3 p-3 font-bold">Nome do Dom:</span>
                <div className="w-full h-full flex mr-8">
                  <input
                    type="text"
                    value={name}
                    id="name"
                    className="w-full h-full rounded p-2 border border-gray-300"
                    onChange={(e) => this.setState({ name: e.target.value })}
                  />
                  <button
                    type="button"
                    className="h-full ml-1 rounded px-2 border border-black hover:bg-black hover:text-white transition duration-500"
                    onClick={this.verifyName}
                  >
                    Verificar
                  </button>
                </div>
              </label>
              <label
                htmlFor='rank'
                className="w-1/2 h-full flex items-center"
              >
                <span className="p-3 w-1/3 font-bold"> Rank / Posto:</span>
                <select
                  id="rank"
                  className="w-full h-full p-2 mx-2 rounded border border-gray-300 text-center"
                  onChange={(e) => this.setState({ rank: e.target.value })}
                >
                  <option disabled selected>Selecione um Posto</option>
                  <option value={1}>Cliath (1)</option>
                  <option value={2}>Fostern (2)</option>
                  <option value={3}>Adren (3)</option>
                  <option value={4}>Athro (4)</option>
                  <option value={5}>Ancião (5)</option>
                  <option value={6}>Lendário (6)</option>
                </select>
              </label>
            </div>
            {
              vName !== '' ? <p className="bg-white py-5 rounded-b-lg w-full text-center font-bold">{vName}</p> : <div />
            }
            <div className="bg-white rounded-lg mt-3">
              <div className="pl-4 p-2 border rounded-lg border-white flex gap-10 mb-2">
                <label
                    htmlFor="book"
                    className="pl-2 w-full flex items-center"
                  >
                    <span className="w-1/3 font-bold">Fonte:</span>
                    <select
                      id="book"
                      className="w-full p-2 border text-center border-gray-300"
                      onChange={(e) =>  this.setState({ book: e.target.value })}
                    >
                      <option disabled selected>Selecione um Livro</option>
                      {
                        listBooks && listBooks.map((book, index) => (
                          <option
                            key={ index }
                            className=""
                            value={ book.belong_name }
                          >
                              { book.belong_name }
                          </option>
                        ))
                      }
                    </select>
                  </label>
                <label
                  htmlFor="page"
                  className="pl-2 py-1 w-full flex items-center"
                >
                <span className="w-1/3 font-bold">Página:</span>
                  <input
                    className="w-2/3 p-2 border text-center"
                    type="number"
                    id="page"
                    value={page}
                    onChange={(e) => this.setState({ page: e.target.value })}
                  />
                </label>
                <label
                  htmlFor="edition"
                  className="pl-2 w-full flex items-center"
                >
                  <span className="w-1/3 font-bold">Edição:</span>
                  <select
                    id="edition"
                    className="w-2/3 p-2 border text-center"
                    onChange={(e) => this.setState({ edition: e.target.value })}
                  >
                    <option disabled selected>Selecione uma Edição</option>
                    <option className="text-black" value="W20">W20</option>
                    <option className="text-black" value="Revisada">Revisada</option>
                    <option className="text-black" value="Segunda">Segunda</option>
                  </select>
                </label>
                <button
                  type="button"
                  className="px-10 border border-black hover:bg-black hover:text-white transition duration-500 text-xl rounded mr-1"
                  onClick={this.addFont}
                >
                  +
                </button>
              </div>
              {
                listOfFonts && listOfFonts.map((fonts, index) => (
                  <div key={index} className="ml-5 mr-1 my-3 border border-gray-300 p-2 flex justify-between bg-white pl-10 rounded-lg">
                    <div className="w-10/12 flex items-center">
                      <p className="w-1/3">
                        <span className="font-bold">
                          Livro:
                        </span>
                        {' '}
                        { fonts.book }
                      </p>
                      <p className="w-1/3">
                        <span className="font-bold">
                          Página:
                        </span>
                        {' '}
                        { fonts.page }
                      </p>
                      <p className="w-1/3">
                        <span className="font-bold">
                          Edição:
                        </span>
                        {' '}
                        { fonts.edition }
                      </p>
                    </div>
                    <button
                      type="button"
                      className="px-5 py-3 border border-black hover:bg-black hover:text-white transition duration-500 rounded"
                      onClick={ () => this.deleteFont(fonts) }
                      >
                      Excluir
                    </button>
                  </div>
                ))
              }
            </div>
            <div className="bg-white rounded-lg mt-3 mb-2">
              <label
                htmlFor="belong"
                id="idBelong"
                className="p-2 pl-4 w-full flex items-center">
                <span className="w-1/3 my-4 font-bold">Pertencente a:</span>
                <select
                  id="selectBelong"
                  className="w-2/3 p-2 border text-center"
                  onChange={(e) => this.setState({ belong: e.target.value })}
                >
                  <option disabled value={0} selected>Selecione</option>
                  <option disabled value={0}>Tribos</option>
                  {
                    listTrybes && listTrybes.map((li, index) => (
                      <option key={ index } value={ li.trybes_name }>{ li.trybes_name }</option>
                    ))
                  }
                  <option disabled value={0}>Raça</option>
                  {
                    listBreeds && listBreeds.map((li, index) => (
                      <option key={ index } value={ li.breeds_name }>{ li.breeds_name }</option>
                    ))
                  }
                  <option disabled value={0}>Augúrios</option>
                  {
                    listAuspices && listAuspices.map((li, index) => (
                      <option key={ index } value={ li.auspices_name }>{ li.auspices_name }</option>
                    ))
                  }
                </select>
                <button
                  type="button"
                  className="ml-2 p-2 px-10 border border-black hover:bg-black hover:text-white transition duration-500 rounded mr-1"
                  onClick={this.addNewBelong}
                >
                  +
                </button>
              </label>
              <div className="flex flex-col mb-3">
                {
                  listOfBelongs && listOfBelongs.map((bel, index) => (
                    <div key={index} className="ml-5 mr-1 mt-3 border border-gray-300 p-2 flex justify-between bg-white pl-10 rounded-lg items-center">
                      <div className="w-10/12 mr-4">
                        { bel }
                      </div>
                      <button
                        type="button"
                        className="px-5 py-3 border border-black hover:bg-black hover:text-white transition duration-500 rounded"
                        onClick={ () => this.deleteBelong(bel) }
                        >
                        Excluir
                      </button>
                    </div>
                  ))
                }
              </div>
            </div>
            <label htmlFor="textPtbr" className="p-2 flex flex-col bg-white rounded-lg mt-1">
              <span className="py-3 font-bold pl-3">Texto Traduzido:</span>
              <textarea
                className="ml-3 mb-3 border p-2"
                id="textPtbr"
                value={textPtbr}
                onChange={ (e) => this.setState({ textPtbr: e.target.value }) }
              />
            </label>
            <label htmlFor="systemPtbr" className="p-2 flex flex-col bg-white rounded-lg mt-3">
              <span className="py-3 font-bold pl-3">Sistema Traduzido:</span>
              <textarea
                className="ml-3 mb-3 border p-2"
                id="systemPtbr"
                value={systemPtbr}
                onChange={ (e) => this.setState({ systemPtbr: e.target.value })}
              />
            </label>
            <label
              htmlFor="TextOriginal"
              className="p-2 flex flex-col bg-white rounded-lg mt-3"
            >
              <span className="py-3 font-bold pl-3">Texto original:</span>
              <textarea
                id="TextOriginal"
                className="ml-3 mb-3 border p-2 bg-white rounded-lg mt-1"
                value={textOriginal}
                onChange={ (e) => this.setState({ textOriginal: e.target.value })}
              />
            </label>
              <label
                htmlFor="systemOrig"
                className="p-2 flex flex-col bg-white rounded-lg mt-3 mb-2"
              >
                <span className="py-3 font-bold pl-3">Sistema original:</span>
                <textarea
                  id="systemOrig"
                  className="ml-3 mb-3 border p-2"
                  value={systemOriginal}
                  onChange={ (e) => this.setState({ systemOriginal: e.target.value }) }
                />
              </label>
              <button
                type="button"
                className="p-4 bg-gray-200 my-2 border border-black hover:border-white hover:bg-black hover:text-white transition duration-500"
                onClick={this.addGift}
              >
                Adicionar dom
              </button>
          </form>
        }
        <div className="w-full mt-2 sm:mt-2 items-center">
          <div className="pl-5 mx-3 flex justify-between bg-gradient-to-r from-f-transp to-transparent py-5" onClick={() => this.setState((prev) => ({ showGifts: !prev.showGifts }))}>
            <h1 className="text-4xl text-white" onClick={() => this.setState((prev) => ({ showGifts: !prev.showGifts }))}>Lista de Dons</h1>
            <img
              className="h-14 object-cover"
              src={require(`../../images/logos/${showGifts ? 'arrow-down.png': 'arrow-up.png'}`)}
              onClick={() => this.setState((prev) => ({ showGifts: !prev.showGifts }))}
              alt=""
            />
          </div>
          <div className={`text-white ${showGifts ? 'flex flex-wrap': 'hidden'}`}>
            {
              listGifts.data &&  listGifts.data.map((gifts, index) => (
                <GiftExibition
                  key={ index }
                  source={gifts.font}
                  arrayCategories={gifts.belong}
                  arraysubtypes={[]}
                  description={gifts.textOriginal}
                  system={gifts.systemOriginal}
                  descriptionPtBr={gifts.textPtBr}
                  systemPtBr={gifts.systemPtBr}
                  level={gifts.rank}
                  name={gifts.name_gift}
                  gifts={true}
                  admin={true}
                />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}
