export default function OptListItem({optName, optId, optText, checked, selectedOpt}) {
  return (
    <li>
      <input
        type="radio"
        name={optName}
        id={optId}
        checked={checked}
        onChange={() => {selectedOpt = optId;}}
      />
      <label htmlFor={optId}>{optText}</label>
    </li>
  );
}