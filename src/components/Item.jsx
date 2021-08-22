export default function Item({ children: value = 'Value', label = 'Name' }) {
  return (
    <span>
      <strong>{label}: </strong>
      {value}
    </span>
  );
}
