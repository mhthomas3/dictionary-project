import React from 'react';
import './Synonyms.css';

export default function Synonyms(props){
    if (!props.synonyms){
        return (null)
    } else {
        return (
            <div className="Synonyms">
                <br/>
                <p className="Header">synonyms:</p>
                {props.synonyms.map(function(synonym, index){
                    return(
                        <span key = {index} className="Synonyms">
                            {synonym}{" "}
                        </span> 
                    )
            })}
        </div>)
    }
}