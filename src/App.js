import './app.css'
import { Route, Routes } from 'react-router-dom'

import Navbar from './Navigation/Navbar';

import Apicall from './Pages/Api_Call/Apicall';
import Ecom from './Pages/E-commerce/Ecom';
import Form from './Pages/Form/Form';




function App() {
	return (
		<>
			<Navbar />

			<Routes>
				<Route exact path='/data_brain/apicall' element={<Apicall />} />
				<Route exact path="/data_brain/e-com" element={<Ecom />} />
				<Route exact path="/data_brain/" element={<Form />} />
			</Routes>

		</>
	);
}

export default App;
