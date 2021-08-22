import { useState } from 'react';
import Countries from '../components/Countries';
import Country from '../components/Country';
import Header from '../components/Header';
import Main from '../components/Main';
import TextInput from '../components/TextInput';
import { allCountries } from '../data/countries';
import NumberCountries from '../components/NumberCountriesLabel';
import NumberVisitedCountries from '../components/NumberVisitedCountries';

export default function ReactCountriesPage() {
  const [countryFilter, setCountryFilter] = useState('');
  const [visitedCountries, setVisitedCountries] = useState([]);

  function handleCountryFilterChange(countryFilter) {
    setCountryFilter(countryFilter);
  }

  function toggleVisitedCountry(countryId) {
    let newVisitedCountries = [...visitedCountries];

    const isCountryVisited = newVisitedCountries.indexOf(countryId) !== -1;

    if (isCountryVisited) {
      newVisitedCountries = newVisitedCountries.filter(visitedCountryId => {
        return visitedCountryId !== countryId;
      });
    } else {
      newVisitedCountries.push(countryId);
    }

    setVisitedCountries(newVisitedCountries);
  }

  const countryFilterLowerCase = countryFilter.trim().toLocaleLowerCase();

  const filteredCountries =
    countryFilterLowerCase.length >= 3
      ? allCountries.filter(({ nameLowerCase }) => {
          return nameLowerCase.includes(
            countryFilterLowerCase.toLocaleLowerCase()
          );
        })
      : allCountries;

  return (
    <>
      <Header>React - Countries</Header>

      <Main>
        <TextInput
          id="inputCountryFilter"
          labelDescrition="Inform the name of country (at least 3 characters)"
          inputValue={countryFilter}
          onInputChange={handleCountryFilterChange}
          autoFocus
        />

        <Countries>
          <NumberCountries>{filteredCountries}</NumberCountries>
          <NumberVisitedCountries>{visitedCountries}</NumberVisitedCountries>

          {filteredCountries.map(country => {
            const isVisited = visitedCountries.indexOf(country.id) !== -1;

            return (
              <Country
                isVisited={isVisited}
                onCountryClick={toggleVisitedCountry}
                key={country.id}
              >
                {country}
              </Country>
            );
          })}
        </Countries>
      </Main>
    </>
  );
}
