import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import s from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  return (
    <input
      type="text"
      placeholder="Search"
      value={filter}
      onChange={(e) => dispatch(changeFilter(e.target.value))}
      className={s.input}
    />
  );
}
