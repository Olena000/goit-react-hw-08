import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={s.wrapper}>
      <p className={s.userName}>Welcome, {user.name}!</p>
      <button type="button" onClick={() => dispatch(logoutThunk())}>
        Logout
      </button>
    </div>
  );
}
