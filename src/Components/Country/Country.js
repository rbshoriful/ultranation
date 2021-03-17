import React from 'react';

const Country = (props) => {
    const {name, population, region, flag} = props.country;
    const handleAddCountry = props.handleAddCountry;
    const flagStyle = {height:'50px'}
    const styleCountry = {
        border: ' 1px solid red',
        margin: '10px',
        padding: '10px'
    }
    return (
        <div style={styleCountry}>
            <h2>This is a {name}</h2>
            <img style={flagStyle} src={flag} alt=""/>
            <p>Population: {population}</p>
            <h4>Region: {region}</h4>
            <button onClick={ () =>handleAddCountry(props.country)}>Add country</button>
        </div>
    );
};

export default Country;