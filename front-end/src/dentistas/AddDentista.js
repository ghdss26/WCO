import React, { useState } from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

const AddDentista = () => {
 
  let navigate = useNavigate();

  const [dentista, setDentista] = useState({
    nome: "",
    especialidade: "",
    cpf: "",
	crm: "", 
	senha: ""
  });

  const { nome, especialidade, cpf, crm, senha } = dentista;

  const onInputChange = (e) => {
    
    setDentista({ ...dentista, [e.target.name]: e.target.value });
   
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    
    await axios.post("http://localhost:8050/dentista", dentista);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
      
        <div
          className={
            "col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"
          }
        >
          <h2 className={"text-center m-4"}>Cadastro de Dentista</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className={"mb-3"}>
              <label htmlFor={"Nome"} className={"form-label"}>
                Nome
              </label>
              <input
                type={"text"}
                className={"form-control"}
                placeholder={"Nome"}
                name={"nome"}
                value={nome}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className={"mb-3"}>
              <label htmlFor={"Especialidade"} className={"form-label"}>
			  	especialidade
              </label>
              <input
                type={"text"}
                className={"form-control"}
                placeholder={"Especialidade"}
                name={"especialidade"}
                value={especialidade}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className={"mb-3"}>
              <label htmlFor={"Cpf"} className={"form-label"}>
                Cpf
              </label>
              <input
                type={"text"}
                className={"form-control"}
                placeholder={"Cpf"}
                name={"cpf"}
                value={cpf}
                onChange={(e) => onInputChange(e)}
              />
            </div>

			<div className={"mb-3"}>
              <label htmlFor={"Crm"} className={"form-label"}>
                Crm
              </label>
              <input
                type={"text"}
                className={"form-control"}
                placeholder={"Crm"}
                name={"crm"}
                value={crm}
                onChange={(e) => onInputChange(e)}
              />
            </div>

			<div className={"mb-3"}>
              <label htmlFor={"senha"} className={"form-label"}>
			  	Senha
              </label>
              <input
                type={"text"}
                className={"form-control"}
                placeholder={"Senha"}
                name={"senha"}
                value={senha}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <button type={"submit"} className={"btn btn-outline-primary"}>
              Submit
            </button>

            <Link className={"btn btn-outline-danger mx-2"} to={"/"}>Cancel</Link>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDentista;
