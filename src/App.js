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
				<Route exact path='/apicall' element={<Apicall />} />
				<Route exact path="/e-com" element={<Ecom />} />
				<Route exact path="/" element={<Form />} />
			</Routes>

		</>
	);
}

export default App;
