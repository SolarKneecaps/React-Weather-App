import React from 'react';

function PrevWeather(props){
    return(
        <div onClick = {()=>props.handleClick(props.id)} className = 'prevWeather--container__wrapper'>
            <p className = 'prevWeather--container__wrapper__text'>{props.temp}</p>
            <p className = 'prevWeather--container__wrapper__text'>{props.name}</p>
            <button className = 'prevWeather--container__wrapper__btn' onClick = {(e)=>props.handleDelete(props.id, e)}>X</button>
        </div>
    )
}

export default PrevWeather