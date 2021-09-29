import axios from "axios";
import React, { createContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";

//Crear el Context
export const CategoriasContext = createContext();

//Provider es donde se encuentran las funciones y state
const CategoriasProvider = (props) => {
  //ccrear el state del Context
  const [categorias, guardarCategorias] = useState([]);

  useEffect(() => {
    const obtenerCategorias = async () => {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
      const categorias = await axios.get(url);
      guardarCategorias(categorias.data.drinks);
    };

    obtenerCategorias();
  }, []);

  return (
    <CategoriasContext.Provider
      value={{
        categorias,
      }}
    >
      {props.children}
    </CategoriasContext.Provider>
  );
};

export default CategoriasProvider;
