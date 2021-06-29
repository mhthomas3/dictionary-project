import React from 'react';

export default function Synonyms(props){
    console.log(props.synonyms)
    if (!props.synonyms){
        return (null)
    } else {
        return (
            <div className="Synonyms">
            <h6>Synonyms:</h6>
            {props.synonyms.map(function(synonym, index){
                return(
                    <span key = {index} className="Synonyms">
                        {synonym},{" "}
                    </span> 
                )
            })}
        </div>)
    }
}