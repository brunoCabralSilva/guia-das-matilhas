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
    <div className="bg-white rounded-lg">
      {
        contextRegister.showPopUpIfGiftExists && 
        <PopUp gift={ gift.gift[0] } />
      }
      <div className={`flex flex-col md:flex-row w-full bg-white ${contextRegister.vName !== '' ? 'rounded-t-lg' : 'rounded-lg' } p-2`}>
        <label
          htmlFor="name"
          className="mb-1 md:w-1/2 flex flex-col md:flex-row justify-between items-center"
        >
          <span className="w-full md:w-1/3 p-3 font-bold">Nome(Inglês):</span>
          <div className="w-full h-full flex flex-col md:flex-row md:mr-8">
            <input
              type="text"
              value={contextRegister.nameOriginal}
              id="name"
              className="w-full h-full rounded p-2 border border-gray-300"
              onChange={(e) => contextRegister.setNameOriginal(e.target.value)}
            />
            <button
              type="button"
              className="h-full mt-2 py-2 md:py-0 md:mt-0 md:ml-1 rounded px-2 border border-black hover:bg-black hover:text-white transition duration-500"
              onClick={() => verifyName()}
            >
              Verificar
            </button>
          </div>
        </label>
        <label
          htmlFor="name"
          className="mb-1 md:w-1/2 flex flex-col md:flex-row justify-between items-center"
        >
          <span className="w-full md:w-1/3 p-3 font-bold">Nome(Pt-br):</span>
          <div className="w-full h-full flex md:mr-8">
            <input
              type="text"
              value={contextRegister.namePtBr}
              id="name"
              className="w-full h-full rounded p-2 border border-gray-300"
              onChange={(e) => contextRegister.setNamePtBr(e.target.value)}
            />
          </div>
        </label>
      </div>
      {
        contextRegister.vName !== '' ? <p className="bg-white py-5 rounded-b-lg w-full text-center font-bold">{contextRegister.vName}</p> : <div />
      }
    </div>
  );
};