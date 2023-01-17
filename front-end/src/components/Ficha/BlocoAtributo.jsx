import Points from './Points';

export default function BlocoAtributo({list}) {
  return (
    <div className="flex flex-col w-full justify-around">
      <div className="w-full flex items-center justify-between gap-28">
        <div className="flex items-center justify-between w-2/5 font-bold">
          <p>{ list[0] }:</p>
          <div className="mx-2 border-b border-black h-3 w-full" />
          <Points type={ list[0] } />
        </div>
        <div className="flex items-center justify-between w-2/5 font-bold">
          <p>{ list[1] }:</p>
          <div className="mx-2 border-b border-black h-3 w-full" />
          <Points type={ list[1] } />
        </div>
        <div className="flex items-center justify-between w-2/5 font-bold">
          <p>{ list[2] }:</p>
          <div className="mx-2 border-b border-black h-3 w-full" />
          <Points type={ list[2] } />
        </div>
      </div>
    </div>
  );
}