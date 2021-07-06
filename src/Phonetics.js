import {React} from 'react';
import './Phonetics.css';

export default function Phonetics(props){
    return(
        <div className="Phonetics">
            <span className="phoneticSpelling">{props.phonetic.text}</span>
            <a className="pronunciationButton" href={props.phonetic.audio} alt="link to pronunciation of word" target="blank">Listen</a>
        </div>)
}