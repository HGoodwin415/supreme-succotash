import './App.css';
import Homepage from './components/Homepage';
import { Fragment} from 'react';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import About from './components/About';
import BookingForm from './components/BookingForm';
import Reservation from './components/Reservation';
import BookingConfirmed from './components/BookingConfirmed';
import Login from './components/Login';
import MenuItemCards from './components/MenuItemCards';
import SignUp from './components/SignUp';




function App() {
  
    return (
      <Fragment className="App">
        <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<MenuItemCards />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/orderOnline" element={<MenuItemCards />} />
          <Route path="/reservations" element={<Reservation />} />
          <Route path="/confirmedBooking" element={<BookingConfirmed />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
        </Router>
      </Fragment>
    );
  }

  export default App;

 
