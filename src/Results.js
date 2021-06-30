import {React} from 'react';
import Meaning from './Meaning';
import Phonetics from './Phonetics';
import './Results.css';

export default function Results(props){
console.log(props)
    if(props.response !== false){
        return(
            <div className="container">
                <h2>{props.response.word}</h2>
                {props.response.phonetics.map(function(phonetic, index){
                    return (
                        <Phonetics key = {index} phonetic={phonetic} />
                )})}

                {props.response.meanings.map(function(meaning, index){
                    return(
                        <Meaning key = {index} meaning={meaning}/>
                    )
                })}
            </div>
        )
    } else {
        return(null)
    }

};