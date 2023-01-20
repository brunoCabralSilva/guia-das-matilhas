import { useContext } from "react";
import context from "../../context/registro/contextRegister";

export default function DataTexts() {
  const contextRegister = useContext(context);
  return (
    <div>
      <label htmlFor="textPtbr" className="p-2 flex flex-col bg-white rounded-lg mt-1">
        <span className="py-3 font-bold pl-3">Texto Traduzido:</span>
        <textarea
          className="ml-3 mb-3 border p-2"
          id="textPtbr"
          value={contextRegister.textPtBr}
          onChange={ (e) => contextRegister.setTextPtBr(e.target.value) }
        />
      </label>
      <label htmlFor="systemPtBr" className="p-2 flex flex-col bg-white rounded-lg mt-3">
        <span className="py-3 font-bold pl-3">Sistema Traduzido:</span>
        <textarea
          className="ml-3 mb-3 border p-2"
          id="systemPtBr"
          value={contextRegister.systemPtBr}
          onChange={ (e) => contextRegister.setSystemPtBr(e.target.value) }
        />
      </label>
      <label htmlFor="note" className="p-2 flex flex-col bg-white rounded-lg mt-3">
        <span className="py-3 font-bold pl-3">Nota adicional:</span>
        <textarea
          className="ml-3 mb-3 border p-2"
          id="note"
          value={contextRegister.note}
          onChange={ (e) => contextRegister.setNote(e.target.value) }
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
          value={contextRegister.textOriginal}
          onChange={ (e) => contextRegister.setTextOriginal(e.target.value) }
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
          value={contextRegister.systemOriginal}
          onChange={ (e) => contextRegister.setSystemOriginal(e.target.value) }
        />
      </label>
    </div>
  );
}