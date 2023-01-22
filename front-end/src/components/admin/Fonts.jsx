import { useContext } from "react";
import context from "../../context/registro/contextRegister";

export default function FontsOfGifts() {
  const contextRegister = useContext(context);

  const addFont = (contextRegister) => {
    if(contextRegister.book === '') {
      contextRegister.setMessage({ text: 'Necessário escolher uma das opções de livro para cadastrar a Fonte', type:'error'});
    } else if (contextRegister.page <= 0) {
      contextRegister.setMessage({ text: 'Necessário inserir um valor para a página maior e diferente de zero para cadastrar a Fonte', type:'error'});
    } else if (contextRegister.edition === '') {
      contextRegister.setMessage({ text: 'Necessário escolher uma das edições oferecidas para cadastrar a Fonte', type:'error'});
    } else {
        contextRegister.setListOfFonts([
          ...contextRegister.listOfFonts,
          { 
            book: contextRegister.book,
            page: contextRegister.page,
            edition: contextRegister.edition
          }
        ]);
        contextRegister.setBook('');
        contextRegister.setPage(0);
        contextRegister.setEdition('');
    }
    const bookSelect = document.getElementById("book");
    bookSelect.selectedIndex = 0;
    const editionSelect = document.getElementById('edition');
    editionSelect.selectedIndex = 0;
  };

  const deleteFont = (contextRegister, fonts) => {
    const newList = contextRegister.listOfFonts.filter((f) => Number(fonts.page) !== Number(f.page) || fonts.book !== f.book || fonts.edition !== f.edition);
    contextRegister.setListOfFonts(newList);
  };

  return(
    <div className="bg-white rounded-lg mt-3 py-5 px-4">
      <div className="w-full flex-col md:flex-row border rounded-lg border-white flex gap-10 mb-3">
        <label
            htmlFor="book"
            className="w-full flex flex-col md:flex-row items-center"
          >
            <span className="w-full md:w-1/3 font-bold">Fonte:</span>
            <select
              id="book"
              className="mt-2 md:mt-0 w-full p-2 border text-center border-gray-300"
              onChange={(e) => contextRegister.setBook(e.target.value)}
            >
              <option disabled selected>Selecione um Livro</option>
              {
                contextRegister.listBooks && contextRegister.listBooks.map((book, index) => (
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
          className="w-full flex flex-col md:flex-row items-center"
        >
        <span className="w-full md:w-1/3 font-bold">Página:</span>
          <input
            className="mt-2 md:mt-0 w-full md:w-2/3 p-2 border text-center"
            type="number"
            id="page"
            value={contextRegister.page}
            onChange={(e) => contextRegister.setPage(e.target.value)}
          />
        </label>
        <label
          htmlFor="edition"
          className="w-full flex flex-col md:flex-row items-center"
        >
          <span className="w-full md:w-1/3 font-bold">Edição:</span>
          <select
            id="edition"
            className="mt-2 md:mt-0 w-full md:w-2/3 p-2 border text-center"
            onChange={(e) => contextRegister.setEdition(e.target.value)}
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
          onClick={() => addFont(contextRegister)}
        >
          +
        </button>
      </div>
      <div className="flex flex-col items-center justify-center">
        {
          contextRegister.listOfFonts && contextRegister.listOfFonts.map((fonts, index) => (
            <div key={index} className="my-2 border border-gray-300 p-2 flex flex-col md:flex-row justify-between bg-white rounded-lg w-full">
              <div className="w-full flex flex-col md:flex-row items-center text-center">
                <p className="w-full md:w-1/3 md:py-0 py-3">
                  <span className="font-bold">
                    Livro:
                  </span>
                  {' '}
                  { fonts.book }
                </p>
                <p className="w-full md:w-1/3 md:py-0 py-3">
                  <span className="font-bold">
                    Página:
                  </span>
                  {' '}
                  { fonts.page }
                </p>
                <p className="w-full md:w-1/3 md:py-0 py-3">
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
                onClick={ () => deleteFont(contextRegister, fonts) }
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