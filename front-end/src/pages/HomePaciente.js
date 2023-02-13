import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const HomePaciente = () => {

	const [pacientes, setPaciente] = useState([]);

	useEffect(() => {

		loadPacientes()
	}, [])

	const loadPacientes = async () => {

		const result = await axios.get("http://localhost:8050/paciente") 
		setPaciente(result.data)
	}

	const deletePaciente = async (id) => {

		await axios.delete(`http://localhost:8050/paciente/${id}`); 
		loadPacientes();
	}

	return (

		<div className={'container'}>

			<div className={"py-4"}>

				<table className="table border shadow">

					<thead>

						<tr>

							<th scope="col">#</th>
							<th scope="col">Nome</th>
							<th scope="col">Email</th>
							<th scope="col">Cpf</th>
							<th scope="col">Senha</th> 
							<th scope="col">Ações</th>

						</tr>

					</thead>

					<tbody>

					{
						pacientes.map((paciente, index) => (

							<tr>
								<th scope="row">{index+1}</th>
								<td>{paciente.nome}</td>
								<td>{paciente.email}</td>
								<td>{paciente.cpf}</td>
								<td>{paciente.senha}</td>
								<td>
									<Link className={"btn btn-primary mx-2"} exact to={`/viewpaciente/${paciente.id}`}>View</Link>
									<Link className={"btn btn-outline-primary mx-2"} 
									 exact to={`/editpaciente/${paciente.id}`}>Edit</Link>
									<button className={"btn btn-danger mx-2"} onClick={() => deletePaciente(paciente.id)}>Delete</button>
								</td>
								
							</tr>
						))
					}
						
					</tbody>

				</table>

			</div>

		</div>

	);
};

export default HomePaciente;