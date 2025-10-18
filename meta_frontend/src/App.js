import './App.css';
import {BrowserRouter, Routes,  Route, Link} from 'react-router-dom';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import BookingPage from './main/BookingPage';
function App() {
  return (  
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/booking" element={<BookingPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
