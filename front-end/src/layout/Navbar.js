
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (

		<div>

			<nav className="navbar navbar-expand-lg navbar-dark bg-danger">

				<div className={"container"}>

					<a className="navbar-brand" href="#">Web Consultória Odontológica</a>
					
					<button className="navbar-toggler" type="button" 
						data-bs-toggle="collapse" 
						data-bs-target="#navbarSupportedContent" 
						aria-controls="navbarSupportedContent" 
						aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					
					<div className="collapse navbar-collapse" id="navbarSupportedContent">

						<ul className="navbar-nav mr-auto">


						</ul>
				
					</div>

					<Link className={"btn btn-outline-light"} to={"/adddentista"}>Adicionar Dentista</Link>

				</div>

			</nav>

		</div>

	);
};

export default Navbar;