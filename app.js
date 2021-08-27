const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}

loadCountries();

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries')
    countries.forEach(country => {
        const div = document.createElement('div')
        div.classList.add('countries')
        div.innerHTML = `
        <h2>${country.name}</h2>
        <p>${country.capital}</p>
        <button onClick="loadCountryByName('${country.name}')">Details</button>
        `;
        countriesDiv.appendChild(div);
    })
}

const loadCountryByName = name => {
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(res => res.json())
        .then(data => countryDetail(data[0]));
};

const countryDetail = country => {
    const countryDiv = document.getElementById('country-detail')
    countryDiv.innerHTML = `
    <img width="500px" src="${country.flag}">
    <h1>Country Name: ${country.name}</h1>
    <h3>Language: ${country.nativeName}</h3>
    <h4>Population: ${country.population}</h4>
    <h4>Region: ${country.region}</h4>
    `
}