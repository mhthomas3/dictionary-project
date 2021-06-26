import React, {useState} from 'react';
import './Dictionary.css'

export default function Dictionary(){
    const [keyWord, setKeyWord] = useState("");

    function handleKeyWordChange(event){
        setKeyWord(event.target.value);
    }

    function search(event){
        event.preventDefault();
        alert(`Searching for ${keyWord}`);
    }

    return (
        <div className = "Dictionary container">
            <form onSubmit={search}>
                <input type="search" autoFocus={true} onChange={handleKeyWordChange}/>
                <input type="submit" />

            </form>
        </div>
    );
}