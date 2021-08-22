export default function NumberCountriesLabel({ children: countries }) {
  if (countries.length === 1) {
    return (
      <div>
        <h2 className="text-center font-semibold">
          {countries.length} Country
        </h2>
      </div>
    );
  } else {
    return (
      <div>
        <h2 className="text-center font-semibold">
          {countries.length} Countries
        </h2>
      </div>
    );
  }
}
