import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const People = (props) => {

    const {history} = props;
    const { id } = useParams();
    const [responseData, setResponseData] = useState([]);
    useEffect(() => {
        axios.get('https://swapi.dev/api/people/' + id)
            .then(response => { setResponseData(response.data) })
            .catch(err => {
                    
                    history.push("/error");
            })
    }, [id]);

    return (
        
        <div>
            <h1>{responseData.name}</h1>
            <h3>Height:   {responseData.height} cm</h3>
            <h3>Mass:   {responseData.mass} kg</h3>
            <h3>Hair Color:   {responseData.hair_color}</h3>
            <h3>Skin Color:   {responseData.skin_color}</h3>
        </div>
    )
};
export default People;