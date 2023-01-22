import { useContext } from "react";
import context from "../../context/registro/contextRegister";

export default function Rank() {
  const contextRegister = useContext(context);
  return (
    <div className="bg-white rounded-lg mt-3 py-5 px-4">
      <label
        htmlFor="belong"
        id="idBelong"
        className="w-full flex flex-col md:flex-row items-center">
        <span className="w-full md:w-4/12 mb-3 md:mb-0 font-bold">Posto:</span>
        <select
          id="rank"
          className="w-full md:w-11/12 h-full p-2 rounded border border-gray-300 text-center"
          onChange={(e) => contextRegister.setRank(e.target.value)}
        >
          <option disabled selected>Selecione um Posto</option>
          <option value={1}>Cliath (1)</option>
          <option value={2}>Fostern (2)</option>
          <option value={3}>Adren (3)</option>
          <option value={4}>Athro (4)</option>
          <option value={5}>Ancião (5)</option>
          <option value={6}>Lendário (6)</option>
        </select>
      </label>
    </div>
  );
}