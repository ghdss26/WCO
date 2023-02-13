import React, { useState } from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

const AddPaciente = () => {
 
  let navigate = useNavigate();

  const [paciente, setPaciente] = useState({
    nome: "",
    email: "",
    cpf: "",
	senha: ""
  });

  const { nome, email, cpf, senha } = paciente;

  const onInputChange = (e) => {
    
    setPaciente({ ...paciente, [e.target.name]: e.target.value });
   
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    
    await axios.post("http://localhost:8050/paciente", paciente);
    navigate("/listarpaciente");
  };

  return (
    <div className="container">
      <div className="row">
      
        <div
          className={
            "col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"
          }
        >
          <h2 className={"text-center m-4"}>Cadastro de Paciente</h2>

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
              <label htmlFor={"Email"} className={"form-label"}>
			 	 Email
              </label>
              <input
                type={"text"}
                className={"form-control"}
                placeholder={"Email"}
                name={"email"}
                value={email}
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

export default AddPaciente;
