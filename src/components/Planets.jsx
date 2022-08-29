import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const Planets = (props) => {

    const {history} = props;
    const { id } = useParams();

    const [responseData, setResponseData] = useState([]);
    useEffect(() => {
        axios.get('https://swapi.dev/api/planets/' + id)
            .then(response => { setResponseData(response.data) })
            .catch(err => { 
                history.push("/error");
                });
    }, [id]);

    return (
        <div>
            <h1>{responseData.name}</h1>
            <h3>Climate:   {responseData.climate}</h3>
            <h3>Terrain:   {responseData.terrain}</h3>
            <h3>Surface Water:   {responseData.surface_water}</h3>
            <h3>Population:   {responseData.population}</h3>
        </div>
    )
};
export default Planets;