import {
  Routes, Route,
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AddBook from './pages/AddBook';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/new" element={ <AddBook/>} />
      </Routes>
    </div>
  );
}

export default App;
