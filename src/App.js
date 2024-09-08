import './App.css';
import Navbar from './components/navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
