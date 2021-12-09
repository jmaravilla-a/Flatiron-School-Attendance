import '../App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import HomePage from './HomePage';
import Navbar from './NavBar';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/homepage" element={<HomePage/>} />
      </Routes>
    </>
  );
}

export default App;
