import { useContext, useState } from "react";
import axios from "axios";
import context from "../../context/registro/contextRegister";
import fetch from "../../fetch";
import PopUp from "./PopUpGift";

export default function NamesOfGifts() {
  const [gift, setGift] = useState({});
  const contextRegister = useContext(context);
  const verifyName = async() => {
    if (contextRegister.nameOriginal === '' || contextRegister.nameOriginal.length < 4) {
      contextRegister.setMessage({text: 'Necessário adicionar um nome com pelo menos quatro caracteres para o dom', type: "error"});
    } else {
      try {
        const verify = await axios.post(`${fetch()}/gifts/name`, {
          nameOriginal: contextRegister.nameOriginal,
        });
        if (verify.data.gift) {
          setGift(verify.data);
          contextRegister.setShowPopUpIfGiftExists(true);
        } else {
          contextRegister.setMessage({text: 'Nome disponível para cadastro', type: "sucess"});
        }
      } catch(error) {
        contextRegister.setMessage({text: 'Nome disponível para cadastro', type: "sucess"});
      }
    }
  };

  return(
    <div className="bg-white rounded-lg py-5 px-4">
      {
        contextRegister.showPopUpIfGiftExists && gift.gift &&
        <PopUp gift={ gift.gift[0] } />
      }
      <div className={`flex flex-col md:flex-row w-full bg-white ${contextRegister.vName !== '' ? 'rounded-t-lg' : 'rounded-lg' }`}>
        <label
          htmlFor="name"
          className="mb-1 md:w-1/2 flex flex-col md:flex-row justify-between items-center"
        >
          <span className="w-full md:w-1/3 font-bold md:mr-1">Nome(Inglês):</span>
          <div className="pt-2 md:pt-0 w-full h-full flex items-center">
            <input
              type="text"
              value={contextRegister.nameOriginal}
              id="name"
              className="text-left w-full h-full rounded p-3 border border-gray-300"
              onChange={(e) => contextRegister.setNameOriginal(e.target.value)}
            />
            <button
              type="button"
              className="px-3 ml-2 h-full py-2 rounded border border-black hover:bg-black hover:text-white transition duration-500 text-center"
              onClick={() => verifyName()}
            >
              Verificar
            </button>
          </div>
        </label>
        <label
          htmlFor="name"
          className="md:ml-8 ml-0 mt-4 md:mt-0 md:mb-1 md:w-1/2 flex flex-col md:flex-row justify-between items-center"
        >
          <span className="lg:mr-1 w-full md:w-1/2 lg:w-1/3 font-bold">Nome(Pt-br):</span>
          <input
            type="text"
            value={contextRegister.namePtBr}
            id="name"
            className="mt-2 md:mt-0 w-full h-full rounded p-3 border border-gray-300"
            onChange={(e) => contextRegister.setNamePtBr(e.target.value)}
          />
        </label>
      </div>
      {
        contextRegister.vName !== '' ? <p className="bg-white py-5 rounded-b-lg w-full text-center font-bold">{contextRegister.vName}</p> : <div />
      }
    </div>
  );
};