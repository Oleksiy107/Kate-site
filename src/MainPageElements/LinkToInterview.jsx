import React, { useState } from "react";
import interviewBriefly from "../JSON/InterviewBriefly";
import { HashLink } from "react-router-hash-link";

export default function LinkToInterview() {
  const [interviewItems, setInterviewItems] = useState(
    interviewBriefly.slice(0, 5)
  );

  return (
    <div className="BrieflyInterviewBox">
      <h2 className="BrieflyInterviewBox__title"> Інтерв'ю з волонтерами</h2>
      <div className="BrieflyInterviewBox__wrapBlock">
        {interviewItems.map((item) => (
          <div key={item.id} className="BrieflyInterviewBox__interviewBlock">
            <img src={item.img} alt="" className="BrieflyInterviewBox__img" />
            <section className="BrieflyInterviewBox__innerWrap">
              <h2 className="BrieflyInterviewBox__title">{item.title}</h2>
              <p className="BrieflyInterviewBox__text">{item.textShort1}</p>
              <p className="BrieflyInterviewBox__text">{item.textShort2}</p>
              <p className="BrieflyInterviewBox__text">{item.textShort3}</p>
              <HashLink
                to={"/VoiceVolunteer#s"}
                className="BrieflyInterviewBox__link"
              >
                <button className="BrieflyInterviewBox__button-84">
                  Детально
                </button>
              </HashLink>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}
