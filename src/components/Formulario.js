import React, { useContext } from "react";
import { CategoriasContext } from "../context/CategoriasContext";

const Formulario = () => {
  const { categorias } = useContext(CategoriasContext);

  const renderCategorias = () => {
    return categorias.map((categoria) => {
      let { strCategory } = categoria;
      return <option key={strCategory}>{strCategory}</option>;
    });
  };

  return (
    <form className="col-12">
      <fieldset className="text-center">
        <legend>Busca bebidas por Categoria o Ingrediente</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            name="nombre"
            className="form-control"
            type="text"
            placeholder="Buscar por ingrediente"
          />
        </div>

        <div className="col-md-4">
          <select className="form-control" name="categoria">
            <option value="">Selecciona la categoria</option>
            {renderCategorias()}
          </select>
        </div>

        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Buscar Bebidas"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
