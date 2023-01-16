import { useEffect, useState } from 'react';

export default function ForcaDeVontade() {
  const [fdv, setFdv1] = useState([]);
  const [fdv2, setfdv2] = useState([]);

  useEffect(() => {
    const list = [];
    const list2 = [];

    for (let i = 0; i < 10; i += 1 ) {
      list.push(
        <div
          className={`m-1 rounded-full bg-white w-5 h-5 border border-black`}
        />  
      );
      list2.push(
        <div
          className={`m-1 w-5 h-5 border bg-white border-black`}
        /> 
      );
    }
    setFdv1(list);
    setfdv2(list2);
  }, []);

  return (
    <div className="mt-6 flex flex-col items-center text-2xl font-bold">
      <p className="p-2">Força de Vontade</p>
      <div className="flex flex-col">
        <div className="flex">
          {fdv}
        </div>
        <div className="flex">
          {fdv2}
        </div>
      </div>
    </div>
  );
}