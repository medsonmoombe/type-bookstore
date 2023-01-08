import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Routes, Route,
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AddBook from './pages/AddBook';
import BookDetails from './pages/BookDetails';
import Home from './pages/Home';
import { fetchbook } from './redux/book/BookList';

function App() {

  const dispatch = useDispatch();
  // const [books, setBooks] = useState<any>([]);
  const url = "http://localhost:3000/books";

  useEffect(() => {
    const api = async () => {
      const data = await fetch(url, {
        method: "GET",
      });
      const jsonData = await data.json();
      // if (jsonData) setBooks(jsonData);
      dispatch(fetchbook(jsonData));
    };

    api();
  }, [dispatch]);

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
