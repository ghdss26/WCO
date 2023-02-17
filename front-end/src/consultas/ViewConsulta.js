import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
 
const ViewConsulta = () => {

	const [consulta, setConsulta] = useState({

		data_consulta: Date,
		horario: "",
		situacao: "",
		
	})

	const {id}=useParams()

	useEffect(() => {

		loadConsulta()
	})

	const loadConsulta = async () => {

		const result = await axios.get(`http://localhost:8050/consulta/${id}`)
		setConsulta(result.data)
	}

	return (

		<div>
			<div className="container">

				<div className="row">

					<div className={"col-md-6 offset-md-3 border-primary rounded p-4 mt-2 shadow"}>

						<h2 className={"text-center m-4"}>Detalhes de Consultas</h2>
						
						<div className="card"> 

							<div className="card-header">
								Detalhes de Consulta Id: {consulta.id}
							</div>

							<ul className={"list-group list-group-flash"}>

								<li className={"list-group-item"}><b>Data da Consulta</b>:{consulta.data_consulta}</li>
								<li className={"list-group-item"}><b>Horário</b>:{consulta.horario} </li>
								<li className={"list-group-item"}><b>Situação</b>:{consulta.situacao}</li>
								<li className={"list-group-item"}><b>Paciente</b>:{consulta.paciente}</li>
								<li className={"list-group-item"}><b>Dentista</b>:{consulta.dentista}</li>

							</ul>

						</div>

					</div>

				</div>
			</div>
		</div>
	);
}

export default ViewConsulta;