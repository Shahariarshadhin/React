import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

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

            {
                countries.map(country => console.log(country))
            }

            {
                countries.map(country => <Country

                    country={country}
                /* name={country.name}
                population={country.population}
                area={country.area}
*/
                ></Country>)
            }
        </div>
    );
};

export default Countries;