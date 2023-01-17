import { useState } from 'react';

export default function Points(type, func) {
  const [lv1, setLv1] = useState(true);
  const [lv2, setLv2] = useState(false);
  const [lv3, setLv3] = useState(false);
  const [lv4, setLv4] = useState(false);
  const [lv5, setLv5] = useState(false);
  const [value, setValue] = useState(1);

  const nivel1 = () => { 
    setLv2(false);
    setLv3(false);
    setLv4(false);
    setLv5(false);
    setValue(1);
  }

  const nivel2 = () => {
    setLv1(true);
    if (lv3) {
      setLv2(true);
      setValue(2);
    }
    else {
      if(lv2) {
        setLv2(false);
        setValue(2);
      } else {
        setLv2(true);
        setValue(2);
      }
    }
    setLv3(false);
    setLv4(false);
    setLv5(false);
  }

  const nivel3 = () => {
    setLv1(true);
    setLv2(true);
    if (lv4) {
      setLv3(true);
      setValue(3);
    }
    else {
      if(lv3) {
        setLv3(false);
        setValue(2);
      } else {
        setLv3(true);
        setValue(3);
      }
    }
    setLv4(false);
    setLv5(false);
  }

  const nivel4 = () => {
    setLv1(true);
    setLv2(true);
    setLv3(true);
    if (lv5) {
      setLv4(true);
      setValue(4);
    }
    else {
      if(lv4) {
        setLv4(false);
        setValue(3);
      } else {
        setLv4(true);
        setValue(4);
      }
    }
    setLv5(false);
  }

  const nivel5 = () => {
    setLv1(true);
    setLv2(true);
    setLv3(true);
    setLv4(true);
    setLv5(!lv5);

    let number = 4;
    if(!lv5) number += 1;
    setValue(number);
  }

  return(
    <div className="flex">
      <div
        className={`m-1 rounded-full w-5 h-5 bg-black border border-black`}
        onClick={nivel1}
      />
      <div
        className={`m-1 rounded-full w-5 h-5 ${lv2 ? 'bg-black': 'bg-white'} border border-black`}
        onClick={nivel2}
      />
      <div
        className={`m-1 rounded-full w-5 h-5 ${lv3 ? 'bg-black': 'bg-white'} border border-black`}
        onClick={nivel3}
      />
      <div
        className={`m-1 rounded-full w-5 h-5 ${lv4 ? 'bg-black': 'bg-white'} border border-black`}
        onClick={nivel4}
      />
      <div
        className={`m-1 rounded-full w-5 h-5 ${lv5 ? 'bg-black': 'bg-white'} border border-black`}
        onClick={nivel5}
      />
    </div>
  );
}