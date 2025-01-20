import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import jsonData from '../src/public/appdata.json'
function App() {
  return (
    <div className="App">
      <Header />
      <Home data={jsonData.items} />
    </div>
  );
}

export default App;
