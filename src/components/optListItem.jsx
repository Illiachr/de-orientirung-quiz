export default function OptListItem({optName, optId, optText, checked, onChange}) {
  return (
    <li>
      <input
        type="radio"
        name={optName}
        id={optId}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={optId}>{optText}</label>
    </li>
  );
}