import React, {useState} from 'react';
import './Dictionary.css';
import axios from "axios";

export default function Dictionary(){
    const [keyWord, setKeyWord] = useState("");

    function handleResponse(response){
        console.log(response)
    }

    function handleKeyWordChange(event){
        setKeyWord(event.target.value);
    }

    function search(event){
        event.preventDefault();
        let url = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`
        axios.get(url).then(handleResponse)
    }

    return (
        <div className = "Dictionary container align-self-center">
            <form onSubmit={search}>
                <input type="search" autoFocus={true} onChange={handleKeyWordChange}/>
                <input type="submit"/>

            </form>
        </div>
    );
}