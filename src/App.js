import React from 'react';
import './App.css';
import Axios from 'axios';
//https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02 
class App extends React.Component {

  state = {
    apiCode : '201401e464692be4b503a36ae395369e',
    googleApi: 'AIzaSyCCbSlc0isJHzODIpWRvDncBDbEMsILT-s'
  }

componentDidMount(){
  Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${this.state.apiCode}&units=imperial`)
  .then(res => res.data)
  .then(data => console.log(data))
  .catch (err => console.log(err))
}

  render(){
    return (
      <div className="App">
        <input type ='text' placeholder ='Enter Location'/>
      </div>
    );
  }
}

export default App;
