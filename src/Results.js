import {React} from 'react';
import Meaning from './Meaning'
import './Results.css';

export default function Results(props){
    console.log(props.response)

    if(props.response !== false){
        return(
            <div className="container">
                <h2>{props.response.word}</h2>
                {props.response.meanings.map(function(meaning, index){
                    return(
                        <Meaning meaning={meaning}/>
                    )
                })}
            </div>
        )
    } else {
        return(null)
    }

};