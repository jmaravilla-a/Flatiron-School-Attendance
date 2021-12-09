import '../App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import HomePage from './HomePage';

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
