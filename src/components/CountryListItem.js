const CountryListItem = ({country, visitedFunc}) => {

    const handleChange = () => {
        visitedFunc(country);
    }

    return (
        <ul>
            <li><strong>{country.name.common} {country.flag}</strong></li>
            <li>Capital: {country.capital}</li>
            <li>Region: {country.region}</li>
            <li>Population: {country.population}</li>
            <li>Area: {country.area} sq/km</li>
            <li id="visited">Already visited: <input type="checkbox" onChange={handleChange}></input></li>
        </ul>
    );
}

export default CountryListItem;