import { useContext } from "react";
import axios from "axios";
import fetch from "../../fetch";
import context from "../../context/registro/contextRegister";
import { AiFillCloseCircle } from "react-icons/ai";

export default function PopUpDelete({ name, setPopup }) {
  const contextRegister = useContext(context);
  const deleteItem = async () => {
    setPopup(false);
    try {
      const deleteGift =  await axios.delete(`${fetch()}/gifts/delete/${name}`);
      if (deleteGift.status === 201) {
        contextRegister.setMessage({ text: `O dom "${name}" foi excluído com sucesso!`, type: "sucess" });
      } else {
        contextRegister.setMessage({ text: `Ocorreu um erro ao tentar excluir o Dom "${name}"`, type: "error" });
      }
    } catch(error) {
      contextRegister.setMessage({ text: `Ocorreu um erro ao tentar excluir o Dom "${name}" (${error})`, type: "error" });
      }
    await contextRegister.showAllGifts();
  };

  return (
    <div className="fixed z-50 top-0 left-0 h-screen w-full bg-black/80 flex flex-col items-center justify-center">
      <div className="w-11/12 sm:w-3/5 md:w-2/3 lg:w-1/2 bg-black flex flex-col items-center justify-center relative border-4 border-white">
        <img
          src={require('../../images/wallpapers/001.jpg')} 
          alt="wallpaper" 
          className="w-full h-full absolute object-cover z-10 opacity-60"
        />
        <div className=" z-20 text-center w-full pt-10 px-10 font-bold mb-10">
          <p>{`Sábio Garou, você tem certeza que quer que o dom "${name}" seja`}</p>
          <p className="text-xl py-3">EXCLUÍDO ?</p>
          <p>
          Ao realizar esta ação, não será mais possível trazê-lo de volta, nem mesmo se você embrenhar jornadas pelos mais profundos bolsões da Umbra!
          </p>
        </div>
        <div className="pb-10 z-20">
          <button
            type="button"
            className="bg-green-500 px-5 py-3 font-bold border-black border-2 hover:border-white transition duration-500"
            onClick={ deleteItem }
          >
            Sim
          </button>
          <button
            type="button"
            className="bg-red-500 ml-2 px-5 py-3 font-bold border-black border-2 hover:border-white transition duration-500"
            onClick={ () => setPopup(false) }
          >
            Não
          </button>
        </div>
      </div>
      <button
        type="button"
        className="z-50"
        onClick={ () => setPopup(false) }
      >
        <AiFillCloseCircle className="text-white z-50 fixed top-0 right-0 text-5xl mt-5 md:mt-10 mr-5 md:mr-10" />
      </button>
    </div>
  );
}