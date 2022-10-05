import CountryListItem from "./CountryListItem";

const VisitedCountriesList = ({countries}) => {

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
        <section>
            <h2>All the countries I've visited:</h2>
            {countryObjectsArray.map((element, index) => {return <CountryListItem key={index} country={element} />})}
        </section>
    );
}

export default VisitedCountriesList;