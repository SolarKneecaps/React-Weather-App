import React from 'react';

function OtherWeather(props){
    return(
        <div>
          <h1>Other</h1>
          <div>
            <h1>{props.name}</h1>
            <h1>{props.weather}</h1>
            <h1>{props.temp}</h1>
          </div>
          <form  onSubmit = {props.handleSubmit} >
            <input 
              type ='text' 
              placeholder ='Enter City' 
              onChange = {props.handleChange} 
              value ={props.searchText}
            />
            <button>Submit</button>
          </form>
        </div>
    )
}

export default OtherWeather;