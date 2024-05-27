import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import About from './components/about/about';
import EBaja from './components/eBaja/eBaja';
import EBajaFront from './components/eBaja/frontPage/eBajaFront';
import Phases from './components/eBaja/phases/phases';
import FormulaBharat from './components/formulaBharat/formulaBharat';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Merchandise from './components/merchandise/merchandise';
import The_Team from './components/eBaja/the_team/the_team';

function App() {
	return (
		<>
			<Navbar />
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/eBaja" element={<EBaja />}>
						<Route index element={<EBajaFront/>}/>
						<Route path="phases" element={<Phases/>} />
						<Route path="team" element={<The_Team/>} />
						<Route path="gallery" element={<Merchandise/>} />
					</Route>
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
