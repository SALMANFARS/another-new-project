import "./App.css";
import logo from "./assets/logo.png";
import global from "./assets/global.svg";

import kvadrat from "./assets/kvadrat.svg";

import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import scroll from "./assets/scroll.svg";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import img5 from "./assets/img5.png";
import img7 from "./assets/img7.png";
import img8 from "./assets/img8.png";
import ahsap from "./assets/ahsap.png";
import korfex from "./assets/korfex.png";
import imgGemaroy from "./assets/imgGemaroy.png";
import browser from "./assets/browser.png";
import img88 from "./assets/img8.png"
import img9 from "./assets/img9.png";
import img10 from "./assets/img10.png";

import iso from "./assets/ISO.svg";

import { BiLogoFacebook } from 'react-icons/bi'
import { BsYoutube } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6"
import {BiLogoTwitter} from "react-icons/bi"

import phone from "./assets/phone.svg";
import mail from "./assets/mail.svg";
import adress from "./assets/adress.svg"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { orange } from "@mui/material/colors";
import penta from "./assets/penta.png";

function App() {
  return (
    <div className="top border-[#E24413] border-[5px]">
      <div className="section1">
        <div className="conteiner">
          <div className="block1 flex items-center justify-around py-[]">
            <div className="logo py-[10px]">
              <img src={logo} alt="" />
            </div>
            <div className="itemsLang flex gap-5">
              <ul className="sm:hidden xl:flex justify-center gap-5 sm:text-[#E24413] xl:text-white  ">
                <li>Kurumsal</li>
                <li>Aktiviteler</li>
                <li>Projeler</li>
                <li>Haberler</li>
                <li>İnsan Kaynakları</li>
                <li className="xl:border-r-[1px] xl:border-gray-50 pr-[15px] ">İletişim</li>
              </ul>
              <div className="lang sm:w-[100px] text-white flex gap-2">
                <img src={global} alt="" className="sm:hidden md:flex" />
                <select
                  name=""
                  id=""
                  className="sm:h-[25px]  sm:mt-[50px] md:mt-[0]  bg-[#E24413] text-white"
                >
                  <option value="TR">TR</option>
                </select>
              </div>
            </div>
          </div>
          <div className="block2 sm:h-[350px] md:h-[100%]">
            <div className="arrowsTextBnt pl-[100px] sm:pt-[20px] md:pt-[150px] pb-[250px]">
              <div className="arrows flex gap-5">
                <div className="arrowRight    ">
                  <WestIcon
                    className="hover:text-[#E24413]"
                    fontSize="large"
                    color="disabled"
                  />
                </div>

                <div className="arrowsLeft ">
                  <EastIcon
                    fontSize="large"
                    color="disabled"
                    className="hover:text-[#E24413]"
                  />
                </div>
              </div>
              <div className="txts sm:text-[20px] md:text-[40px]">
                <h1>
                  Geleceğin <br />
                  İnşaası,
                  <span className="font-bold">
                    Çevre <br /> Dostu Adımlar.
                  </span>
                </h1>

                <p className="sm:text-[14px] md:text-[18px] py-[20px]">
                  Sürdürülebilirlik ilkesini benimseyerek, çevre dostu <br />
                  inşaat adımlarıyla geleceği inşa ediyoruz.
                </p>
              </div>
              <div className="btn py-[10px]">
                <button className=" flex items-center text-white sm:py-[5px] sm:px-[5px] md:py-[10px] md:px-[30px] bg-[#E24413]">
                  <p className="sm:text-xs md:text-[15px]">Projelerimiz</p>
                  <div className="strelka">
                    <KeyboardArrowRightIcon />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 justify-items-end scroll relative z-[1] bottom-14 mr-[5px] text-[#333333]">
          <p className="text-xs ml-[8px]">SCROLL</p>
          <img src={scroll} alt="" className="py-[5px] mr-[10px]" />
        </div>
      </div>

      <div className="sectons2 hidden">
        <div className="section2 pt-[80px]">
          <div className="conteiner">
            <div className="block2in1">
              <div className="blockCha1 flex gap-10 ">
                <div className="img w-[50%] ">
                  <img src={img4} alt="" />
                </div>

                <div className="txt">
                  <p className="bg-white relative z-[1] right-[180px] text-[40px] text-[#E24413] px-[50px] py-[10px]">
                    Geçmişten Geleceğe İnşa Gücü: <br />
                  </p>
                  <div className="txts ml-[80px]">
                    <p className="flex text-[38px]  font-bold text-[#E24413]">
                      1996'dan Beri KİNZA
                    </p>

                    <p className="flex  py-[10px] text-[#333333]">
                      1996 yılında İstanbul/Türkiye'de kurulan KINZA YAPI,{" "}
                      <br />
                      uluslararası inşaat sektöründe kısa sürede saygın bir yer{" "}
                      <br />
                      edinmiştir.
                    </p>

                    <p className="flex  py-[10px] text-[#333333]">
                      Geçmişten bugüne uzanan köklü deneyimi ve gelecek odaklı{" "}
                      <br />
                      yaklaşımıyla, müşterilerimize en yüksek kalitede hizmet
                      sunmaya <br /> ve çevreye değer katmaya adanmış bir yapı
                      şirketiyiz.
                    </p>

                    <button className="my-[20px] flex py-[10px] px-[30px] text-[#E24413] border-[#E24413] border-[1px]">
                      Bizi Tanıyın
                      <div className="strelka">
                        <KeyboardArrowRightIcon sx={{ color: orange[900] }} />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section2And2">
          <div className="conteiner">
            <div className="block3 grid grid-cols-2 items-center ">
              <div className="counters grid grid-cols-1 justify-items-center">
                <div className="counter1 py-[20px] border-gray-50 border-[1px] px-[36px]">
                  <p className="text-[60px] text-[#E24413]">+23</p>
                  <p className="text-gray-400">Yılların Tecrübesi</p>
                </div>

                <div className="counter1 py-[20px] border-gray-50 border-[1px] px-[32px]">
                  <p className="text-[50px] text-[#E24413]">3 Kıta</p>
                  <p className="text-gray-400">15 Ülke</p>
                </div>

                <div className="counter1 pt-[20px] pb-[60px] border-gray-50 border-[1px] px-[25px]">
                  <p className="text-[60px] text-[#E24413]">%80</p>
                  <p className="text-gray-400">Uluslararası Projeler</p>
                </div>
              </div>

              <div className="img  ">
                <img src={img3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section3 hidden pt-[50px] bg-[#1E1E1E]">
        <div className="conteinerAnother">
          <div className="block3 grid grid-cols-2 gap-10">
            <div className="left ml-[50px] mt-[100px]">
              <div className="img ">
                <img src={img5} alt="" />
              </div>
            </div>
            <div className="right mt-[80px]">
              <p className="text-[#E24413] text-[36px] font-light pt-[20px]">
                KİNZA Yapı
                <b className="text-[#de9d89] font-medium"> Projeleri</b>
              </p>
              <div className="arrows flex gap-5 py-[5px]">
                <div className="arrowRight    ">
                  <WestIcon
                    className="hover:text-[#E24413]"
                    fontSize="large"
                    sx={{ color: "white" }}
                  />
                </div>

                <div className="arrowsLeft ">
                  <EastIcon
                    fontSize="large"
                    color="disabled"
                    className="hover:text-[#E24413]"
                    sx={{ color: "white" }}
                  />
                </div>
              </div>
              <div className="texts">
                <p className="text-white text-[30px] font-light py-[5px]">
                  Radisson Blu Hotel, <br />
                  <b>Havaalanı Abidjan</b>
                </p>

                <p className="text-[14px] py-[5px] text-[white] font-light">
                  Bu proje Abidjan, Fildişi Sahili'nde yer almaktadır. 261 oda
                  ve Genel <br /> Alanlar dahil olmak üzere 31.000 m2'lik
                  binanın beton ve MEP işleri hariç <br /> tüm ticari işleri.
                </p>
              </div>

              <div className="btn flex gap-5">
                <button className="my-[20px] flex py-[10px] px-[50px] text-white bg-[#E24413]">
                  <p>İncele </p>
                  <div className="strelka">
                    <KeyboardArrowRightIcon sx={{ color: "white" }} />
                  </div>
                </button>

                <button className="my-[20px] flex py-[10px] px-[30px] text-white border-[white] border-[1px]">
                  <p>Tüm Projeler</p>
                  <div className="strelka">
                    <KeyboardArrowRightIcon sx={{ color: "white" }} />
                  </div>
                </button>
              </div>

              <div className="sliders flex gap-10  pt-[20px]">
                <div className="img ">
                  <img src={img7} alt="" className="" />
                  <p className="bg-[#1E1E1E] text-white relative z-[1] bottom-10 mr-[180px] py-[10px]">
                    Marriott Hotel Kapadokya Nevşehir
                  </p>
                </div>
                <div className="img">
                  <img src={img8} alt="" className="" />
                  <p className=" text-[14px] bg-[#1E1E1E] text-[white] py-[10px] relative z-[1] bottom-10 mr-[0px] ">
                    Marriott Hotel Kapadokya Nevşehir
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section4 hidden">
        <div className="conteiner">
          <div className="block4 flex justify-center gap-[10px] ">
            <div className="LeftRight grid grid-cols-2 ">
              <div className="left4 py-[50px]">
                <div className="top1 text-center py-[20px]">
                  <div className="img flex justify-center">
                    <img src={ahsap} alt="" className="" />
                  </div>

                  <button className="flex m-auto  items-center gap-5 py-[10px] px-[40px] border-[#E24413] border-[1px] my-[20px] ">
                    <div className="browser   ">
                      <img src={browser} alt="" />
                    </div>
                    <div className="txt text-[10px]">
                      <p>Websitesini Ziyaret Et</p>
                    </div>
                  </button>
                </div>

                <div className="under1  pl-[20px]">
                  <p className="py-[20px] text-gray-400">Körfez</p>

                  <p className="text-[17px] text-gray-300">
                    1982 yılında kurulan AHŞAP Ürün <br /> Sanayi A.Ş. iç
                    dekorasyon <br />
                    taahhüt firmasıdır. İstanbul'daki <br /> fabrikamız
                    bünyesinde özel <br />
                    imalat sabit ve hareketli mobilya, <br /> dekoratif
                    aydınlatma, cam ve <br />
                    ahşap işleri yapmaktayız.
                  </p>
                </div>
              </div>

              <div className="right4">
                <div className="top2  py-[36px]">
                  <h1 className="flex ml-[30px]  text-[#E24413] text-[24px] py-[10px]">
                    AHŞAP
                  </h1>

                  <p className="flex justify-center text-[#333333] text-[17px]">
                    1982 yılında kurulan AHŞAP Ürün <br /> Sanayi A.Ş. iç
                    dekorasyon <br />
                    taahhüt firmasıdır. İstanbul'daki <br /> fabrikamız
                    bünyesinde özel <br />
                    imalat sabit ve hareketli mobilya, <br /> dekoratif
                    aydınlatma, cam ve <br />
                    ahşap işleri yapmaktayız.
                  </p>
                </div>
                <div className="under2 py-[20px] px-[20px]">
                  <img src={korfex} alt="" />
                </div>
              </div>
            </div>

            <div className="underArrow  ml-[150px] text-center py-[250px]">
              <p className="text-[50px] text-[#E24413] font-light ">
                İlerlemenin <br /> Gücü, Şirketler <br />
                <b>
                  Grubuyla Birn <br /> Adım Önde
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section5 hidden">
        <div className="conteiner">
          <div className="block6 flex justify-around">
            <div className="left">
              <p className="text-[48px] text-[#E24413] font-light">
                Bizden <b>Haberler</b>
              </p>
            </div>

            <div className="right">
              <button className="my-[20px] flex py-[10px] px-[50px] text-[#E24413] border-[#E24413] border-[1px]">
                <p>Tümünü Gör </p>
                <div className="strelka">
                  <KeyboardArrowRightIcon sx={{ color: "white" }} />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="block6">
          <div className="sliders flex gap-14 py-[20px]">
            <div className="img1 ml-[50px]">
              <img src={img88} alt="" />
              <div className="flex items-center justify-center gap-5 relative z-[3] bottom-[100px] right-10 text-[#333333] bg-[#F1F1F1]  border-white border-[10px] hover:bg-[#E24413] hover:text-white   ">
                <div className="txt">
                  <p className="text-[19px]  font-light">
                    Mimari Harikalar: Dünyanın En <br /> Etkileyici İnşaat
                    Projeleri Ve Yapıları
                  </p>
                </div>
                <div className="btn">
                  <button className="my-[20px] flex py-[30px] px-[30px] text-#333333 border-[#333333] border-[1px] hover:bg-[#de9d89] hove:border-[0px] ">
                    <p>İncele</p>
                    <div className="strelka">
                      <KeyboardArrowRightIcon sx={{ color: "#333333" }} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="img2">
              <img src={img9} alt="" />
              <div className="flex items-center justify-center gap-5 relative z-[3] bottom-[100px] right-10 text-[#333333] bg-[#F1F1F1]  border-white border-[10px] hover:bg-[#E24413] hover:text-white   ">
                <div className="txt">
                  <p className="text-[19px]  font-light">
                    Mimari Harikalar: Dünyanın En <br /> Etkileyici İnşaat
                    Projeleri Ve Yapıları
                  </p>
                </div>
                <div className="btn">
                  <button className="my-[20px] flex py-[30px] px-[30px] text-#333333 border-[#333333] border-[1px] hover:bg-[#de9d89] hove:border-[0px] ">
                    <p>İncele</p>
                    <div className="strelka">
                      <KeyboardArrowRightIcon sx={{ color: "#333333" }} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="img3">
              <img src={img10} alt="" />
              <div className="flex items-center justify-center gap-5 relative z-[3] bottom-[100px] right-10 py-[30px]   text-[#333333] bg-[#F1F1F1]  border-white border-[10px] hover:bg-[#E24413] hover:text-white   ">
                <div className="txt">
                  <p className="text-[19px]  font-light">
                    Mimari Harikalar: Dünyanın En <br /> Etkileyici İnşaat
                    Projeleri Ve Yapıları
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section6 hidden bg-[#1E1E1E]">
        <div className="block7 flex justify-around py-[40px]">
          <div className="isoTexts flex gap-10">
            <div className="isoText py-[20px] px-[20px] border-[1px] border-[#ffffff48] hover:bg-[#E24413]">
              <div className="img">
                <img src={iso} alt="" />
              </div>

              <div className="txt text-white ">
                <p className="text-[16px] text-center">9001:2015</p>
              </div>
            </div>

            <div className="isoText py-[20px] px-[20px] border-[1px] border-[#ffffff48] hover:bg-[#E24413]">
              <div className="img">
                <img src={iso} alt="" />
              </div>

              <div className="txt text-white ">
                <p className="text-[16px] text-center">9001:2015</p>
              </div>
            </div>

            <div className="isoText py-[20px] px-[20px] border-[1px] border-[#ffffff48] hover:bg-[#E24413]">
              <div className="img ">
                <img src={iso} alt="" />
              </div>

              <div className="txt text-white ">
                <p className="text-[16px] text-center">9001:2015</p>
              </div>
            </div>
          </div>

          <div className="txtBig text-right pr-[80px] pt-[10px]">
            <p className="text-[#E24413] text-[38px] font-light">
              Kalitede Belgeli, <br />{" "}
              <b className="font-medium">Güvenle İnşa Ediyoruz</b>
            </p>
          </div>
        </div>
      </div>

      <div className="footer hidden  bg-[#1B1B1B] py-[50px]">
        <div className="blocks flex justify-center gap-10  ">
          <div className="blockCha1">
            <ul className="text-white ">
              <p className="text-[22px] hover:text-[#E24413]">Kurumsal</p>
              <li className="py-[5px] text-[17px] hover:text-[#E24413]">
                Hakkımızda
              </li>
              <li className="py-[2px] text-[17px] hover:text-[#E24413]">
                Misyon Vizyon
              </li>
              <li className="py-[2px] text-[17px] hover:text-[#E24413]">
                Multipurpose Fields
              </li>
              <li className="py-[2px] text-[17px] hover:text-[#E24413]">
                Tennis Courts
              </li>
            </ul>
          </div>

          <div className="blockCha1">
            <ul className="text-white ">
              <p className="text-[22px] hover:text-[#E24413]">Projeler</p>
              <li className="py-[2px] text-[17px] hover:text-[#E24413]">
                Radisson Blu Hotel
              </li>
              <li className="py-[2px] text-[17px] hover:text-[#E24413]">
                Marriott Hotel Kapadokya
              </li>
              <li className="py-[2px] text-[17px] hover:text-[#E24413]">
                Mangane Apart Rezidans
              </li>
              <li className="py-[2px] text-[17px] hover:text-[#E24413]">
                Marriott Hotel Kapadokya
              </li>
            </ul>
          </div>

          <div className="img">
            <img src={logo} alt="" />
            <div className="social flex gap-2 py-[50px]">
              <div className="facebook ">
                <BiLogoFacebook className="text-gray-200 text-[24px] py-[5px] px-[5px] bg-[#939598] hover:bg-[#E24413] hover:text-white" />
              </div>
              <div className="facebook ">
                <BsYoutube className="text-gray-200 text-[24px] py-[5px] px-[5px] bg-[#939598] hover:bg-[#E24413] hover:text-white" />
              </div>
              <div className="facebook ">
                <FaLinkedinIn className="text-gray-200 text-[24px] py-[5px] px-[5px] bg-[#939598] hover:bg-[#E24413] hover:text-white" />
              </div>
              <div className="facebook ">
                <BiLogoTwitter className="text-gray-200 text-[24px] py-[5px] px-[5px] bg-[#939598] hover:bg-[#E24413] hover:text-white" />
              </div>
            </div>
          </div>

          <div className="blockCha1">
            <ul className="text-white ">
              <p className="text-[22px] hover:text-[#E24413]">Kurumsal</p>
              <li className="py-[5px] text-[17px] hover:text-[#E24413]">
                Hakkımızda
              </li>
              <li className="py-[2px] text-[17px] hover:text-[#E24413]">
                Misyon Vizyon
              </li>
              <li className="py-[2px] text-[17px] hover:text-[#E24413]">
                Multipurpose Fields
              </li>
              <li className="py-[2px] text-[17px] hover:text-[#E24413]">
                Tennis Courts
              </li>
            </ul>
          </div>

          <div className="blockCha1">
            <ul className="text-white ">
              <p className="text-[22px] hover:text-[#E24413]">Projeler</p>
              <li className="py-[2px] text-[17px] hover:text-[#E24413]">
                Radisson Blu Hotel
              </li>
              <li className="py-[2px] text-[17px] hover:text-[#E24413]">
                Marriott Hotel Kapadokya
              </li>
              <li className="py-[2px] text-[17px] hover:text-[#E24413]">
                Mangane Apart Rezidans
              </li>
              <li className="py-[2px] text-[17px] hover:text-[#E24413]">
                Marriott Hotel Kapadokya
              </li>
            </ul>
          </div>
        </div>
        <hr className="w-[70%] m-auto text-[red] bg-black" />
        <div className="theAnd flex justify-center gap-10 py-[50px]">
          <div className="blockCha10 hover:border-[1px] hover:border-[#E24413] px-[20px]">
            <p className="text-[#E24413] text-[22px] font-medium py-[10px]">
              Merkez Ofis
            </p>
            <div className="iconsText flex items-center gap-5 text-white py-[5px]">
              <div className="icon">
                <img src={phone} alt="" />
              </div>
              <div className="text">
                <p>+90 (216) 466 43 54</p>
              </div>
            </div>

            <div className="iconsText flex items-center gap-5 text-white py-[5px]">
              <div className="icon">
                <img src={mail} alt="" />
              </div>
              <div className="text">
                <p>info@kinzayapi.com</p>
              </div>
            </div>

            <div className="iconsText flex items-center gap-5 text-white py-[5px]">
              <div className="icon">
                <img src={adress} alt="" />
              </div>
              <div className="text">
                <p>
                  Şerifali Mah. Kule Sk.
                  <br />
                  No:12/A 34775 Ümraniye
                  <br /> İstanbul/TÜRKİYE
                </p>
              </div>
            </div>
          </div>

          <div className="blockCha10 hover:border-[1px] hover:border-[#E24413] px-[20px]">
            <p className="text-[#E24413] text-[22px] font-medium py-[10px]">
              Merkez Ofis
            </p>
            <div className="iconsText flex items-center gap-5 text-white py-[5px]">
              <div className="icon">
                <img src={phone} alt="" />
              </div>
              <div className="text">
                <p>+90 (216) 466 43 54</p>
              </div>
            </div>

            <div className="iconsText flex items-center gap-5 text-white py-[5px]">
              <div className="icon">
                <img src={mail} alt="" />
              </div>
              <div className="text">
                <p>info@kinzayapi.com</p>
              </div>
            </div>

            <div className="iconsText flex items-center gap-5 text-white py-[5px]">
              <div className="icon">
                <img src={adress} alt="" />
              </div>
              <div className="text">
                <p>
                  Şerifali Mah. Kule Sk.
                  <br />
                  No:12/A 34775 Ümraniye
                  <br /> İstanbul/TÜRKİYE
                </p>
              </div>
            </div>
          </div>

          <div className="blockCha10 hover:border-[1px] hover:border-[#E24413] px-[20px]">
            <p className="text-[#E24413] text-[22px] font-medium py-[10px]">
              Merkez Ofis
            </p>
            <div className="iconsText flex items-center gap-5 text-white py-[5px]">
              <div className="icon">
                <img src={phone} alt="" />
              </div>
              <div className="text">
                <p>+90 (216) 466 43 54</p>
              </div>
            </div>

            <div className="iconsText flex items-center gap-5 text-white py-[5px]">
              <div className="icon">
                <img src={mail} alt="" />
              </div>
              <div className="text">
                <p>info@kinzayapi.com</p>
              </div>
            </div>

            <div className="iconsText flex items-center gap-5 text-white py-[5px]">
              <div className="icon">
                <img src={adress} alt="" />
              </div>
              <div className="text">
                <p>
                  Şerifali Mah. Kule Sk.
                  <br />
                  No:12/A 34775 Ümraniye
                  <br /> İstanbul/TÜRKİYE
                </p>
              </div>
            </div>
          </div>

          <div className="blockCha10  hover:border-[1px] hover:border-[#E24413] px-[20px]">
            <p className="text-[#E24413] text-[22px] font-medium py-[10px]">
              Merkez Ofis
            </p>
            <div className="iconsText flex items-center gap-5 text-white py-[5px]">
              <div className="icon">
                <img src={phone} alt="" />
              </div>
              <div className="text">
                <p>+90 (216) 466 43 54</p>
              </div>
            </div>

            <div className="iconsText flex items-center gap-5 text-white py-[5px]">
              <div className="icon">
                <img src={mail} alt="" />
              </div>
              <div className="text">
                <p>info@kinzayapi.com</p>
              </div>
            </div>

            <div className="iconsText flex items-center gap-5 text-white py-[5px]">
              <div className="icon">
                <img src={adress} alt="" />
              </div>
              <div className="text">
                <p>
                  Şerifali Mah. Kule Sk.
                  <br />
                  No:12/A 34775 Ümraniye
                  <br /> İstanbul/TÜRKİYE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="theAnd2 hidden bg-[#1E1E1E] py-[10px] flex justify-around items-center text-[#1E1E1E]">
        <div className="porag1">
          <p className="text-white text-[17px]">
            © 2023 Kinzayapi.com | Tüm Hakları Saklıdır.
          </p>
        </div>

        <div className="poragImg flex items-center gap-5">
          <div className="porag1">
            <p className="text-white text-[13px] font-light">
              WEB <br />
              TASARIM
            </p>
          </div>
          <div className="img">
            <img src={penta} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
