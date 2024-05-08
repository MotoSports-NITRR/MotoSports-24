import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import About from './components/about/about';
import Merchandise from './components/buyMerchandise/merch';
import Contact from './components/contact/contact';
import EBaja from './components/eBaja/eBaja';
import Footer from './components/footer/footer';
import FormulaBharat from './components/formulaBharat/formulaBharat';
import Header from './components/header/header';
import Home from './components/home/home';

function App() {

  return (
    <>
      <Header></Header>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/eBaja" element={<EBaja/>}/>
                <Route path="/formulaBharat" element={<FormulaBharat/>}/>
                <Route path="/merch" element={<Merchandise/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </Router>
        <Footer></Footer>
    </>
  )
}

export default App