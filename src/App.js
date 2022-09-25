import './App.css';
import Navbar from './Components/Navbar';
import Recommended from './Components/Recommended';
import Details from './Components/Details';
import MovieState from './Context/MovieDetails/MovieState';
// import CardIdState from './Context/CardID/CardIDState';
import BookingTickets from './Components/Booking_Tickets';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <MovieState>
          <Navbar/>
          <Routes>
            <Route exact path='/' element={<Recommended/>}></Route>
            <Route exact path='/details' element={<Details/>}></Route>
            <Route exact path='/book' element={<BookingTickets/>}></Route>
          </Routes>
        </MovieState>
      </Router>
    </>
  );
}

export default App;
