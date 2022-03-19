import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h2>Countries : {countries.length}</h2>

            <div className='countries-container'>
                {
                    countries.map(country => console.log(country))
                }

                {
                    countries.map(country => <Country country={country}

                        key={country.numericCode}
                    /* name={country.name}
                    population={country.population}
                    area={country.area}
    */
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;