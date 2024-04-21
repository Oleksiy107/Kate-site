import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../static/LogoKate.jpeg";
function Header() {
  return (
    <div className="HeaderBox">
      <nav className="HeaderBox__HeaderNav">
        <img src={Logo} alt="Logo" className="HeaderNav__logo" />
        <ul className="HeaderNav__listNav">
          <li className="HeaderNav__listItem">
            <Link to="/" className="HeaderNav__link">
              Головна
            </Link>
          </li>
          <li className="HeaderNav__listItem">
            <Link to="/VoiceVolunteer" className="HeaderNav__link">
              Голос Волонтера
            </Link>
          </li>
          <li className="HeaderNav__listItem">
            <Link to="/UnitingGood" className="HeaderNav__link">
              Об'єднання Добра
            </Link>
          </li>
          <li className="HeaderNav__listItem">
            <Link to="/AboutProject" className="HeaderNav__link">
              Про проєкт
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Header;
