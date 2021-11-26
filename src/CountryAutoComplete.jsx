// import countries from './data/countries.json'
import AutoComplete from './components/AutoComplete';
import React from 'react';
import { getCountries } from './api/countries';

const CountryAutoComplete = () => {
    React.useEffect(() => {
        fetchCountries()
    }, [])

    const [countryList, setCountryList] = React.useState([])

    const fetchCountries = async () => {
        const countries = await getCountries()
        setCountryList(countries)
    }
    console.log(countryList)
    return <AutoComplete options={countryList} />
}

export default CountryAutoComplete;