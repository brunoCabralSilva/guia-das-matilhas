import Points from './Points';

export default function Renome() {
  const list = [ 'Glória', 'Honra', 'Pureza', 'Sabedoria', 'Sagacidade' ];
    return (
      <div className="flex flex-col items-center mt-10 w-full">
        <p className="text-left w-full pb-3 text-2xl font-bold">Renome</p>
        {
          list.map((renome) => (
            <div className="flex w-full items-center justify-between">
              <p className="w-1/2 text-left text-lg"> {renome }</p>
              <div className="mx-2 border-b border-black h-3 w-full" />
              <Points className="w-1/2" />
            </div>
          ))
        }
      </div>
    );
}