import { Link } from "react-router-dom";
import React from "react";
import Header from "../Header/Header";
import KateImg from "../../static/Kate.jpeg";
import FacebookramPhoto from "../../static/face.jpeg";

import InsImg from "../../static/inst.png";
import { AboutProject } from "../JSON/AboutProject";
import { useState } from "react";
function AboutUs() {
  const [itemArr, setItemArr] = useState(AboutProject);
  return (
    <>
      <Header />
      <div className="AboutContainer">
        <section className="AboutContainer__sectionAboutMe">
          <img src={KateImg} alt="Img" className="AboutContainer__myImg" />
          <section className="AboutContainer__aboutMe">
            <p className="AboutContainer__text AboutContainer__text--aboutMe">
              <b>Катерина Миронова</b> - студентка 4 курсу журналістики
              Таврійського національного університету імені В.І. Вернадського.
              Засновниця проєкту «Підтримка разом: волонтерство онлайн і більше»
            </p>
            <figure>
              <img
                src={FacebookramPhoto}
                alt="FaceBook"
                className="AboutContainer__img AboutContainer__img--faceBook"
              />

              <Link
                to="https://www.instagram.com/mironova.katerinaa?igsh=azRsam1qdDl3NGFo&utm_source=qr
                "
                target="_blank"
              >
                <img
                  src={InsImg}
                  alt="Instagram"
                  className="AboutContainer__img AboutContainer__img--ins"
                />
              </Link>
            </figure>
          </section>
        </section>
        <div>
          <h2 className="AboutContainer__title">
            Волонтерство - велика справа, яка не під силу кожному.
          </h2>
          <p className="AboutContainer__text">
            Це діяльність без якої сучасний свій неможливий. Люди, які починають
            займатися цією справою не лише обирають бути небайдужими до світу, а
            й жертовно змінюють свій звичний спосіб життя на зовсім інший. На
            той, який вже навряд чи колись можна буде повернути назад!
            <br />
            <br />
            Цей проєкт про людей, які зробили крок до змін, про волонтерську
            діяльність, яка досить часто є недооціненою суспільством. Про
            щоденну працю та боротьбу, про незламність та безкінечну віру в
            перемогу! Давайте спільно розглянемо, як ми можемо вносити позитивні
            зміни у нашому суспільстві.
            <br />
            <br />
            <dt>Для кого цей проєкт?</dt>
            <dd>◦ Для всіх небайдужих громадян</dd>
            <dd>◦ Для волонтерів</dd>
            <dd>◦ Для цивільних</dd>
            <dd>◦ Для військових</dd>
            <dd>Для всіх тих, хто свідомо підходить до допомоги!</dd>
            <br />
            {itemArr.map((item) => (
              <section>
                <p className="AboutContainer__text">{item.text1}</p>

                <p className="AboutContainer__text">{item.text2}</p>
              </section>
            ))}
            <section>
              <p className="AboutContainer__text AboutContainer__text--paddingTop">
                Якщо у вас є питання, пропозиції або бажання поділитися власним
                досвідом,ми завжди відкриті❤️
              </p>
            </section>
          </p>
        </div>
      </div>
    </>
  );
}
export default AboutUs;
