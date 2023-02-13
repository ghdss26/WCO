import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const EditPaciente = () => {
  
    let navigate = useNavigate();

    const {id} = useParams()

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

    useEffect(()=>{
        loadPaciente()
    },[])

    const onSubmit = async (e) => {
        e.preventDefault();
      
        await axios.put(`http://localhost:8050/paciente/${id}`, paciente);
        navigate("/listarpaciente");
    };

    const loadPaciente  = async () => {
        const result=await axios.get(`http://localhost:8050/paciente/${id}`)
        setPaciente(result.data)
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
                                placeholder={"Enter your name"}
                                name={"nome"}
                                value={nome}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className={"mb-3"}>
                            <label htmlFor={"email"} className={"form-label"}>
								Email
                            </label>
                            <input
                                type={"text"}
                                className={"form-control"}
                                placeholder={"email"}
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
                                placeholder={"cpf"}
                                name={"cpf"}
                                value={cpf}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

						<div className={"mb-3"}>
                            <label htmlFor={"Senha"} className={"form-label"}>
								Senha
                            </label>
                            <input
                                type={"text"}
                                className={"form-control"}
                                placeholder={"senha"}
                                name={"senha"}
                                value={senha}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <button type={"submit"} className={"btn btn-success"}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditPaciente;
