import { useEffect, useState } from 'react';

export default function Vitalidade() {
  const [vitalidade, setVitalidade] = useState([]);
  const [vitalidade2, setVitalidade2] = useState([]);

  useEffect(() => {
    const list = [];
    const list2 = [];

    for (let i = 0; i < 15; i += 1 ) {
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
    setVitalidade(list);
    setVitalidade2(list2);
  }, []);

  return (
    <div className="mt-6 flex flex-col items-center text-2xl font-bold">
      <p className="pb-2">Vitalidade</p>
    <div className="flex flex-col">
      <div className="flex">
        {vitalidade}
      </div>
      <div className="flex">
        {vitalidade2}
      </div>
    </div>
  </div>
  );
}