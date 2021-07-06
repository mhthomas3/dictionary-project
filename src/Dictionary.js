import React, {useState} from 'react';
import './Dictionary.css';
import axios from "axios";
import Photos from './Photos';
import Results from './Results'

export default function Dictionary(){
    const [keyWord, setKeyWord] = useState("");
    const [apiResponse, setApiResponse] = useState(false);
    const [pexelsResponse, setPexelsResponse] = useState(false);

    function handlePexelsResponse(response){
        setPexelsResponse(response.data.photos)
        console.log(response.data.photos)
    }

    function handleResponse(response){
        setApiResponse(response.data[0])
    }

    function handleKeyWordChange(event){
        setKeyWord(event.target.value);
    }

    function search(event){
        event.preventDefault();
        let url = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`
        axios.get(url).then(handleResponse)

        let pexelsApiKey = "563492ad6f91700001000001b66bb59a7eb34cc6888a58f3cb2bb622";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyWord}&per_page=6`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    }

    return(
        <div className = "Dictionary container align-self-center">
            <section className="form">
                <form onSubmit={search}>
                    <input type="search" autoFocus={true} onChange={handleKeyWordChange} placeholder="Search for a word..." />
                </form>
            </section>
            <section className="Results">
                <Results response={apiResponse} pexelsResponse={pexelsResponse}/>
            </section>
                    <Photos response={pexelsResponse} />
        </div>
    );}
