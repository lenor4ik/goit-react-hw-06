import { useDispatch } from "react-redux";

import css from "../SearchBox/SearchBox.module.css"
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const onChangeFilter = (event) => {
  dispatch(changeFilter(event.target.value));
  };
  return (
    <form onSubmit={(e)=> e.preventDefault()} >
      <span>Find contacts by name</span>
          <br />
      <input className={css.searchInput} type="text" name="topic"  onChange={onChangeFilter}/>
    </form>
  );
};

export default SearchBox
