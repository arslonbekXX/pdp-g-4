import React from "react";
import { useParams } from "react-router-dom";
import { http } from "../../services";
import classes from "./home.module.scss";
interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const { languageID } = useParams();

  React.useEffect(() => {
    http
      .get(`/section/by-language-id/${languageID}`, {
        headers: {
          Authorization:
            "Bearer " +
            "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjNAZG9tYWluLmNvbSIsImlhdCI6MTY2NjA3NDg3MiwiZXhwIjoxNjY2MTQ2ODcyfQ.ubjXOEvz1l_qQaevHi8yI2DqaljRkrN9RUlNDnCL8Gn3fMxVqFD8nD_R_60rE5P4lakNxX8V0mWq1NqO3MspKg",
        },
      })
      .then((data) => {
        console.log("data = ", data);
      });
  }, []);
  return <h1 className={classes.wrapper}>Language ID = {languageID}</h1>;
};

export default Home;
