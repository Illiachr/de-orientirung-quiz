import OptListItem from '../optListItem';

const OptList = ({optData, selectedId, onSelect}) => {
  return (
    <ul>
      {
        optData.options.map(({text, label}, i) => (
          <OptListItem 
            key={`opt${i}`}
            optName={`opt-${label}`}
            optId={`opt-${label}`}
            optText={text}
            checked={selectedId === `opt-${label}`}
            onChange={onSelect}
            data-label={label}
          />
        ))
      }
    </ul>
  );
};

export default OptList;

