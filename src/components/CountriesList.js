import CountryListItem from "./CountryListItem";

const CountriesList = ({countries, visitedFunc}) => {
    const countryObjectsArray = countries.map(country => {
        return {
            name: country.name.common,
            flag: country.flag,
            capital: country.capital,
            region: country.region,
            population: country.population,
            area: country.area
        }
    })

    return(
        <section>
            <h2>Countries of the world:</h2>
            
            {countryObjectsArray.map((element, index) => {return <CountryListItem key={index} country={element} visitedFunc={visitedFunc}/>})}
        </section>
    );
}

export default CountriesList;