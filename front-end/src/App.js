import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AddDentista from './dentistas/AddDentista';
import EditDentista from './dentistas/EditDentista';
import ViewDentista from './dentistas/ViewDentista';
import ViewPaciente from './pacientes/ViewPaciente';
import Navbar from './layout/Navbar';
import AddPaciente from './pacientes/AddPaciente';
import EditPaciente from './pacientes/EditPaciente';

import HomeDentista from './pages/HomeDentista';
import HomePaciente from './pages/HomePaciente';

function App() {

  return (

    <div className="App">

		<Router>
			<Navbar/>
			<Routes>

				<Route exact path={"/listarpaciente"} element={<HomePaciente/>} />
				<Route exact path={"/listardentista"} element={<HomeDentista/>} />

				<Route exact path={"/addpaciente"} element={<AddPaciente/>} />
				<Route exact path={"/adddentista"} element={<AddDentista/>} />

				<Route exact path={"/editdentista/:id"} element={<EditDentista/>} />
				<Route exact path={"/editpaciente/:id"} element={<EditPaciente/>} />
				
				<Route exact path={"/viewdentista/:id"} element={<ViewDentista />} />
				<Route exact path={"/viewpaciente/:id"} element={<ViewPaciente />} />
				
			</Routes>
		</Router>
	
    </div>

  );
}

export default App;
