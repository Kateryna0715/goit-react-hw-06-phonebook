import { useDispatch, useSelector } from 'react-redux';
import CSS from './index.module.css';
import { setFilter } from '../../redux/filter/filterSlice';
import { getFilter } from '../../redux/selectors';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={CSS.filterContainer}>
      <label htmlFor="inputFilter" className={CSS.formLabel}>
        Find contacts by name
      </label>
      <input
        name="filter"
        type="text"
        className={CSS.input}
        id="inputFilter"
        value={filter}
        onChange={onChangeFilter}
      />
    </div>
  );
};

export default Filter;
