import {
  Routes, Route,
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AddBook from './pages/AddBook';
import BookDetails from './pages/BookDetails';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/new" element={ <AddBook/>} />
        <Route path="/book/:id" element={ <BookDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
