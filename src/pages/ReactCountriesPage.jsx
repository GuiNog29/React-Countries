import { useState } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import TextInput from '../components/TextInput';
import { allCountries } from '../data/countries';

export default function ReactCountriesPage() {
  const [countryFilter, setCountryFilter] = useState('Argentina');

  function handleCountryFilterChange(countryFilter) {
    setCountryFilter(countryFilter);
  }

  const countryFilterLowerCase = countryFilter.toLocaleLowerCase();

  const filterCountries =
    countryFilterLowerCase.length >= 3
      ? allCountries.filter(({ nameLowerCase }) => {
          return nameLowerCase.includes(
            countryFilterLowerCase.toLocaleLowerCase()
          );
        })
      : allCountries;

  console.log(filterCountries);

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
      </Main>
    </>
  );
}
