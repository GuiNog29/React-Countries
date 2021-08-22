import Item from './Item';

export default function Country({
  children: country = null,
  onCountryClick = null,
  isVisited = false,
}) {
  if (!country) {
    return (
      <div className="text-center mt-2">
        <span className="bg-red-300 rounded-md p-1 ">
          It was not possible to render the country
        </span>
      </div>
    );
  }

  const { flag, name, capital, region, population, area, id } = country;
  const demographicDensity = population / area;

  function handleCountryClick() {
    if (onCountryClick) {
      onCountryClick(id);
    }
  }

  const formatedArea = area !== null ? area.toLocaleString("PT") : 0

  const isVisitedClassName = isVisited ? 'bg-green-200 shadow-2xl' : '';

  return (
    <div
      className={`border p-3 m-3 flex flex-none items-center space-x-2 shadow-md rounded-md cursor-pointer hover:shadow-xl ${isVisitedClassName}`}
      onClick={handleCountryClick}
    >
      <img className="w-48" src={flag} alt={name} />
      <ul>
        <li>
          <Item label="Name">{name}</Item>
        </li>
        <li>
          <Item label="Capital">{capital}</Item>
        </li>
        <li>
          <Item label="Reagion">{region}</Item>
        </li>
        <li>
          <Item label="Population">{population.toLocaleString("PT")}</Item>
        </li>
        <li>
          <Item label="Area">{formatedArea}m2</Item>
        </li>
        <li>
          <Item label="Demographic Density">{demographicDensity.toLocaleString("PT")}</Item>
        </li>
      </ul>
    </div>
  );
}
