import CountryListItem from "./CountryListItem";

const CountriesList = ({countries}) => {
    const countryObjectsArray = countries.map(country => {
        return {
            name: country.name.common,
            flag: country.flag,
            capital: country.capital,
            region: country.region,
            population: country.population
        }
    })

    return(
        <>
            <h2>CountriesList here!</h2>
            
            {countryObjectsArray.map((element, index) => {return <CountryListItem key={index} country={element} />})}
        </>
    );
}

export default CountriesList;