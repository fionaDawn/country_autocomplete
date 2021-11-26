export const getCountries = () => fetch('http://localhost:3001/countries')
    .then(response => response.json())
    .then(data => data);