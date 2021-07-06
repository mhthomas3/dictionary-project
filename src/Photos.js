import {React} from 'react';
import './Photos.css';

export default function Photos(props){
    if(props.response){
        return (
            <section className="Photos container">
                <div className="row justify-content-center">
                    <h1>Photos</h1>
                    {props.response.map(function(photo,index){
                        return(
                            <div className = "col-4" key = {index}>
                                <a href={photo.src.original} target="_blank" rel="noreferrer">
                                    <img src={photo.src.landscape} alt="images associated with searched word" width="175px"/>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </section>
        );
    }else{
        return(null)
    }

}