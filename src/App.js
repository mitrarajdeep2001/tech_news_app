import './App.css';
import Pages from './Components/Pages';
import SearchBar from './Components/SearchBar';
import Stories from './Components/Stories';

function App() {
  return (
    <div className="App">
      <h1 className='header'>Welcome To TechBuzz!</h1>
      <SearchBar/>
      <Stories/>
      <Pages/>
    </div>
  );
}

export default App;
