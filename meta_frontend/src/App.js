import './App.css';
import {BrowserRouter, Routes,  Route, Link} from 'react-router';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import BookingPage from './main/BookingPage';
import ConfirmedBooking from './main/components/ConfirmedBooking';
function App() {
  return (  
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/booking" element={<BookingPage/>}/>
        <Route path="/confirmed" element={<ConfirmedBooking/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
