import React from "react";
import classes from "./home.module.scss";
interface HomeProps {}

const Home: React.FC<HomeProps> = () => (
  <h1 className={classes.wrapper}>Home Component</h1>
);

export default Home;
