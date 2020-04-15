import React from 'react';
import './App.css';
import Axios from 'axios';

//<i class="fas fa-sun"></i>
//<i class="fas fa-cloud"></i>
//<i class="fas fa-cloud-rain"></i>
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
    }
  }

componentDidMount(){
  Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=college station&appid=${this.state.apiCode}&units=imperial`)
  .then(res => res.data)
  .then(data => console.log(data))
  .catch (err => console.log(err))
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
    this.setState({location: newLocation})
  })
  .catch (err => console.log(err))
}

handleSubmit = (e) =>{
  e.preventDefault();
  this.handleSearch();
  this.setState({searchText: ''})
}

handleChange = (e) =>{
  console.log(e.target.value)
  this.setState({searchText: e.target.value});
}

  render(){
    return (
      <div className="App">
        <form  onSubmit = {this.handleSubmit} >
          <input type ='text' placeholder ='Enter City' onChange = {this.handleChange} value ={this.state.searchText}/>
          <button>Submit</button>
        </form>
        <h1>{this.state.location.name}</h1>
        <h1>{this.state.location.weather}</h1>
        <h1>{this.state.location.temp}</h1>
      </div>
    );
  }
}

export default App;
