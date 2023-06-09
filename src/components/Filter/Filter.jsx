import { useSelector, useDispatch } from 'react-redux';
import {
  InputFilter,
  FilterWrapper,
  ButtonFilter,
  Cross,
} from './Filter.styled';
import { filterChange, filterReset } from 'redux/actions';
import { getFilter } from 'redux/selectors';

const Filter = () => {
  const filterValue = useSelector(getFilter);

  const dispatch = useDispatch();

  const handleFilterChange = ({ target: { value } }) => {
    dispatch(filterChange(value));
  };

  const handleFilterReset = () => {
    dispatch(filterReset());
  };

  return (
    <FilterWrapper>
      <InputFilter
        type="text"
        name="filter"
        value={filterValue}
        onChange={handleFilterChange}
        placeholder="Search contact's name"
      />
      <ButtonFilter type="button" onClick={handleFilterReset}>
        <Cross></Cross>
      </ButtonFilter>
    </FilterWrapper>
  );
};

export default Filter;
