import React from 'react';
import axios from 'axios';
import Nav from '../../components/Nav';
import fetch from '../../fetch';
import GiftExibition from '../../components/GiftExibition';
import contextRegister from '../../context/registro/contextRegister';
import Names from '../../components/admin/Names';
import Fonts from '../../components/admin/Fonts';
import Rank from '../../components/admin/Rank';
import Belongs from '../../components/admin/Belongs';
import DataTexts from '../../components/admin/DataTexts';
import PopUpMessage from '../../components/admin/PopUpMessage';

export default class RegisterGift extends React.Component {
  showAllGifts = async (contextRegister) => {
    try {
      const getAllGifts = await axios.get(`${fetch()}/gifts`);
      contextRegister.setListGifts(getAllGifts.data);
    } catch(error) {
      contextRegister.setListGifts([]);
    }
  };

  async componentDidMount() {
    const { history } = this.props;
    const token = localStorage.getItem('token');
    try {
      const authentication = await axios.post (`${fetch()}/login/verify`, {
        token, 
      });
      if (!authentication.data.token) {
        history.push('/login');
      }
    } catch(error) {
      this.context.setMessage({ type: 'error', text: error });
    }
    await this.showAllGifts(this.context);
    try {
      const getLists = await axios.get(`${fetch()}/gifts/lists`);
      this.context.setListBreeds(getLists.data.queryBreeds);
      this.context.setListAuspices(getLists.data.queryAuspices);
      this.context.setListTrybes(getLists.data.queryTrybes);
      this.context.setListBooks(getLists.data.queryBooks);
    } catch(error) {
      this.context.setMessage({ type: 'error', text: error });
    }
  };

  addGift = async () => {   
    console.log(this.context);
    let verifyBoolean = false;
    try {
      const verify = await axios.post(`${fetch()}/gifts/name`, {
        nameOriginal: this.context.nameOriginal,
      });
      verifyBoolean = verify.data.gift;
    } catch(error) {
      verifyBoolean = false;
    }
    if (verifyBoolean && this.context.edit === '') {
      this.context.setMessage({ type: 'error', text: 'Dom já existe na base de dados original' });
    } else if (this.context.nameOriginal === '' || this.context.nameOriginal.length < 4) {
      this.context.setMessage({text: 'Necessário adicionar um nome em inglês para o Dom com pelo menos quatro caracteres', type: 'error' });
    } else if (this.context.namePtBr === '' || this.context.namePtBr.length < 4) {
      this.context.setMessage({type: 'error', text: 'Necessário adicionar um nome traduzido com pelo menos quatro caracteres para o dom' });
    } else if (this.context.rank === 0) {
      this.context.setMessage({ type: 'error', text: 'Necessário escolher um Posto' });
    } else if (this.context.listOfFonts.length === 0) {
      this.context.setMessage({ type: 'error', text: 'Necessário cadastrar um Livro como referência' });
    } else if (this.context.listOfBelongs.length === 0) {
      this.context.setMessage({ type: 'error', text: 'Necessário inserir a quem este dom pertence' });
    } else if (this.context.textPtBr.length <= 10 ) {
      this.context.setMessage({type: 'error', text: 'Necessário inserir uma descrição maior para o campo "Texto Traduzido"' });
    } else if (this.context.systemPtBr.length <= 10 ) {
      this.context.setMessage({type: 'error', text: 'Necessário inserir uma descrição maior para o campo "Sistema Traduzido"' });
    } else if (this.context.textOriginal.length <= 10 ) {
      this.context.setMessage({type: 'error', text: 'Necessário inserir uma descrição maior para o campo "Texto original"' });
    } else if (this.context.systemOriginal.length <= 10 ) {
      this.context.setMessage({type: 'error', text: 'Necessário inserir uma descrição maior para o campo "Sistema original"' });
    }
    else {
      try {
        await axios.post(`${fetch()}/gifts${this.context.edit !== '' ? '/update' : ''}`, {
          id:this.context.id,
          namePtBr: this.context.namePtBr,
          nameOriginal: this.context.nameOriginal,
          rank: this.context.rank,
          font: this.context.listOfFonts,
          belong: this.context.listOfBelongs,
          textPtBr: this.context.textPtBr,
          systemPtBr: this.context.systemPtBr,
          note: this.context.note,
          textOriginal: this.context.textOriginal,
          systemOriginal: this.context.systemOriginal,
          user: localStorage.getItem('user-guia-das-matilhas'),
        });
      } catch(error) {
        this.context.setMessage({type: 'error', text: error.message });
      }
      const rankSelect = document.getElementById("rank");
      rankSelect.selectedIndex = 0;
      const getAllGifts = await axios.get(`${fetch()}/gifts`);
      this.context.setListGifts(getAllGifts.data);
      this.context.setShowFormGift(!this.context.showFormGift);
      this.context.setMessage({type: 'sucess', text: `Dom ${this.context.edit !== '' ? 'atualizado' : 'adicionado'} com sucesso!` });
      this.context.clearFieldOfGifts();
    }
  };

