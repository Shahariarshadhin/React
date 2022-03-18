import React from 'react';
import './Country.css'

const Country = (props) => {

    const { name, population, area } = props.country;
    return (
        <div className='country'>
            <h2>Country Name : {name}</h2>
            <p>Popolation : {population}</p>
            <p>Area : {area}</p>
        </div>
    );
};

export default Country;