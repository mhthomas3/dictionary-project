import React from 'react';
import Synonyms from './Synonyms'

export default function Meaning(props){
    console.log(props.meaning)
    return(
        <div className="Meaning">
            <h5>{props.meaning.partOfSpeech}</h5>
            {props.meaning.definitions.map(function(definition, index){
                return (
                    <div key={index}>
                        <p>
                            {index+1}. {definition.definition}
                            <br/>
                            <em>{definition.example}</em>
                            <br/>
                            <br/>
                            <Synonyms synonyms={definition.synonyms} />
                        </p>
                    </div>
                )
            })}
        </div>
    )
}