  render() {
    return (
      <contextRegister.Consumer>
        {
          (contextRegister) => (
            <div className={`w-full ${contextRegister.showFormGift ? 'min-h-screen' : 'h-screen'} bg-wolf-01 bg-cover flex flex-col relative`}>
              <div className="main-nav relative z-20">
                <Nav />
              </div>
              { 
                contextRegister.message !== '' && <PopUpMessage />
              }
              <div className="w-full mt-14 cursor-pointer sm:mt-6 items-center" onClick={() => contextRegister.setShowFormGift(!contextRegister.showFormGift)}>
                <div className="pl-5 mx-3 flex items-center justify-between bg-gradient-to-r from-f-transp to-transparent py-5">
                  <h1 className="text-2xl md:text-4xl text-white" >Adicionar um Dom</h1>
                  {/* <img
                    className="h-14 object-cover"
                    'src={require(`../../images/logos/${!contextRegister.showFormGift ? 'arrow-down.png': 'arrow-up.png'}`)}
                    alt="arrow"
                  /> */}
                </div>
              </div>
              {
                contextRegister.showFormGift && 
                <div className={`bg-gradient-to-r from-f-transp to-transparent m-3 flex flex-col md:p-8 z-10`}>
                  <Names />
                  <Rank />
                  <Fonts />
                  <Belongs />
                  <DataTexts />
                  {
                    this.context.edit !== ''
                    ? <div className="w-full grid gap-2 grid-cols-2 p-2">
                        <button
                          type="button"
                          className="p-4 bg-gray-200 my-2 border border-black hover:border-white hover:bg-black hover:text-white transition duration-500 font-bold"
                          onClick={() => {
                            this.addGift();
                          }}
                        >
                          Atualizar Dom
                        </button>
                        <button
                          type="button"
                          className="p-4 bg-gray-200 my-2 border border-black hover:border-white hover:bg-black hover:text-white transition duration-500 font-bold"
                          onClick={() => {
                            this.context.clearFieldOfGifts()
                            this.context.setEdit('');
                          }}
                        >
                          Cancelar Atualização
                      </button>
                      </div>
                    :<button
                      type="button"
                      className="p-4 bg-gray-200 my-2 border border-black hover:border-white hover:bg-black hover:text-white transition duration-500 font-bold"
                      onClick={() => this.addGift(contextRegister)}
                    >
                      Adicionar dom
                    </button>
                  }
                </div>
              }
              <div className="w-full mt-2 md:mt-2 items-center">
                <div className="pl-5 mx-3 cursor-pointer items-center flex justify-between bg-gradient-to-r from-f-transp to-transparent py-5" onClick={() => contextRegister.setShowGifts(!contextRegister.showGifts) }>
                  <h1 className="text-2xl md:text-4xl text-white">Lista de Dons</h1>
                  {/* <img
                    className="h-14 object-cover"
                    src={require(`../images/logos/${contextRegister.showGifts ? 'arrow-down.png': 'arrow-up.png'}`)}
                    alt=""
                  /> */}
                </div>
                <div className={`text-white ${contextRegister.showGifts ? 'flex flex-wrap': 'hidden'}`}>
                  {
                    contextRegister.listGifts && contextRegister.listGifts.length > 0 && contextRegister.listGifts.map((gifts, index) => (
                      <GiftExibition
                        key={ index }
                        id={gifts.gift_id}
                        source={gifts.fonts}
                        arrayCategories={gifts.belongs}
                        arraysubtypes={[]}
                        description={gifts.gift_textOriginal}
                        system={gifts.gift_systemOriginal}
                        note={gifts.gift_note}
                        descriptionPtBr={gifts.gift_textPtBr}
                        systemPtBr={gifts.gift_systemPtBr}
                        level={gifts.gift_rank}
                        namePtBr={gifts.gift_namePtBr}
                        nameOriginal={gifts.gift_nameOriginal}
                        gifts={true}
                        admin={true}
                        date={gifts.gift_date}
                        user={gifts.gift_user}
                      />
                    ))
                  }
                </div>
              </div>
            </div>
          )
        }
      </contextRegister.Consumer>
    );
  }
}

RegisterGift.contextType = contextRegister;
