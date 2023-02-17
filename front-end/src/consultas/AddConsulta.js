import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

const AddConsulta = () => {
 
  let navigate = useNavigate();

  const [consulta, setConsulta] = useState({

    data_consulta: Date,
    horario: "",
    situacao: "", 
	pacienteId: 0,
	dentistaId: 0
	
  });

  const [pacientes, setPacientes] = useState([])
  const [dentistas, setDentistas] = useState([]) 

  const [options,setOptions]=useState()
  const [options1,setOptions1]=useState()
  
  const { data_consulta, horario, situacao, pacienteId, dentistaId} = consulta;

useEffect(()=>{
	
	fetch("http://localhost:8050/paciente").
	then((data)=>data.json()).
	then((val)=>setPacientes(val))
},[])

useEffect(()=>{
	
	fetch("http://localhost:8050/dentista").
	then((data)=>data.json()).
	then((val1)=>setDentistas(val1))

},[])

const onInputChange = (e) => {
    
    setConsulta({ ...consulta,[e.target.name]: e.target.value});
};

  const onSubmit = async (e) => {
    e.preventDefault();
    
    await axios.post("http://localhost:8050/consulta", {
		...consulta,
		pacienteId: document.getElementById("paciente").value,
		dentistaId: document.getElementById("dentista").value
	});
    navigate("/listarconsulta");

  };

  return (
    <div className="container">
      <div className="row">
      
        <div
          className={
            "col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"
          }
        >
          <h2 className={"text-center m-4"}>Cadastro de Consulta</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className={"mb-3"}>
              <label htmlFor={"Data_Consulta"} className={"form-label"}>
                Data da Consulta
              </label>
              <input
                type={"date"}
                className={"form-control"}
                placeholder={"Data_Consulta"}
                name={"data_consulta"}
                value={data_consulta}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className={"mb-3"}>
              <label htmlFor={"Horario"} className={"form-label"}>
			  	Horário
              </label>
              <input
                type={"text"}
                className={"form-control"}
                placeholder={"Horario"}
                name={"horario"}
                value={horario}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className={"mb-3"}>
              <label htmlFor={"Situacao"} className={"form-label"}>
			  	Situação
              </label>
              <input
                type={"text"}
                className={"form-control"}
                placeholder={"Situacao"}
                name={"situacao"}
                value={situacao}
                onChange={(e) => onInputChange(e)}
              />
            </div>

			<div className={"mb-3"} >

				<label htmlFor={"Paciente"} className={"form-label"}>
					Paciente:
				</label>

				<select className="form-control" id="paciente" onChange={(e)=>setOptions(e.target.value)}>
					{
						pacientes.map((paciente)=><option value={paciente.id} name={"paciente"} key={paciente.id}>{paciente.nome}</option>)
					}
				</select>
				
       		 </div>

				<div className={"mb-3"} >

					<label htmlFor={"dentistas"} className={"form-label"}>
						Dentista:
					</label>

					<select className="form-control" id="dentista" onChange={(e)=>setOptions1(e.target.value)}>
						{
							dentistas.map((dentista)=><option  value={dentista.id} name={"dentista"} key={dentista.id}>{dentista.nome}</option>)
						}
					</select>

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

export default AddConsulta;
