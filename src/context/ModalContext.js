import axios from "axios";
import React, { createContext } from "react";
import { useEffect, useState } from "react/cjs/react.development";

export const ModalContext = createContext();

const ModalProvider = (props) => {
  //State del provider
  const [idreceta, guardarIdReceta] = useState(null);
  const [informacionReceta, guardarReceta] = useState({});

  useEffect(() => {
    const obtenerReceta = async () => {
      if (!idreceta) return;
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
      const response = await axios.get(url);
      guardarReceta(response.data.drinks[0]);
    };

    obtenerReceta();
  }, [idreceta]);

  return (
    <ModalContext.Provider
      value={{ informacionReceta, guardarIdReceta, guardarReceta }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
