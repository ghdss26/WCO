import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

	const [dentistas, setDentista] = useState([]);

	useEffect(() => {

		loadDentistas()
	}, [])

	const loadDentistas = async () => {

		const result = await axios.get("http://localhost:8050/dentista") 
		setDentista(result.data)
	}

	const deleteDentista = async (id) => {

		await axios.delete(`http://localhost:8050/dentista/${id}`); 
		loadDentistas();
	}

	return (

		<div className={'container'}>

			<div className={"py-4"}>

				<table className="table border shadow">

					<thead>

						<tr>

							<th scope="col">#</th>
							<th scope="col">Nome</th>
							<th scope="col">Especialidade</th>
							<th scope="col">Cpf</th>
							<th scope="col">Crm</th> 
							<th scope="col">Senha</th> 
							<th scope="col">Ações</th>

						</tr>

					</thead>

					<tbody>

					{
						dentistas.map((dentista, index) => (

							<tr>
								<th scope="row">{index+1}</th>
								<td>{dentista.nome}</td>
								<td>{dentista.especialidade}</td>
								<td>{dentista.cpf}</td>
								<td>{dentista.senha}</td>
								<td>{dentista.crm}</td>
								<td>
									<Link className={"btn btn-primary mx-2"} exact to={`/viewdentista/${dentista.id}`}>View</Link>
									<Link className={"btn btn-outline-primary mx-2"} 
									 exact to={`/editdentista/${dentista.id}`}>Edit</Link>
									<button className={"btn btn-danger mx-2"} onClick={() => deleteDentista(dentista.id)}>Delete</button>
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

export default Home;