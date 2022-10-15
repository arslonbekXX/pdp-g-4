import React from "react";
import homeCss from "./home.module.scss";
import coding from "../images/Coding.png";
import bat from "../images/BAT.png";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className={homeCss.header}>
      <div className={homeCss.header_elements}>
        <div className={homeCss.logo}>
          <span>
            <img src={coding} alt="404" width={113} height={14} />
          </span>
          <span>
            <img src={bat} alt="404" width={60} height={14} />
          </span>
          <p>Code practise</p>
        </div>
        <div className={homeCss.header_links}>
          <p>About</p>
          <p>Help</p>
          <p>Code</p>
          <p>help + videos</p>
          <p>Done</p>
          <p>Prefs</p>
        </div>

        <div className={homeCss.authentications_links}>
          <div className={homeCss.signIn_btn}>
            <button><Link to='/login'>Sign In</Link></button>
          </div>
          <div>
            <div className={homeCss.signUp_btn}>
              <button><Link to='/register'>Sign Up</Link></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
