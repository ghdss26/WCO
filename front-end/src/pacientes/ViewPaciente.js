import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const ViewPaciente = () => {

	const [paciente, setPaciente] = useState({

		nome: "",
		email: "",
		cpf: "",
		senha: ""
	})

	const {id}=useParams()

	useEffect(() => {

		loadPaciente()
	})

	const loadPaciente = async () => {

		const result = await axios.get(`http://localhost:8050/paciente/${id}`)
		setPaciente(result.data)
	}

	return (

		<div>
			<div className="container">

				<div className="row">

					<div className={"col-md-6 offset-md-3 border-primary rounded p-4 mt-2 shadow"}>

						<h2 className={"text-center m-4"}>Detalhes de Pacientes</h2>
						
						<div className="card"> 

							<div className="card-header">
								Detalhes de Pacientes Id: {paciente.id}
							</div>

							<ul className={"list-group list-group-flash"}>

								<li className={"list-group-item"}><b>Nome</b>:{paciente.nome}</li>
								<li className={"list-group-item"}><b>Email</b>:{paciente.email}</li>
								<li className={"list-group-item"}><b>Cpf</b>:{paciente.cpf}</li>
								<li className={"list-group-item"}><b>Senha</b>:{paciente.senha}</li>
							</ul>

						</div>

					</div>

				</div>
			</div>
		</div>
	);
};

export default ViewPaciente;