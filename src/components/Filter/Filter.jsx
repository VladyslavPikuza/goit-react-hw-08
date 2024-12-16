import { useDispatch, useSelector } from 'react-redux';
import { setFilter, selectFilter } from '../../redux/filters/slice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={css.filterContainer}>
      <label htmlFor="filter" className={css.filterLabel}>
        Поиск по имени:
      </label>
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Введите имя для поиска"
        className={css.filterInput}
      />
    </div>
  );
};

export default Filter;
