import { useEffect, useState } from 'react';

export default function Harmonia() {
  const [harmonia, setHarmonia] = useState([]);

  useEffect(() => {
    const list = [];
    for (let i = 0; i < 10; i += 1 ) {
      list.push(
        <div className="flex w-2/3 justify-between pb-5">
          <p className="text-xl">{ i + 1 }</p>
          <div className="mx-2 border-b border-black w-full" />
          <div
            className={`m-1 rounded-full w-6 h-5 bg-black border border-black`}
          />
        </div>
      );
    }
    setHarmonia(list);
  }, []);

  return (
    <div className="mt-10 w-full flex items-center flex-col">
      <p className="text-2xl font-bold pb-4">Harmonia</p>
      <div className="w-full flex flex-col items-center">
        { harmonia }
      </div>
    </div>
  );
}