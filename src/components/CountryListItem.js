const CountryListItem = ({country}) => {
    return (
        <ul>
            <li><strong>{country.name} {country.flag}</strong></li>
            <li>Capital: {country.capital}</li>
            <li>Region: {country.region}</li>
            <li>Population {country.population}</li>
        </ul>
    );
}

export default CountryListItem;