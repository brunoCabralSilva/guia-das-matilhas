import { useContext } from "react";
import context from "../../context/registro/contextRegister";

export default function DataTexts() {
  const contextRegister = useContext(context);
  return (
    <div>
      <label htmlFor="textPtbr" className="py-5 px-4 flex flex-col bg-white rounded-lg mt-1">
        <span className="py-3 font-bold">Texto Traduzido:</span>
        <textarea
          className="mb-3 border p-2"
          id="textPtbr"
          value={contextRegister.textPtBr}
          onChange={ (e) => contextRegister.setTextPtBr(e.target.value) }
        />
      </label>
      <label htmlFor="systemPtBr" className="py-5 px-4 flex flex-col bg-white rounded-lg mt-3">
        <span className="py-3 font-bold">Sistema Traduzido:</span>
        <textarea
          className="mb-3 border p-2"
          id="systemPtBr"
          value={contextRegister.systemPtBr}
          onChange={ (e) => contextRegister.setSystemPtBr(e.target.value) }
        />
      </label>
      <label htmlFor="note" className="py-5 px-4 flex flex-col bg-white rounded-lg mt-3">
        <span className="py-3 font-bold">Nota adicional:</span>
        <textarea
          className="mb-3 border p-2"
          id="note"
          value={contextRegister.note}
          onChange={ (e) => contextRegister.setNote(e.target.value) }
        />
      </label>
      <label
        htmlFor="TextOriginal"
        className="py-5 px-4 flex flex-col bg-white rounded-lg mt-3"
      >
        <span className="py-3 font-bold">Texto original:</span>
        <textarea
          id="TextOriginal"
          className="mb-3 border p-2 bg-white rounded-lg mt-1"
          value={contextRegister.textOriginal}
          onChange={ (e) => contextRegister.setTextOriginal(e.target.value) }
        />
      </label>
      <label
        htmlFor="systemOrig"
        className="py-5 px-4 flex flex-col bg-white rounded-lg mt-3 mb-2"
      >
        <span className="py-3 font-bold">Sistema original:</span>
        <textarea
          id="systemOrig"
          className="mb-3 border p-2"
          value={contextRegister.systemOriginal}
          onChange={ (e) => contextRegister.setSystemOriginal(e.target.value) }
        />
      </label>
    </div>
  );
}