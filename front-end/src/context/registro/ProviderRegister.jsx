import { useState } from 'react';
import context from './contextRegister';
import axios from 'axios';
import fetch from '../../fetch';

export default function ProviderRegister({ children }) {
  const [edition, setEdition] = useState('');
  const [book, setBook] = useState('');
  const [page, setPage] = useState(0);
  const [belong, setBelong] = useState('');
  const [vName, setVName] = useState('');
  const [showPopUpIfGiftExists, setShowPopUpIfGiftExists] = useState(false);
  const [listBreeds, setListBreeds] = useState([]);
  const [listAuspices, setListAuspices] = useState([]);
  const [listTrybes, setListTrybes] = useState([]);
  const [listBooks, setListBooks] = useState([]);
  const [listGifts, setListGifts] = useState([]);
  const [showFormGift, setShowFormGift] = useState(false);
  const [showGifts, setShowGifts] = useState(true);
  const [namePtBr, setNamePtBr] = useState('');
  const [nameOriginal, setNameOriginal] = useState('');
  const [rank, setRank] = useState(0);
  const [textPtBr, setTextPtBr] = useState('');
  const [systemPtBr, setSystemPtBr] = useState('');
  const [note, setNote] = useState('');
  const [textOriginal, setTextOriginal] = useState('');
  const [systemOriginal, setSystemOriginal] = useState('');
  const [listOfFonts, setListOfFonts] = useState([]);
  const [listOfBelongs, setListOfBelongs] = useState([]);
  const [popup, setPopup] = useState(false);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [edit, setEdit] = useState('');
  const [id, setId] = useState(0);

  const clearFieldOfGifts = () => {
    setId(0);
    setEdit('');
    setNamePtBr('');
    setNameOriginal('');
    setTextPtBr('');
    setSystemOriginal('');
    setNote('');
    setSystemPtBr('');
    setTextOriginal('');
    setListOfFonts([]);
    setListOfBelongs([]);
  };

  const showAllGifts = async() => {
    try {
      const getAllGifts = await axios.get(`${fetch()}/gifts`);
      setListGifts(getAllGifts.data);
    } catch(error) {
      setListGifts([]);
    }
  };

  return (
    <context.Provider 
      value={{ 
        edition, setEdition,
        book, setBook,
        page, setPage,
        belong, setBelong,
        vName, setVName,
        showPopUpIfGiftExists, setShowPopUpIfGiftExists,
        listBreeds, setListBreeds,
        listAuspices, setListAuspices,
        listTrybes, setListTrybes,
        listBooks, setListBooks,
        listGifts, setListGifts,
        showFormGift, setShowFormGift,
        showGifts, setShowGifts,
        namePtBr, setNamePtBr,
        nameOriginal, setNameOriginal,
        rank, setRank,
        textPtBr, setTextPtBr,
        systemPtBr, setSystemPtBr,
        note, setNote,
        textOriginal, setTextOriginal,
        systemOriginal, setSystemOriginal,
        listOfFonts, setListOfFonts,
        listOfBelongs, setListOfBelongs,
        loading, setLoading,
        popup, setPopup,
        clearFieldOfGifts,
        message, setMessage,
        edit, setEdit,
        id, setId,
        showAllGifts,
      }}
    >
      {children}
    </context.Provider>
  );
}