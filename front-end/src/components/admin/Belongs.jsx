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
    <div className="bg-white rounded-lg mt-3 py-5 px-4">
      <label
        htmlFor="belong"
        id="idBelong"
        className="w-full flex flex-col md:flex-row items-center">
        <span className="w-full md:w-1/3 my-4 font-bold">Pertencente a:</span>
        <select
          id="selectBelong"
          className="w-full p-2 border text-center"
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
          className=" w-full md:w-2/12 mt-2 md:mt-0 md:ml-2 py-2 border border-black hover:bg-black hover:text-white transition duration-500 rounded"
          onClick={() => addNewBelong()}
        >
          +
        </button>
      </label>
      <div className="flex flex-col mb-3">
        {
          contextRegister.listOfBelongs && contextRegister.listOfBelongs.map((bel, index) => (
            <div key={index} className="p-3 mt-3 border border-gray-300 flex justify-between bg-white rounded-lg items-center">
              <div className="w-10/12">
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