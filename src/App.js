import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Rooms from './Rooms';
import Gallery from './Gallery';
import Contact from './Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
