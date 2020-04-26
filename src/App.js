import React from 'react';
import './styles/App.css';
import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import RainWeather from './RainWeather';
import ClearWeather from './ClearWeather';
import CloudWeather from './CloudWeather';
import OtherWeather from './OtherWeather';
import PrevWeather from './PrevWeather';

class App extends React.Component {

  state = {
    apiCode : '201401e464692be4b503a36ae395369e',
    searchText: '',
    location: {
      name : '',
      weather: '',
      temp: ''
    },
    locationSaved: [],
    isError: false,
  }

  componentDidCatch(error, errorInfo){
    console.log(error, errorInfo);
  }

  componentDidMount(){
    Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Houston&appid=${this.state.apiCode}&units=imperial`)
    .then(res => res.data)
    .then(data => {
      
      let newName = data.name;
      let newWeather = data.weather[0].main;
      let newTemp = `${data.main.temp} *F`;
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

handleSearch = () =>{
  Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.searchText}&appid=${this.state.apiCode}&units=imperial`)
  .then(res => res.data)
  .then(data => {
    
    let newName = data.name;
    let newWeather = data.weather[0].main;
    let newTemp = `${data.main.temp} *F`;
    let newLocation = {
      name: newName,
      weather: newWeather,
      temp : newTemp
    }
    let newestLocationSaved = this.state.locationSaved;
    if(this.state.locationSaved.length>=3){
      newestLocationSaved.shift();
    }
    this.setState(prevState=>{
      return{
        locationSaved: [...newestLocationSaved, prevState.location],
        location: newLocation,
        isError: false,
        searchText: ''
      } 
        })
  })
  .catch (err => {
    this.setState({isError: true})
    console.log(err)
  })
}

handleSubmit = (e) =>{
  e.preventDefault();
  this.handleSearch();
  e.target.reset();
}

handleChange = (e) =>{
  this.setState({searchText: e.target.value});
}

handleDelete = (id, e) =>{
  e.stopPropagation();
  let newLocationSaved = this.state.locationSaved;
  newLocationSaved.splice(id, 1);
  this.setState({locationSaved: newLocationSaved});
}

handleClick = (id) =>{
  let clickedWeather = this.state.locationSaved[id];
  let currentWeather = this.state.location;
  let currentPrev = this.state.locationSaved;
  currentPrev.splice(id,1)
  currentPrev.push(currentWeather);
  console.log(currentPrev);
  this.setState({location: clickedWeather, locationSaved: currentPrev})


}

  render(){
    let {name, weather, temp} = this.state.location;
    return (
      <div className="App">
        <div className = "prevWeather--container">
        {Array.isArray(this.state.locationSaved)&&this.state.locationSaved.map((location, index)=>{
        return <PrevWeather 
                  key = {uuidv4()} 
                  name = {location.name} 
                  handleDelete = {this.handleDelete} 
                  handleClick = {this.handleClick}
                  id={index} 
                  temp = {location.temp}/>})}
        </div>
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
