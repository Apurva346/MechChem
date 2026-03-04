import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import MachineDetails from './pages/MachineDetails';
import WhatsAppFloat from './components/common/WhatsAppFloat';
import Inax from './pages/Inax';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar /> 
        
        {/* flex-grow मुळे कंटेंट कमी असेल तरी फुटर खालीच राहील */}
        <main className="flex bg-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/machine/:id" element={<MachineDetails />} />
            <Route path="*" element={<Home />} />
            {/* <Route path="/i-nax" element={<Inax />} /> */}
          </Routes>
        </main>
        <WhatsAppFloat />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
