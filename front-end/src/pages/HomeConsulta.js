import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomeConsulta = () => {

	const [consultas, setConsulta] = useState([]);

	useEffect(() => {

		loadConsultas()
	}, [])

	const loadConsultas = async () => {

		const result = await axios.get("http://localhost:8050/consulta") 
		setConsulta(result.data)
	}

	const deleteConsulta = async (id) => {

		await axios.delete(`http://localhost:8050/consulta/${id}`); 
		loadConsultas();
	}

	return (

		<div className={'container'}>

			<div className={"py-4"}>

				<table className="table border shadow">

					<thead>

						<tr>

							<th scope="col">#</th>
							<th scope="col">Data da Consulta</th>
							<th scope="col">Horário</th>
							<th scope="col">Situação</th>
							<th scope="col">Dentistas</th> 
							<th scope="col">Pacientes</th> 
							<th scope="col">Ações</th>

						</tr>

					</thead>

					<tbody>

					{
						consultas.map((consulta, index) => (

							<tr>
								<th scope="row">{index+1}</th>
								<td>{consulta.data_consulta}</td>
								<td>{consulta.horario}</td>
								<td>{consulta.situacao}</td>
								<td>{consulta.dentista}</td>
								<td>{consulta.paciente}</td>
								<td>
									<Link className={"btn btn-primary mx-2"} exact to={`/viewconsulta/${consulta.id}`}>View</Link>
									<Link className={"btn btn-outline-primary mx-2"} exact to={`/editconsulta/${consulta.id}`}>Edit</Link>
									<button className={"btn btn-danger mx-2"} onClick={() => deleteConsulta(consulta.id)}>Delete</button>
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

export default HomeConsulta;