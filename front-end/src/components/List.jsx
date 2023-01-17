import React from 'react';

export default class List extends React.Component {
  render() {
    const {
      list,
      select,
      type,
      itemsSelected,
    } = this.props;

    const divList = list.map((element, index) => {
      if (type === "Augúrios") {
        const { auspices_name } = element;
        return (
          <div
            key={ index } 
            className={
              itemsSelected.includes(auspices_name)
              ? "w-full h-40 mob-5:w-40% mob-4:w-23% mob-6:w-28% flex flex-col items-center justify-center bg-center bg-boca bg-cover p-2 m-2"
              : "w-full h-40 mob-5:w-40% mob-4:w-23% mob-6:w-28% flex flex-col items-center justify-center bg-center bg-night bg-cover p-2 m-2"
            }
            name={auspices_name} onClick={select}
          >
            {/* <img
              src={require(`../images/auspices/${auspices_image2}`)}
              alt={auspices_name}
              name={auspices_name}
              className="object-contain sm:h-32 h-28 p-2"
            /> */}
            <p name={auspices_name} className="leading-6 pb-2 text-sm sm:text-xl font-bold w-90% text-center">{auspices_name}</p>
          </div>
        );
      }

      if (type === "Tribos") {
        const { trybes_name } = element;
        return (
          <div
            className={
              itemsSelected.includes(trybes_name)
              ? "w-full h-40 mob-5:w-40% mob-4:w-23% mob-6:w-28% flex flex-col items-center justify-center bg-center bg-boca bg-cover p-2 m-2"
              : "w-full h-40 mob-5:w-40% mob-4:w-23% mob-6:w-28% flex flex-col items-center justify-center bg-center bg-night bg-cover p-2 m-2"
            }
            name={trybes_name} onClick={select}
          >
            {/* <img
              src={require(`../images/trybes/${trybes_image4}`)}
              className="object-contain sm:h-32 h-28 p-2"
              alt={trybes_name}
              name={trybes_name}
            /> */}
            <p className="leading-6 pb-2 text-sm sm:text-base font-bold w-95% text-center">{trybes_name}</p>
          </div>
        );
      }

      if (type === 'Postos') {
        const { nome, posto } = element;
        return (
          <div
            className={
              itemsSelected.includes(posto)
              ? "w-full h-40 mob-5:w-40% mob-4:w-23% mob-6:w-28% flex flex-col items-center justify-center bg-center bg-boca bg-cover p-2 m-2"
              : "w-full h-40 mob-5:w-40% mob-4:w-23% mob-6:w-28% flex flex-col items-center justify-center bg-center bg-night bg-cover p-2 m-2"
            }
            name={nome} onClick={select}
          >
            <p name={nome} className="leading-6 pb-2 text-sm sm:text-xl font-bold w-95% text-center">{posto}</p>
          </div>
        );
      }

      if (type === 'Raças') {
        const { breeds_name } = element;
        return (
          <div
            className={
              itemsSelected.includes(breeds_name)
              ? "w-full h-40 mob-5:w-40% mob-4:w-32% mob-6:w-28% flex flex-col items-center justify-center bg-center bg-boca bg-cover p-2 m-2"
              : "w-full h-40 mob-5:w-40% mob-4:w-32% mob-6:w-28% flex flex-col items-center justify-center bg-center bg-night bg-cover p-2 m-2"
            }
            name={breeds_name} onClick={select}
          >
            {/* <img
              src={require(`../images/breeds/${breeds_image1}`)}
              className="object-contain sm:h-32 h-28 p-2"
              alt={breeds_name}
              name={breeds_name}
            /> */}
            <p name={breeds_name} className="leading-6 pb-2 text-sm sm:text-xl font-bold w-95% text-center">{breeds_name}</p>
          </div>
        );
      }

      const { belong_name } = element;
      return (
        <div
            className={
              itemsSelected.includes(belong_name)
              ? "w-full h-40 mob-5:w-40% mob-4:w-23% mob-6:w-28% flex flex-col items-center justify-center bg-center bg-boca bg-cover p-2 m-2"
              : "w-full h-40 mob-5:w-40% mob-4:w-23% mob-6:w-28% flex flex-col items-center justify-center bg-center bg-night bg-cover p-2 m-2"
            }
            name={belong_name} onClick={select}
          >
          <p name={belong_name} className="leading-6 pb-2 text-sm sm:text-xl font-bold w-95% text-center">{belong_name}</p>
        </div>
      );
    });

    return (
      <div className="flex flex-row flex-wrap justify-start">
        {divList}
      </div>
    );
  }
}