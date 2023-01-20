import React from 'react';
import contextRegister from '../context/registro/contextRegister';
import PopUpDelete from './admin/PopUpDelete';

export default class GiftExibition extends React.Component {
  state = {
    giftDescription: 'hidden',
    popup: false,
  };

  componentDidMount() {
    const { showData } = this.props;
    if (showData) {
      this.setState({ giftDescription: 'gift-found-content' });
    }
  };

  setPopup = (bool) => {
    this.setState({ popup: bool });
  };

  enableDisableGift = () => {
    const { giftDescription } = this.state;
    if (giftDescription === 'hidden') {
      this.setState({ giftDescription: 'gift-found-content' });
    } else {
      this.setState({ giftDescription: 'hidden' });
    }
  };

  firstLetterUpper = (nome) => {
    let novoNome = nome[0].toUpperCase();
    for (let i = 1; i < nome.length; i += 1) {
      novoNome += nome[i];
    }
    return novoNome;
  }

  returnListBelongs = (arrayCategories) => {
    const array = arrayCategories.map((array, index) => {
      if (index + 1 < arrayCategories.length) {
        return (<span key={ index } >
          {array.belong_name}
          {', '}
        </span>
        );
      }
      else { 
        return (
          <span key={ index } >
            {array.belong_name}
            {'.'}
          </span>
        );
      }
      });
    return array;
  };

  returnListFonts = (source) => {
    return source.map((array, index) => (
      <div key={ index }>
        {array.font_book}
        {', '}
        Pag.
        {' '}
        {array.font_page}
        {' - '}
        Edição:
        {' '}
        { array.font_edition }
        {'.'}
      </div>
    ));
  };

  editGift = () => {
    this.context.setShowFormGift(true);
    window.scroll(0, 0);
    this.context.setEdit(this.props.nameOriginal);
    const belongsList = this.props.arrayCategories.map((cat) => cat.belong_name );
    const sourceList = this.props.source.map((s) => (
      { 
        book: s.font_book,
        page: s.font_page,
        edition: s.font_edition
      }
    ))
    const rankSelect = document.getElementById("rank");
    rankSelect.selectedIndex = this.props.level;
    this.context.setListOfFonts(sourceList);
    this.context.setListOfBelongs(belongsList);
    // arraysubtypes: this.props.arraysubtypes,
    this.context.setId(this.props.id);
    this.context.setTextOriginal(this.props.description);
    this.context.setTextPtBr(this.props.descriptionPtBr);
    this.context.setSystemPtBr(this.props.systemPtBr);
    this.context.setNote(this.props.note);
    this.context.setSystemOriginal(this.props.system);
    this.context.setNamePtBr(this.props.namePtBr);
    this.context.setNameOriginal(this.props.nameOriginal);
    this.context.setRank(this.props.level);
  };

  render() {
    const {
      source,arrayCategories,
      arraysubtypes,
      description,
      descriptionPtBr,
      systemPtBr,
      note,
      system,
      namePtBr,
      nameOriginal,
      level,
      admin,
      color,
      showData,
      date,
      user,
      edit,
    } = this.props;
    const { giftDescription } = this.state;
    return (
      <section className={`${color === 'white' && 'text-white'} 
        ${giftDescription !== 'hidden'
          ? ' w-full text-white bg-gradient-to-r from-f-transp to-transparent p-5 ml-3 mt-2 sm:mt-3'
          : ' w-full text-white sm:w-48% bg-gradient-to-r from-f-transp to-transparent p-5 ml-3 mt-2 sm:mt-3'}`}
      >
        {
          this.state.popup && 
          <PopUpDelete
            name={nameOriginal}
            setPopup={ this.setPopup }
          />
        }
        <div className='flex items-center justify-between' onClick={() => {
              if(!showData) {
                this.enableDisableGift()
              } 
            }}>
          <div
            className={
              giftDescription !== 'hidden'
                ? "w-full"
                : "w-full sm:w-1/2"
            }
            onClick={() => {
              if(!showData) {
                this.enableDisableGift()
              } 
            }}
          >
            <strong>
              {namePtBr && this.firstLetterUpper(namePtBr)}
              {' ('}
              {nameOriginal && this.firstLetterUpper(nameOriginal)}
              {') '}
              - Posto {level}
            </strong>
          </div>
          {
            giftDescription === 'hidden'
              ? !showData && <img
                alt="baixo"
                src={require('../images/logos/arrow-down.png')}
                className="h-12 pr-4"
              />
              : !showData && <img
                alt="seta para cima"
                src={require('../images/logos/arrow-up.png')}
                className="h-12 pr-4"
              />
          }
        </div>
        {giftDescription !== 'hidden' && <hr className="my-3 w-9/12 sm:w-10/12 bg-white text-white" />}
        <div className={giftDescription}>
          <div className="mt-2"><strong>Fonte:</strong>
          { this.returnListFonts(source) }
          </div>
          <div className="mt-2">
            <p><strong>Pertencente a: </strong></p>
            { this.returnListBelongs(arrayCategories) }
            </div>
          <div className="mt-2"><strong>Pré-Requisito: </strong>{ arraysubtypes }</div>
          <div className="my-2"><strong>Descrição: </strong></div>
          <div className="my-2">{ descriptionPtBr }</div>
          <div className="my-2"><strong>Sistema:</strong></div>
          <div className="my-2">{ systemPtBr }</div>
          {
            note &&
            <div>
              <div className="my-2"><strong>Nota:</strong></div>
              { 
                edit
                ? <textarea className="text-black w-full" value={note} onChange={(e) => this.setState({ note: e.target.value })} />
                :<div className="my-2">{ note }</div>
              }
            </div>
          }
          <div className="my-2"><strong>Description:</strong></div>
          <div className="my-2">{description}</div>
          <div className="my-2"><strong>System:</strong></div>
          <div className="my-2">{system}</div>
          {
            date && 
            <div>
              <div className="my-2">
                <strong>Atualizado pela última vez em</strong>
                <span>{' '}</span>
                {date}
                <span>{' '}</span>
                <span>por {user}</span>
              </div>
            </div>
          }
          {
            admin &&
            <div className="mt-6">
              <button
                className="bg-black mr-1 p-3 border-2 border-black hover:border-white transition duration-500"
                onClick={this.editGift}
              >
                  Editar
              </button>
              <button
                className="bg-black ml-2 p-3 border-2 border-black hover:border-white transition duration-500"
                onClick={ () => this.setPopup(true) }
              >
                Excluir
              </button>
            </div>
          }
        </div>
      </section>
    );
  }
}

GiftExibition.contextType = contextRegister;