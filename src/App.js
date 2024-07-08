import logo from './logo.svg';
import './App.css';
import NavBar from './Components/navBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { originals,action,ComedyMovies,HorrorMovies,Documentaries,RomanceMovies } from './urls';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title="Netfilx Originals"/>
      <RowPost title="Comedy " url={ComedyMovies} isSmall />
      <RowPost title="Horror " url={HorrorMovies} isSmall />
      <RowPost title="Romance" url={RomanceMovies} isSmall />
      <RowPost title="Documentaries" url={Documentaries} isSmall />
      
    </div>
  );
}

export default App;
