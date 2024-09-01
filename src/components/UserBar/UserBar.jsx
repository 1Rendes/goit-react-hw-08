import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import css from "./UserBar.module.css";

const UserBar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <div className={css.buttonDiv}>
      <button onClick={handleLogout} className={css.button}>
        Log out
      </button>
    </div>
  );
};

export default UserBar;
