import BlocoAtributo from './BlocoAtributo';

export default function Attributes() {
  return (
    <div className="w-full relative z-30 text-black">
      <div className="flex flex-col items-center w-full pb-10">
        <h1 className="pt-4 px-4 text-4xl font-bold">Atributos</h1>
        <div className="flex flex-col items-center w-full pb-5">
        <p>
          Atributos 5/4/3, uma quantidade para cada coluna - O primeiro ponto não conta
        </p>
      </div>
        <div className="flex flex-col w-full px-10">
          <div className="flex w-full justify-around">
            {/* <p className="w-2/12 text-right pr-3">Poder</p> */}
            <BlocoAtributo list={ ['Inteligência', 'Força', 'Presença'] } />
          </div>
          <div className="flex w-full justify-around">
            {/* <p className="w-2/12 text-right pr-3">Refinamento</p> */}
            <BlocoAtributo list={ ['Raciocínio', 'Destreza', 'Manipulação'] } />
          </div>
          <div className="flex w-full justify-around">
            {/* <p className="w-2/12 text-right pr-3">Resistência</p> */}
            <BlocoAtributo list={ ['Perseverança', 'Vigor', 'Autocontrole'] } />
          </div>
        </div>
      </div>
    </div>
  );
}