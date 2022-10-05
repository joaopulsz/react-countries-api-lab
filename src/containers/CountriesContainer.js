import { useState, useEffect } from "react";

import CountriesList from "../components/CountriesList";
import VisitedCountriesList from "../components/VisitedCountriesList";

const CountriesContainer = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    const visitedFunc = (country) => {
        setVisitedCountries([...visitedCountries, country]);
    }

    const fetchCountries = () => {
        // fetch data from the RESTCountries API
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        // set the countries state to the result of the API call
        .then(response => setCountries(response));
        // pass it down to relevant components
    }

    // lifecycle method
    useEffect(() => {
        fetchCountries();
    }, [])

    return(
        <main>
            <CountriesList countries={countries} visitedFunc={visitedFunc}/>
            <VisitedCountriesList countries={visitedCountries}/>
        </main>
    );
}

export default CountriesContainer;