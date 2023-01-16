import { useEffect, useState } from "react";

export default function Essencia() {
  const [essencia, setEssencia] = useState([]);

  useEffect(() => {
    const list = [];
    for (let i = 0; i < 20; i += 1 ) {
      list.push(
        <div
          className={`m-1 w-5 bg-white h-5 border border-black`}
        />
      );
    }
    setEssencia(list);
  }, []);
  
  return (
    <div className="flex flex-col items-center mt-6 text-2xl font-bold">
      <p className="p-2">Essência</p>
      <div className="flex flex-wrap w-9/12">
        { essencia }
      </div>
    </div>
  );
}