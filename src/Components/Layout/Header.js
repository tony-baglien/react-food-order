import { Fragment } from "react/cjs/react.production.min";

import HeaderCardButton from "./HeaderCardButton";

import classes from "./Header.module.css";
import mealsImage from "../../Assets/meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="table full  of delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;
