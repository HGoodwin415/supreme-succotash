import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './Navbar';


function BookingForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking submitted:', name, date, time, guests, occasion);
  };

  const [availableTimes] = useState(['12:00 PM', '12:30PM', '1:00PM', '1:30PM', '2:00 PM', '2:30PM', '3:00PM', '3:30PM', '4:00 PM', '4:30PM', '5:00PM', '5:30PM', '6:00 PM', '6:30PM', '7:00PM', '7:30PM', '8:00 PM', '8:30PM', '9:00PM']);

  
   

  

  return (
   
    <form onSubmit={handleSubmit}>
      <NavBar/>
      <h1>Book a Table</h1>
      <label>
        Name: <sup>*</sup>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <br />
      <label>
        Email: <sup>*</sup>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <br />
      <label>
        Phone: <sup>*</sup>
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </label>
      <br />
      <label>
        Date: <sup>*</sup>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </label>
      <br />
      <label htmlFor="book-guests">Number of Guests: <sup>*</sup></label>
              <input id="book-guests" min="1" value={guests} onChange={(e) => {setGuests(e.target.value)}} type={"number"} placeholder={0} max={10} required></input>
       <label>
        <br />
        Time: <sup>*</sup>
        <select value={time} onChange={(e) => setTime(e.target.value)} required>
          {availableTimes.map((availableTime) => (
            <option key={availableTimes} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>
        </label>
      <br />
      <label htmlFor="book-occasion">Occasion</label>
              <select id="book-occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                <option value="">Select an Option</option>
                <option>Birthday</option>
                <option>Engagement</option>
                <option>Anniversary</option>
              </select>
      <br />
      <Link to="/confirmedBooking"><button type="onClick">Reserve a Table</button></Link>
    </form>
  );
};

export default BookingForm;