const CountryListItem = ({country, visitedFunc}) => {

    const handleChange = () => {
        visitedFunc(country);
    }

    const visitedInput = <input type="checkbox" onChange={handleChange}></input>

    return (
        <ul>
            <li><strong>{country.name} {country.flag}</strong></li>
            <li>Capital: {country.capital}</li>
            <li>Region: {country.region}</li>
            <li>Population: {country.population}</li>
            <li>Area: {country.area} sq/km</li>
            <li>Already visited: {visitedInput}</li>
        </ul>
    );
}

export default CountryListItem;