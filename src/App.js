import React from 'react';
import './styles/App.css';
import Axios from 'axios';
import RainWeather from './RainWeather';
import ClearWeather from './ClearWeather';
import CloudWeather from './CloudWeather';
import OtherWeather from './OtherWeather';

//<i class="fas fa-sun"></i> clear
//<i class="fas fa-cloud"></i> clouds
//<i class="fas fa-cloud-rain"></i> rain
//<i class="fas fa-cloud-sun-rain"></i>
//<i class="fas fa-snowflake"></i>


class App extends React.Component {

  state = {
    apiCode : '201401e464692be4b503a36ae395369e',
    searchText: '',
    location: {
      name : '',
      weather: '',
      temp: ''
    },
    isError: false
  }

handleSearch = () =>{
  Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.searchText}&appid=${this.state.apiCode}&units=imperial`)
  .then(res => res.data)
  .then(data => {
    
    let newName = data.name;
    let newWeather = data.weather[0].main;
    let newTemp = data.main.temp;
    let newLocation = {
      name: newName,
      weather: newWeather,
      temp : newTemp
      }
    this.setState({location: newLocation, isError: false})
  })
  .catch (err => {
    this.setState({isError: true})
    console.log(err)
  })
}

handleSubmit = (e) =>{
  e.preventDefault();
  this.handleSearch();
  this.setState({searchText: ''})
}

handleChange = (e) =>{
  this.setState({searchText: e.target.value});
}

  render(){
    let {name, weather, temp} = this.state.location;
    return (
      <div className="App">
        {
          (weather==='Clear')?
            <ClearWeather 
              name = {name}
              weather = {weather}
              temp = {temp}
              handleChange = {this.handleChange}
              value = {this.state.searchText}
              handleSubmit = {this.handleSubmit}
              isError = {this.state.isError}
            />:
          (weather==='Rain')?
            <RainWeather
              name = {name}
              weather = {weather}
              temp = {temp}
              handleChange = {this.handleChange}
              value = {this.state.searchText}
              handleSubmit = {this.handleSubmit}
              isError = {this.state.isError}
            />:
          (weather==='Clouds')?
            <CloudWeather
              name = {name}
              weather = {weather}
              temp = {temp}
              handleChange = {this.handleChange}
              value = {this.state.searchText}
              handleSubmit = {this.handleSubmit}
              isError = {this.state.isError}
            />:
            <OtherWeather
              name = {name}
              weather = {weather}
              temp = {temp}
              handleChange = {this.handleChange}
              value = {this.state.searchText}
              handleSubmit = {this.handleSubmit}
              isError = {this.state.isError}
            />
        }
      </div>
    );
  }
}

export default App;
