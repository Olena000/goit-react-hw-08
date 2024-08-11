import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
import { useState } from "react";

export default function SearchBox() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    dispatch(changeFilter(newValue));
  };

  return (
    <div className={s.searchBox}>
      <label>Find contacts by name</label>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}
