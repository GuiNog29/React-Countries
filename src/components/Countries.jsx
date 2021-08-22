import Country from './Country';
import NumberCountries from './NumberCountriesLabel';

export default function Countries({
  children: countries = [],
  onCountryClick = null,
}) {
  return (
    <div className="border p-2 shadow-md">
      <NumberCountries>{countries}</NumberCountries>

      {countries.map(country => {
        return <Country onCountryClick={onCountryClick} key={country.id}>{country}</Country>;
      })}
    </div>
  );
}
