import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const ViewDentista = () => {

	const [dentista, setDentista] = useState({

		nome: "",
		especialidade: "",
		cpf: "",
		crm: "", 
		senha: ""
	})

	const {id}=useParams()

	useEffect(() => {

		loadDentista()
	})

	const loadDentista = async () => {

		const result = await axios.get(`http://localhost:8050/dentista/${id}`)
		setDentista(result.data)
	}

	return (

		<div>
			<div className="container">

				<div className="row">

					<div className={"col-md-6 offset-md-3 border-primary rounded p-4 mt-2 shadow"}>

						<h2 className={"text-center m-4"}>Detalhes de Dentistas</h2>
						
						<div className="card"> 

							<div className="card-header">
								Detalhes de Dentistas Id: {dentista.id}
							</div>

							<ul className={"list-group list-group-flash"}>

								<li className={"list-group-item"}><b>Nome</b>:{dentista.nome}</li>
								<li className={"list-group-item"}><b>Especialidade</b>:{dentista.especialidade}</li>
								<li className={"list-group-item"}><b>Cpf</b>:{dentista.cpf}</li>
								<li className={"list-group-item"}><b>Crm</b>:{dentista.crm}</li>
								<li className={"list-group-item"}><b>Senha</b>:{dentista.senha}</li>
							</ul>

						</div>

					</div>

				</div>
			</div>
		</div>
	);
};

export default ViewDentista;