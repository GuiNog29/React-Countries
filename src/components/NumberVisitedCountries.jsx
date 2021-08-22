export default function NumberVisitedCountries({ children: visitedCountries }) {
  if (visitedCountries.length === 1) {
    return (
      <div>
        <h2 className="text-center font-semibold text-sm">
          {visitedCountries.length} Visited Country 
        </h2>
      </div>
    );
  } else {
    return (
      <div>
        <h2 className="text-center font-semibold  text-sm">
          {visitedCountries.length} Visited Countries 
        </h2>
      </div>
    );
  }
}
