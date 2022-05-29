import './App.css';
import Head from './components/head/Head';
import FilterBar from './components/filterbar/FilterBar'
import Cards from './components/cards/cards';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Head/>
      </header>
      <FilterBar/>
      <div>
        <Cards/>
      </div>
    </div>
  );
}

export default App;
