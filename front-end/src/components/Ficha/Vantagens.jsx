import { useEffect, useState } from 'react';
import Points from './Points';

export default function Vantagens() {
  const [vantagem, setVantagem] = useState([]);
  useEffect(() => {
    const list = [];
    for (let i = 0; i < 7; i += 1 ) {
      list.push(
        <div className="flex w-full items-center justify-between">
          <input
            type="text"
            className="pl-3 w-full"
          />
          <Points type="habilidade" />
        </div>
      );
    }
    setVantagem(list);
  }, []);
  
  return (
    <div>
      <p className="py-4 text-2xl font-bold">Vantagens</p>
      <div>
        { vantagem }
      </div>
    </div>
  );
}