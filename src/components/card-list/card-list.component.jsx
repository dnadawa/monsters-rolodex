import React from "react";
import './card-list.stylle.css'
import {Card} from "../card/card.component";

export const CardList = props => {
    return(
        <div className='card-list'>{
            props.monstor.map(monstor => <Card key={monstor.id} monstor={monstor}/>)
        }</div>
    );

};