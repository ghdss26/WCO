
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar';
import Home from "./pages/Home"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AddDentista from "./dentistas/AddDentista";
import EditDentista from './dentistas/EditDentista';
import ViewDentista from "./dentistas/ViewDentista";


function App() {

  return (

    <div className="App">

		<Router>
			<Navbar/>
			<Routes>

				<Route exact path={"/"} element={<Home/>} />
				<Route exact path={"/adddentista"} element={<AddDentista/>} />
				<Route exact path={"/editdentista/:id"} element={<EditDentista/>} />
				<Route exact path={"/viewdentista/:id"} element={<ViewDentista />} />

			</Routes>
		</Router>
	
    </div>

  );
}

export default App;
