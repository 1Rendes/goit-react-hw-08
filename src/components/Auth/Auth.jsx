import { NavLink } from "react-router-dom";
import css from "./Auth.module.css";

const Auth = () => {
  return (
    <div className={css.authLinks}>
      <NavLink to="/login" className={css.link}>
        Log in
      </NavLink>
      <NavLink to="/register" className={css.link}>
        Sign up
      </NavLink>
    </div>
  );
};

export default Auth;
