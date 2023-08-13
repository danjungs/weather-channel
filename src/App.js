import logo from './logo.svg';
import './App.css';
import WeatherCard from './components/WeatherCard';

function App() {
  const places = [{locationName: 'Rio de Janeiro', lat: -22.93, lon: -43.19},{locationName: 'Nova York', lat: 40.79, lon: -73.95}]

  return (
    <div className="App">
      <div className="weather-container">
        {
          places.map(el =><WeatherCard locationName={el.locationName} lat={el.lat} lon={el.lon}/>)
        }              
      </div>
    </div>
  );
}

export default App;
