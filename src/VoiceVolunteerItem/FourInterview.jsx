import React, { useState } from "react";
import { NoteInterview } from "../JSON/NoteInterview";
import VoloterFour from "../../static/VoloterFour.jpeg";
export default function FourInterview() {
  const [itemFourInterview, setItemFourInterview] = useState(NoteInterview);

  return (
    <>
      {itemFourInterview.map((item, index) => (
        <div className="InterViewBox" key={index} id="section4">
          <section className="InterViewBox__wrapTitle">
            <h2 className="InterViewBox__title">{item.title}</h2>
            <img src={VoloterFour} alt="" className="InterViewBox__img" />
          </section>
          <p className="InterViewBox__text">
            <i>{item.aboutMe}</i>
          </p>
          <p className="InterViewBox__text"> {item.quistion1}</p>
          <p className="InterViewBox__text">
            - Дехто думає, що <b>загибель</b> мого тата вплинула якось на те, що
            я почала займатися волонтерською діяльністю, але це взагалі не так.
            Можливо вона закріпила в мені цю ідею, але точно не вплинула.
            Оскільки ще до цього, всі збереження, які я мала на початку
            повномасштабного вторгнення були адресовані виключно на допомогу
            людям. Перший час ми всі були на якомусь піднесені та абсолютно не
            думали про себе. Насправді я, як і більшість інших людей, у такі
            моменти не могла конструктивно розподілити кошти. Зараз розумію, що
            віддала велику частину своїх грошей туди, де можна було цього не
            робити, або ж можна було б допомогти комусь іншому. Але все одно
            факт залишається фактом: усі люди тоді допомагали не роздумуючи.
            Коли вже свої кошти закінчились, до мене надійшло прохання від
            одного військового на запит вартістю 20 тисяч гривень. Це була
            космічна сума на той момент. Я не знала, що робити. На свій день
            народження чомусь вирішую виставити карту в інстаграм із підписом:
            «Якщо маєте бажання привітати мене - можете задонатити, а я всі ці
            кошти направлю на допомогу нашим військовим». Памʼятаю, так плакала,
            коли виставляла цю історію, бо подумала: «Я така дурна, хто кине
            мені хоч якісь гроші?» Тоді мій особистий профіль виглядав абсолютно
            несерйозно, але за ніч накидали 13 тисяч гривень. Я була в
            максимальному шоці. Продовживши збір назбирала необхідну суму і з
            тих пір відчула, що маю ресурс для цієї сфери. У мене були думки, що
            можливо для багатьох стало тригером те, що я втратила батька на
            війні. Але так чи інакше люди довірились, мабуть, це і стало
            натхненням. Також я допомагала багатьом волонтерам закривати
            допоміжні збори. Отож таким методом накопичення отримала ще більшу
            аудиторію.{" "}
          </p>

          <p className="InterViewBox__text"> {item.quistion2}</p>
          <p className="InterViewBox__text"> {item.answer2}</p>

          <p className="InterViewBox__text"> {item.quistion3}</p>
          <p className="InterViewBox__text"> {item.answer3}</p>

          <p className="InterViewBox__text"> {item.quistion4}</p>
          <p className="InterViewBox__text"> {item.answer4}</p>

          <p className="InterViewBox__text"> {item.quistion5}</p>
          <p className="InterViewBox__text"> {item.answer5}</p>

          <p className="InterViewBox__text"> {item.quistion6}</p>
          <p className="InterViewBox__text"> {item.answer6}</p>

          <p className="InterViewBox__text"> {item.quistion7}</p>
          <p className="InterViewBox__text"> {item.answer7}</p>

          <p className="InterViewBox__text"> {item.quistion8}</p>
          <p className="InterViewBox__text"> {item.answer8}</p>

          <p className="InterViewBox__text"> {item.quistion9}</p>
          <p className="InterViewBox__text"> {item.answer9}</p>

          <p className="InterViewBox__text"> {item.quistion10}</p>
          <p className="InterViewBox__text"> {item.answer10}</p>

          <p className="InterViewBox__text"> {item.quistion11}</p>
          <p className="InterViewBox__text"> {item.answer11}</p>

          <p className="InterViewBox__text"> {item.quistion12}</p>
          <p className="InterViewBox__text"> {item.answer12}</p>

          <p className="InterViewBox__text"> {item.quistion13}</p>
          <p className="InterViewBox__text"> {item.answer13}</p>

          <p className="InterViewBox__text"> {item.quistion14}</p>
          <p className="InterViewBox__text"> {item.answer14}</p>
          <p className="InterViewBox__text"> {item.quistion15}</p>
          <p className="InterViewBox__text"> {item.answer15}</p>
          <br />
          <p className="InterViewBox__text">
            {" "}
            * Батько Ані загинув 23 березня 2022 року. Віталій Ткачук -
            фастівчанин, який одним із перших записався до батальйону
            добровольців та пішов захищати свою країну, своїх дітей.
          </p>
          <section className="InterViewBox__imgFather">
            <img
              src={item.Father}
              alt=""
              className="InterViewBox__imgSection"
            />
            <img
              src={item.FatherAbout}
              alt=""
              className="InterViewBox__imgSection"
            />
          </section>
          <p className="InterViewBox__fatherText">{item.messageAnna}</p>
        </div>
      ))}
    </>
  );
}
