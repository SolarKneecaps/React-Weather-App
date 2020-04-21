import React from 'react';


function CloudWeather(props){
    return(
      <div className = 'container container--cloud'>
      <form className ='container__form' onSubmit = {props.handleSubmit} >
        <input 
          className = {props.isError?'container__form__input--error':'container__form__input'}
          type ='text' 
          placeholder ={props.isError?'Invaild City':'Enter City'} 
          onChange = {props.handleChange} 
          value ={props.searchText}
        />
        <button className ='container__form__btn' ><i className ="fas fa-2x fa-search"></i></button>
      </form>

      <div className ='container__wrapper container--cloud__wrapper'>
        <i className = "fas fa-5x fa-cloud"></i>
        <h1 className ='container__wrapper__content container__wrapper__name'>{props.name}</h1>
        <h1 className ='container__wrapper__content container__wrapper__weather'>{props.weather}</h1>
        <h1 className ='container__wrapper__content container__wrapper__temp'>{props.temp}</h1>
      </div>
    </div>
    )
}

export default CloudWeather;