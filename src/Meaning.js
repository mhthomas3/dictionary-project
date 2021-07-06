import React from 'react';
import Synonyms from './Synonyms';
import './Meaning.css';

export default function Meaning(props){
    return(
        <div className="Meaning">
            <strong>{props.meaning.partOfSpeech}</strong>
            {props.meaning.definitions.map(function(definition, index){
                return (
                    <div key={index}>
                        {index+1}. {definition.definition}
                        <br/>
                        <em>{definition.example}</em>
                        <Synonyms synonyms={definition.synonyms} />
                        <br/>
                        <br/>
                    </div>
                )
            })}
        </div>
    )
}