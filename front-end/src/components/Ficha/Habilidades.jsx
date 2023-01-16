import Points from './Points';
import BlocoHabilidade from './BlocoHabilidade';

export default function Habilidades() {
  return (
    <div className="w-full relative z-30 flex flex-col items-center">
      <h1 className="pt-4 px-4 text-4xl font-bold">Habilidades</h1>
        <div className="flex flex-col items-center w-full">
          <p>
            Habilidades 11/7/4 (+3 Especializações)
          </p>
        </div>
      <div className="flex md:flex-row flex-col w-full justify-around">
        <BlocoHabilidade
          name="Mentais"
          inepto="(-3 se inepto)"
          list={['Ciências', 'Erudição', 'Informática', 'Investigação', 'Medicina', 'Ocultismo', 'Ofícios', 'Política']}
        />
        <BlocoHabilidade
          name="Físicas"
          inepto="(-1 se inepto)"
          list={['Armamento', 'Armas de Fogo', 'Briga', 'Condução', 'Dissimulação', 'Esportes', 'Furto', 'Sobrevivência']}
        />
        <BlocoHabilidade
          name="Sociais"
          inepto="(-1 se inepto)"
          list={['Astúcia', 'Empatia', 'Expressão', 'Intimidação', 'Manha', 'Persuasão', 'Socialização', 'Trato c/ Animais']}
        />
      </div>
    </div>
  );
}