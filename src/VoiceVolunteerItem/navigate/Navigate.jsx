import React from "react";
import { HashLink } from "react-router-hash-link";
export default function Navigate() {
  return (
    <div className="navigateWrap">
      <nav>
        <ol className="navigateWrap__list">
          <HashLink to={"#section1"}>
            <li className="navigateWrap__item" style={{ color: "black" }}>
              Історія I
            </li>
          </HashLink>
          <HashLink to={"#section2"}>
            <li className="navigateWrap__item" style={{ color: "black" }}>
              Історія ІІ
            </li>
          </HashLink>
          <HashLink to={"#section3"}>
            <li className="navigateWrap__item" style={{ color: "black" }}>
              Історія ІІІ
            </li>
          </HashLink>
          <HashLink to={"#section4"}>
            <li className="navigateWrap__item" style={{ color: "black" }}>
              Історія ІV
            </li>
          </HashLink>
          {/* Additional list items */}
        </ol>
      </nav>
    </div>
  );
}
