import { useContext } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiError } from "react-icons/bi";
import { BsCheckAll } from "react-icons/bs";
import contextRegister from "../../context/registro/contextRegister";

export default function PopUpMessage() {
  const { message, setMessage } = useContext(contextRegister);
  return (
    <div
      className={`${message.text === '' ? 'hidden': 'flex'} fixed z-50 top-0 left-0 h-screen w-full text-white flex-col items-center justify-center`}
      onClick={ () => setMessage({ text: '', type: '' }) }
    >
      <div className="w-11/12 sm:w-3/5 md:w-2/3 lg:w-1/3 bg-black flex flex-col items-center justify-center relative border-4 border-white/80"
      onClick={(e) => {
        e.stopPropagation();
      }}
      >
        <img
          src={require('../../images/wallpapers/001.jpg')} 
          alt="wallpaper" 
          className="w-full h-full absolute object-cover z-10 opacity-60"
        />
        {
          message.type === 'error' && <BiError className="text-6xl text-white z-40 mt-10" />
        }
        {
          message.type === 'sucess' && <BsCheckAll className="text-6xl text-white z-40 mt-10" />
        }
        <div className="z-30 text-center w-full pb-10 px-10 font-bold mt-6 mb-10 text-2xl">
          {message.text}
        </div>
        <button
          type="button"
          className="z-50"
          onClick={ () => setMessage({ text: '', type: '' }) }
        >
          <AiFillCloseCircle className="top-0 right-0 text-white z-50 absolute text-4xl mt-3 mr-3" />
        </button>
      </div>
    </div>
  );
}