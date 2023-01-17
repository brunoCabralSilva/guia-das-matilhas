import Points from './Points';

export default function BlocoHabilidade({name, inepto, list}) {
  return (
    <div className="">
      <h1 className="pt-5 px-4 font-bold w-full text-center">{ name }</h1>
      <p className="w-full text-center pb-5">{ inepto }</p>
      <div className="flex flex-col w-full justify-around">
        {
          list.map((habilidade, index) => (
            <div className="w-full flex items-center justify-between" key={index}>
              <p className="w-1/3 font-bold">{habilidade}:</p>
              <input type="text" className="w-28 mx-3" />
              <Points type={habilidade} />
            </div>
          ))
        }
      </div>
    </div>
  );
}