import React from "react";
import Header from "./header";
import homeCss from "./home.module.scss";
import java from "../images/icons8-java-48.png";
import python from "../images/icons8-python-48.png";
import Problem from "./problem";
interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className={homeCss.main}>
      <Header />
      <div className={homeCss.section_title_space}>
        <div className={homeCss.section_title}>
          <div className={homeCss.section_icons}>
            <p className={homeCss.java}>
              <span>
                <img src={java} alt="404" width={30} height={30} />
              </span>
              Java
            </p>
            <p className={homeCss.python}>
              <span>
                <img src={python} alt="404" width={30} height={30} />
              </span>
              Python
            </p>
          </div>
        </div>
      </div>
      <Problem />

      <div className={homeCss.list}>
        <div className={homeCss.textfield}>
          <div className={homeCss.list_one}>
            <div className={homeCss.list_one_inner}>
              <h3>Java Help</h3>
              <p>Java Example Solution Code</p>
              <p>Java String Introduction (video)</p>
              <p>Java Substring v2 (video)</p>
              <p>Java String Equals and Loops</p>
              <p>Java String indexOf and Parsing</p>
              <p>Java If and Boolean Logic</p>
              <p>If Boolean Logic Example Solution Code 1-(video)</p>
              <p>If Boolean Logic Example Solution Code 2-(video)</p>
              <p>Java For and While Loops</p>
              <p>Java Arrays and Loops</p>
              <p>Java Map Introduction</p>
              <p>Java Map WordCount</p>
              <p>Java Functional Mapping</p>
              <p>Java Functional Filtering</p>
            </div>
          </div>
          <div className={homeCss.list_two}>
            <div className={homeCss.list_two_inner}>
              <h3>Misc Code Practice</h3>
              <p>Code Badges</p>
              <p>Introduction to Mod (video)</p>
              <p>MakeBricks problem and solution (video x 2)</p>
              <p>FizzBuzz the famous code interview question (video)</p>
            </div>
          </div>
        </div>
      </div>
      <p className={homeCss.text_copyright}>
        Copyright <span>Nick Parlante</span> 2022 - privacy
      </p>
    </div>
  );
};

export default Home;
