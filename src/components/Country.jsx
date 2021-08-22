import Item from './Item';

export default function Country({
  children: country = null,
  onCountryClick = null,
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

  return (
    <div
      className="border p-3 m-3 flex flex-row items-center space-x-2 shadow-md rounded-md hover:shadow-2xl"
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
          <Item label="Population">{population}</Item>
        </li>
        <li>
          <Item label="Area">{area}</Item>
        </li>
        <li>
          <Item label="Demographic Density">{demographicDensity}</Item>
        </li>
      </ul>
    </div>
  );
}
