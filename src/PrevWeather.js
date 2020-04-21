import React from 'react';

function PrevWeather(props){
    return(
        <div className = 'prevWeather--container__wrapper'>
            <p className = 'prevWeather--container__wrapper__text'>{props.temp}</p>
            <p className = 'prevWeather--container__wrapper__text'>{props.name}</p>
            <button className = 'prevWeather--container__wrapper__btn' onClick = {()=>props.handleDelete(props.id)}>X</button>
        </div>
    )
}

export default PrevWeather