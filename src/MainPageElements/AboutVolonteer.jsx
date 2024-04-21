import React, { useState } from "react";
import { HowToWillVolonteer } from "../JSON/HowToWillVolonteer";
import { whoIsVolonteer } from "../JSON/WhoISVolonteer";

export default function AboutVolonteer() {
  const [items, setItems] = useState(whoIsVolonteer);
  const [items2, setItems2] = useState(HowToWillVolonteer);
  return (
    <>
      {items2.map((item, index) => (
        <article className="WrapTextVolonteer" key={index}>
          <h2 className="WrapTextVolonteer__title">{item.title}</h2>
          <p className="WrapTextVolonteer__text"> {item.text1}</p>
          <p className="WrapTextVolonteer__text"> {item.text2}</p>
          <p className="WrapTextVolonteer__text"> {item.text3}</p>
          <p className="WrapTextVolonteer__text"> {item.text4}</p>
        </article>
      ))}
      {items.map((item, index) => (
        <article className="WrapTextVolonteer" key={index}>
          <h2 className="WrapTextVolonteer__title">{item.title}</h2>
          <p className="WrapTextVolonteer__text"> {item.textOne}</p>
          <p className="WrapTextVolonteer__text"> {item.textTwo}</p>
          <p className="WrapTextVolonteer__text"> {item.textThree}</p>
        </article>
      ))}
    </>
  );
}
