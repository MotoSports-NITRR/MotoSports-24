import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';

import Header from './components/header/header';
import Home from './components/home/home';
import EBaja from './components/eBaja/eBaja';
import FormulaBharat from './components/formulaBharat/formulaBharat';
import Merchandise from './components/merchandise/merchandise';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';





function App() {
	return (
		<>
			<Header />
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/eBaja" element={<EBaja />} />
					<Route path="/formulaBharat" element={<FormulaBharat />} />
					<Route path="/merchandise" element={<Merchandise />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</Router>
			<Footer />
		</>
	);
}

export default App;
