import { useContext } from "react";
import context from "../../context/registro/contextRegister";

export default function Belongs() {
  const { setMessage } = useContext(context);

  const addNewBelong = () => {
    if (contextRegister.belong === '') {
      setMessage({
        text: 'Necessário escolher uma das opções disponíveis para cadastrar uma nova referência de pertencimento',
        type: "error",
      });
    } else {
        contextRegister.setListOfBelongs([ ...contextRegister.listOfBelongs, contextRegister.belong]);
    }
    contextRegister.setBelong('');
    const selectBelong = document.getElementById("selectBelong");
    selectBelong.selectedIndex = 0;
  };

  const deleteBelong = (bel) => {
    const newList = contextRegister.listOfBelongs.filter((b) => bel !== b);
    contextRegister.setListOfBelongs(newList);
  };

  const contextRegister = useContext(context);
  return(
    <div className="bg-white rounded-lg mt-3 mb-2">
      <label
        htmlFor="belong"
        id="idBelong"
        className="p-2 pl-4 w-full flex flex-col md:flex-row items-center">
        <span className="w-full md:w-1/3 my-4 font-bold">Pertencente a:</span>
        <select
          id="selectBelong"
          className="w-full md:w-2/3 p-2 border text-center"
          onChange={(e) => contextRegister.setBelong(e.target.value)}
        >
          <option disabled value={0} selected>Selecione</option>
          <option disabled value={0}>Tribos</option>
          {
            contextRegister.listTrybes && contextRegister.listTrybes.map((li, index) => (
              <option key={ index } value={ li.trybes_name }>{ li.trybes_name }</option>
            ))
          }
          <option disabled value={0}>Raça</option>
          {
            contextRegister.listBreeds && contextRegister.listBreeds.map((li, index) => (
              <option key={ index } value={ li.breeds_name }>{ li.breeds_name }</option>
            ))
          }
          <option disabled value={0}>Augúrios</option>
          {
            contextRegister.listAuspices && contextRegister.listAuspices.map((li, index) => (
              <option key={ index } value={ li.auspices_name }>{ li.auspices_name }</option>
            ))
          }
        </select>
        <button
          type="button"
          className="ml-2 p-2 px-10 border border-black hover:bg-black hover:text-white transition duration-500 rounded mr-1"
          onClick={() => addNewBelong()}
        >
          +
        </button>
      </label>
      <div className="flex flex-col mb-3">
        {
          contextRegister.listOfBelongs && contextRegister.listOfBelongs.map((bel, index) => (
            <div key={index} className="ml-5 mr-1 mt-3 border border-gray-300 p-2 flex justify-between bg-white pl-10 rounded-lg items-center">
              <div className="w-10/12 mr-4">
                { bel }
              </div>
              <button
                type="button"
                className="px-5 py-3 border border-black hover:bg-black hover:text-white transition duration-500 rounded"
                onClick={ () => deleteBelong(bel) }
                >
                Excluir
              </button>
            </div>
          ))
        }
      </div>
    </div>
  );
}