import { useContext } from "react";
import GiftExibition from '../GiftExibition';
import context from "../../context/registro/contextRegister";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiError } from "react-icons/bi";

export default function PopUpGift({ gift }) {
  const contextRegister = useContext(context);
  return (
    <div className="overflow-y-scroll snap-y fixed z-50 top-0 left-0 w-full bg-black/90 flex flex-col h-screen ">
      <div className="text-white font-bold pt-10 pr-4 pl-7 md:pl-4 md:text-left text-center flex flex-col md:flex-row items-center justify-center">
        <BiError className="text-7xl md:text-5xl mr-0 md:mr-3 mb-3 md:mb-0" />
        <span className="">
          Já existe um Dom na base de dados cadastrado com este nome:
        </span>
      </div>
      <GiftExibition
        source={gift.fonts}
        arrayCategories={gift.belongs}
        arraysubtypes={[]}
        description={gift.gift_textOriginal}
        system={gift.gift_systemOriginal}
        note={gift.gift_note}
        descriptionPtBr={gift.gift_textPtBr}
        systemPtBr={gift.gift_systemPtBr}
        level={gift.gift_rank}
        namePtBr={gift.gift_namePtBr}
        nameOriginal={gift.gift_nameOriginal}
        date={gift.gift_date}
        user={gift.gift_user}
        showData={true}
        gifts={true}
        admin={true}
      />
      <button
        type="button"
        className="z-50"
        onClick={ () => contextRegister.setShowPopUpIfGiftExists(false) }
      >
        <AiFillCloseCircle className="text-white z-50 fixed top-0 right-0 text-5xl mt-5 md:mt-10 mr-5 md:mr-10" />
      </button>
    </div>
  );
}