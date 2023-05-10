import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbars from './Components/Navbar/Navbars';
import Booklist from './Components/Booklist/Booklist';
import { Provider } from 'react-redux';
// import store from './redux/store';
import BookContextProvider from './Context/BookContext';

function App() {
  return (

    <Router>
      <Navbars />
      <Routes>
        <Route path='/' element={<Booklist />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
