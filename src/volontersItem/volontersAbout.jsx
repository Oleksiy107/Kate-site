import React from "react";
import Volonters from "../JSON/VolontersData";
import { Link } from "react-router-dom";
import Vol1Img3 from "../../static/1Photo3.jpeg";
import Vol1Img4 from "../../static/1Photo4.jpeg";
import Vol1Img5 from "../../static/Vol1-5.jpeg";
import Vol3Img3 from "../../static/Vol3-3.jpeg";
import Vol3Img4 from "../../static/Vol3-4.jpeg";
import Vol4Img1 from "../../static/Vol4-1.jpeg";
import Vol4Img2 from "../../static/Vol4-2.jpeg";
import Vol4Img3 from "../../static/Vol4-3.jpeg";
import Vol4Img4 from "../../static/Vol4-4.jpeg";
import Vol4Img5 from "../../static/Vol4-5.jpeg";
import Vol2Img1 from "../../static/Vol2-1.jpeg";
import Vol2Img2 from "../../static/Vol2-2.jpeg";
import Vol2Img3 from "../../static/2Photo3.jpeg";
import Vol2Img4 from "../../static/2Photo4.jpeg";
import VolThreeOne from "../../static/volonterThreeeImgOne.jpeg";
import VolThreeFive from "../../static/volonterThreeeImgFive.jpeg";
import VolFourImgTwo from "../../static/VolFourImgTwo.jpeg";
import VolFourImgThree from "../../static/VolFourImgThree.jpeg";
import VolFourImgFour from "../../static/VolFourImgFour.jpeg";
export default function VolontersAbout() {
  return (
    <>
      <div className="VolonterBox">
        <h2 className="VolonterBox__volunteerTitle">Наші герої</h2>
        <div className="VolonterBox__wrapVolunteer">
          {Volonters.map((volunteer) => (
            <div key={volunteer.id} className="VolonterBox__innerVolunteer">
              <img
                className="VolonterBox__imgVolunteer"
                src={volunteer.img}
                alt={volunteer.name}
              />

              <figure>
                <h2 className="VolonterBox__name">{volunteer.name}</h2>
                <p className="VolonterBox__subText">{volunteer.subText}</p>

                <figcaption className="VolonterBox__messageWrap">
                  <Link target="_blank" to={volunteer.instagramLink}>
                    <img
                      className="VolonterBox__imgMessage"
                      src={volunteer.imgMessageInstagram}
                      alt="Instagram message"
                    />
                  </Link>

                  <Link target="_blank" to={volunteer.facebookLink}>
                    <img
                      className="VolonterBox__imgMessage-imgFacebook"
                      src={volunteer.imgMessageFacebook}
                      alt="Facebook message"
                    />
                  </Link>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>

        <div className="VolonterBox__fundraisingWrap">
          <h2 className="VolonterBox__title">Підтримайте волонтерів</h2>
          <p className="VolonterBox__description">
            Підтримайте волонтерів, які допомагають на фронті, донатом можна за
            посиланнями.
          </p>
          <div className="VolonterBox__linkDescription">
            <Link
              target="_blank"
              className="VolonterBox__fundraising-btn"
              to="https://send.monobank.ua/jar/PhnbTJ2fG"
            >
              <h2 className="VolonterBox__title VolonterBox__title--help">
                Підтримати Артема
              </h2>
            </Link>
            <a
              href="https://send.monobank.ua/jar/3ZCNaUe5Cp?fbclid=PAZXh0bgNhZW0BMQABpu6nLcxkH0bbjMbdbPzORMLG7Fn5_d1frgmumkPnRhL_r48BI6MyAyWbFw_aem_AcT_D7TfektBxnTK1WwxmEb-2UL86tKotPnk33lGCHk56PCLcCRR8BaJYck8yZPb4Fg"
              target="_blank"
              className="VolonterBox__fundraising-btn"
            >
              <h2 className="VolonterBox__title  VolonterBox__title--help">
                Підтримати Вікторію
              </h2>
            </a>

            <a
              href="https://send.monobank.ua/jar/7ycjQZYnjV?fbclid=PAZXh0bgNhZW0BMQABpkgrjhQgxxA_Xbsdwc_CN2Xqn65Ti4yqfZBLp3aEefcPZ84-fcAvVbeEbA_aem_AcSqZEnCuponEeVGB6pzLR2u79_Fw8IVDjWqMdQLpR2O4LdCmpPwi3dHyq94uOU9488"
              className="VolonterBox__fundraising-btn"
              target="_blank"
            >
              <h2 className="VolonterBox__title  VolonterBox__title--help">
                Підтримати Аню{" "}
              </h2>
            </a>
          </div>
        </div>
        <div className="VolonterBox__wrapReport">
          <h2 className="VolonterBox__title">Досягнення наших героїв</h2>
          <div className="VolonterBox__reportImg reportImg">
            <figure className="VolonterBox__wrapImg">
              <figcaption>
                <h2>Артем:</h2>
              </figcaption>
              <div className="reportImg__sectionImg">
                <img src={Vol1Img4} alt="Volunteer Photo 4" />
                <img src={Vol1Img3} alt="Volunteer Photo 3" />
                <img src={Vol1Img5} alt="Volunteer Photo 4" />
              </div>
            </figure>
            <figure className="VolonterBox__wrapImg">
              <figcaption>
                <h2>Вікторія</h2>
              </figcaption>
              <div className="reportImg__sectionImg">
                <img src={Vol2Img1} alt="Volunteer Photo 21" />
                <img src={Vol2Img2} alt="Volunteer Photo 22" />
                <img src={Vol2Img3} alt="Volunteer Photo 23" />
                <img src={Vol2Img4} alt="Volunteer Photo 24" />
              </div>
            </figure>

            <figure className="VolonterBox__wrapImg">
              <figcaption>
                {" "}
                <h2>Ірма:</h2>
              </figcaption>
              <div className="reportImg__sectionImg">
                <img src={VolThreeFive} alt="Volunteer Photo 23" />
                <img src={VolThreeOne} alt="Volunteer Photo 3" />
                <img src={Vol3Img3} alt="Volunteer Photo 23" />
                <img src={Vol3Img4} alt="Volunteer Photo 23" />
              </div>
            </figure>
            <figure className="VolonterBox__wrapImg">
              <figcaption>
                <h2>Анна</h2>
              </figcaption>
              <div className="reportImg__sectionImg">
                <img src={Vol4Img5} alt="Volunteer Photo 21" />
                <img src={Vol4Img4} alt="Volunteer Photo 22" />
                <img src={Vol4Img3} alt="Volunteer Photo 21" />
                <img src={Vol4Img2} alt="Volunteer Photo 24" />
                <img src={Vol4Img1} alt="Volunteer Photo 21" />
                <img src={VolFourImgTwo} alt="Volunteer Photo 22" />
                <img src={VolFourImgThree} alt="Volunteer Photo 23" />
                <img src={VolFourImgFour} alt="Volunteer Photo 24" />
              </div>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}
