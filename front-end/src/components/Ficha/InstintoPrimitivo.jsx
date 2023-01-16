import { useEffect, useState } from 'react';

export default function InstintoPrimitivo() {
  const [instinto, setInstinto] = useState([]);

  useEffect(() => {
    const list = [];
    for (let i = 0; i < 10; i += 1 ) {
      list.push(
        <div
          className={`m-1 rounded-full w-5 h-5 bg-white border border-black`}
        />
      );
    }
    setInstinto(list);
  }, []);
    return (
      <div className="flex flex-col items-center mt-6 text-2xl font-bold">
        <p className="p-2">Instinto Primitivo</p>
        <div className="flex">
          { instinto }
        </div>  
      </div>
    );
  }