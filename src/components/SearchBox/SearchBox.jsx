import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filters/slice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value)); 
  };

  return (
    <div className={s.SearchBox}>
      <label>
        Find contacts by name:
        <input type="text" value={filter} onChange={handleChange} />
      </label>
    </div>
  );
};

export default SearchBox;
