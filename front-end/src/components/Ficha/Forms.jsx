import FormData from './FormData';

export default function Forms() {
  return(
    <div className="w-full flex flex-col h-screen p-4 relative z-30">
      <div className="items-center h-1/5 flex">
        <div className="w-1/5 text-center">1</div>
        <div className="w-1/5 text-center">2</div>
        <div className="w-1/5 text-center">3</div>
        <div className="w-1/5 text-center">4</div>
        <div className="w-1/5 text-center">5</div>
      </div>
      <div className="items-baseline justify-center flex h-4/5">
        <div className="w-1/5 text-center">
          <p className="font-bold pb-4 text-xl">Hominídeo</p>
          <p>Tamanho: 0</p>
          <p>Defesa: 0</p>
          <p>Iniciativa: 0</p>
          <p>Desl: </p>
          <p>Blindagem: 0</p>
          <p>Percepção: 0</p>
        </div>
        <div className="w-1/5 text-center">
          <p className="font-bold pb-4 text-xl">Glabro</p>
          <FormData />
          <div className="text-center px-8 pt-5">
            Induz Delírio: observadores têm 4 dados extras no teste de Força de Vontade para resistir.
          </div>
        </div>
        <div className="w-1/5 text-center">
          <p className="font-bold pb-4 text-xl">Crinos</p>
          <FormData />
          <div className="text-center px-8 pt-5">
          Fúria. Induz Delírio total. Ignoram-se penalidades devidas a ferimentos, nada de testes de inconsciência. -2 para resistir à Fúria Mortal. Provoca dano letal. Falha na maioria dos testes Mentais e Sociais.
          </div>
        </div>
        <div className="w-1/5 text-center">
        <p className="font-bold pb-4 text-xl">Hispo</p>
          <FormData />
          <div className="text-center px-8 pt-5">
          Induz Delírio: observadores têm 4 dados extras no teste de Força de Vontade para resistir. Provoca dano letal.
          </div>
        </div>
        <div className="w-1/5 text-center">
          <p className="font-bold pb-4 text-xl">Lupino</p>
          <FormData />
          <div className="text-center px-8 pt-5">
            Mordida provoca dano letal
          </div>
        </div>
      </div>
    </div>
  );
}