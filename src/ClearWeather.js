import React from 'react';

function ClearWeather(props){
  
    return(
        <div className = 'container'>
          <form className ='container__form' onSubmit = {props.handleSubmit} >
            <input 
              className ='container__form__input'
              type ='text' 
              placeholder ='Enter City' 
              onChange = {props.handleChange} 
              value ={props.searchText}
            />
            <button className ='container__form__btn' ><i class="fas fa-2x fa-search"></i></button>
          </form>
          {props.isError?
            <div className = 'container__error'>Invaild City <br/>Please Try Again</div>:
            <div className = 'container__error'>&nbsp;</div>
          }
          <div className ='container__wrapper'>
            <i className="fas fa-5x fa-sun"></i>
            <h1 className ='container__wrapper__content container__wrapper__name'>{props.name}</h1>
            <h1 className ='container__wrapper__content container__wrapper__weather'>{props.weather}</h1>
            <h1 className ='container__wrapper__content container__wrapper__temp'>{props.temp}</h1>
          </div>
        </div>
    )
}

export default ClearWeather;