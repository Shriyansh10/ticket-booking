import './App.css';
import Navbar from './Components/Navbar';
import Recommended from './Components/Recommended';
import Details from './Components/Details';
import MovieState from './Context/MovieDetails/MovieState';

function App() {

  return (
    <>
      <MovieState>
      <Navbar/>
      <Recommended/>
      {/* <Details/> */}
      </MovieState>
    </>
  );
}

export default App;
