import React from "react";
import './card.style.css';

export const Card = props => {

    return(
    <div className='card-container'>
        <img src={'https://robohash.org/'+props.monstor.id+'?set=set2&size=180x180'} alt={'monster'}/>
        <h2>{props.monstor.name}</h2>
        <p>{props.monstor.email}</p>
    </div>
    );
}