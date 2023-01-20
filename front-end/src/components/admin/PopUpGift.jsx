import { AiFillCloseCircle } from "react-icons/ai";
import GiftExibition from '../GiftExibition';
import context from "../../context/registro/contextRegister";
import { useContext } from "react";

export default function PopUpGift({ gift }) {
  const contextRegister = useContext(context);
  return (
    <div className="fixed z-50 top-0 left-0 h-screen w-full bg-black/80 flex flex-col items-center justify-center">
      <p className="text-white font-bold px-4 text-center">
        Já existe um Dom na base de dados cadastrado com este nome:
      </p>
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
        <AiFillCloseCircle className="text-white z-50 fixed top-0 right-0 text-5xl mt-10 mr-10" />
      </button>
    </div>
  );
}