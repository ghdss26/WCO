import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams, Link} from "react-router-dom";

const EditDentista = () => {

    let navigate = useNavigate();

    const {id} = useParams()

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

    useEffect(()=>{
        loadDentista()
    }, [])

    async function onSubmit(e) {
		e.preventDefault();
		//backtick character (template character)
		await axios.put(`http://localhost:8050/dentista/${id}`, dentista);
		navigate("/");
	}

    // Added Part in Edit
    const loadDentista  = async () => {
        const result=await axios.get(`http://localhost:8050/dentista/${id}`)
        setDentista(result.data)
    }

    return (
        <div className="container">
            <div className="row">
                {/*col-md-6 : colums of medium size with 6 span */}
                <div
                    className={
                        "col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"
                    }
                >
                    <h2 className={"text-center m-4"}>Editar Dentista</h2>

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

            <Link type={"submit"} className={"btn btn-outline-primary"}>
              Submit
            </Link>

            <Link className={"btn btn-outline-danger mx-2"} to={"/"}>Cancel</Link>

          </form>
                </div>
            </div>
        </div>
    );
};

export default EditDentista;
