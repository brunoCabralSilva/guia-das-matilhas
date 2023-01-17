import Vantagens from './Vantagens';
import Vitalidade from './Vitalidade';
import ForcaDeVontade from './ForcaDeVontade';
import Essencia from './Essencia';
import InstintoPrimitivo from './InstintoPrimitivo';
import Harmonia from './Harmonia';
import Renome from './Renome';

export default function OutrasCaracteristicas() {
  return (
    <div className="w-full relative z-30">
      <h1 className="p-4 text-4xl text-center font-bold w-full">Outras Características</h1>
      <div className="flex px-16 flex-row">
        <div className="w-1/3 flex flex-col items-center justify-start p-4">
          <Vantagens />
          <Renome />
        </div>
        <div className="w-1/3 flex flex-col items-center justify-between ml-9">
          <Vitalidade />
          <ForcaDeVontade />
          <Essencia />
          <InstintoPrimitivo />
        </div>
        <div className="w-1/3 flex flex-col justify-start">
          <Harmonia />
        </div>
      </div>
    </div>
  );
}