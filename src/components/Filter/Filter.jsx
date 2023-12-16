import { FilterLabel } from "./FilterLabel.styled";

export const Filter = ({value, onChange}) => {
    return ( <div >
      <FilterLabel>
        Filter
        <input
          type="name"
          value={value}
          onChange={onChange}      
        />
      </FilterLabel>
    </div>
  );
}