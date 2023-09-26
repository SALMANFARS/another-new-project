import React from 'react';
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
import img8um from "./assets/img8um.png"
import iso from "./assets/ISO.svg";

import { BiLogoFacebook } from 'react-icons/bi'
import { BsYoutube } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6"
import { BiLogoTwitter } from "react-icons/bi"
import MenuIcon from "@mui/icons-material/Menu";

import phone from "./assets/phone.svg";
import mail from "./assets/mail.svg";
import adress from "./assets/adress.svg"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { orange } from "@mui/material/colors";
import penta from "./assets/penta.png";

import Swiper from "swiper/bundle";
import "swiper/css/bundle";

import CounterUp from './CounterUp';







function App() {
  return (
    <div className="top border-[#E24413] border-[5px]">
      <div className="section1 ">
        <div className="conteiner">
          <div className="block1 flex items-center justify-around py-[]">
            <div className="logo py-[10px]">
              <img src={logo} alt="" />
            </div>
            <div className="itemsLang sm:block md:flex gap-5 py-[10px] items-center">
              <div className="burger xl:hidden ">
                <MenuIcon className="sm:text-[#E24413]  md:text-white" />
              </div>
              <ul className="sm:hidden xl:flex justify-center gap-5 sm:text-[#E24413] xl:text-white  ">
                <li>Kurumsal</li>
                <li>Aktiviteler</li>
                <li>Projeler</li>
                <li>Haberler</li>
                <li>İnsan Kaynakları</li>
                <li className="xl:border-r-[1px] xl:border-gray-50 pr-[15px] ">
                  İletişim
                </li>
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
                <h1 className="font-light">
                  Geleceğin <br />
                  İnşaası,&nbsp;
                  <span className="font-bold">
                    Çevre <br /> Dostu Adımlar.
                  </span>
                </h1>

                <p className="sm:text-[14px] md:text-[12px] py-[20px] text-[#333333]">
                  Sürdürülebilirlik ilkesini benimseyerek, çevre dostu <br />
                  inşaat adımlarıyla geleceği inşa ediyoruz.
                </p>
              </div>
              <div className="btn py-[20px]">
                <button className=" flex items-center text-white sm:py-[5px] sm:px-[5px] md:py-[8px] md:px-[20px] bg-[#E24413]">
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

      <div className="sectons2  ">
        <div className="sec2 sm:pt-[20px] lg:pt-[80px]">
          <div className="conteiner">
            <div className="block2in1">
              <div className="blockCha1 sm:grid sm:grid-cols-1 lg:flex gap-10 ">
                <div className="img sm:w-[80%] sm:m-auto lg:w-[50%] lg:m-0  ">
                  <img src={img4} alt="" />
                </div>

                <div className="txt">
                  <p className="bg-white flex sm:justify-center lg:justify-normal lg:relative z-[1] right-[180px] sm:text-[28px] md:text-[40px] text-[#E24413] px-[50px] pt-[10px] font-light">
                    Geçmişten Geleceğe İnşa Gücü:
                  </p>
                  <div className="txts sm:text-center md:text-left  md:ml-[70px]">
                    <p className="flex sm:justify-center lg:justify-normal  sm:text-[36px] md:text-[38px]  font-bold text-[#E24413] ">
                      1996'dan Beri KİNZA
                    </p>

                    <p className="flex sm:justify-center lg:justify-normal  py-[10px] text-[#333333]">
                      1996 yılında İstanbul/Türkiye'de kurulan KINZA YAPI
                      <br />
                      uluslararası inşaat sektöründe kısa sürede saygın bir yer
                      <br />
                      edinmiştir.
                    </p>

                    <p className="flex sm:justify-center lg:justify-normal  py-[10px] text-[#333333]">
                      Geçmişten bugüne uzanan köklü deneyimi ve gelecek odaklı{" "}
                      <br />
                      yaklaşımıyla, müşterilerimize en yüksek kalitede hizmet
                      sunmaya <br /> ve çevreye değer katmaya adanmış bir yapı
                      şirketiyiz.
                    </p>

                    <button className="my-[20px] flex sm:ml-[35%] lg:ml-[0] py-[10px] px-[30px] text-[#E24413] border-[#E24413] border-[1px]">
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
            <div className="block3 sm:grid sm:grid-cols-1 lg:grid-cols-2 items-center ">
              <CounterUp />

              <div className="img  ">
                <img
                  src={img3}
                  alt=""
                  className="sm:w-[80%] m-auto lg:w-[100%] lg:m-[0]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section3 pt-[0px] bg-[#1E1E1E]">
        <div className="conteinerAnother">
          <div className="block3 sm:grid sm:grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="left  lg:ml-[50px] mt-[50px]">
              <div className="img ">
                <img src={img5} alt="" className="sm:hidden lg:flex" />
              </div>
            </div>
            <div className="right py-[10px] sm:grid grid-cols-2 lg:block sm:gap-5 sm:mt-[40px] lg:mt-[20px]">
              <div className="img">
                <img
                  src={img5}
                  alt=""
                  className="sm:pt-[10px]lg:pt-[0]sm:w-[100%] sm:m-auto lg:hidden lg:m-[0]"
                />
              </div>
              <div className="TxtArrBtn">
                <div className=" text-[#E24413] sm:text-[18px] lg:text-[40px] font-light pt-[20px]">
                  <p>
                    KİNZA Yapı
                    <b className="text-gradient font-medium "> Projeleri</b>
                  </p>
                </div>
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
                  <p className="text-white sm:text-[18px] md:text-[24px] font-light py-[5px]">
                    Radisson Blu Hotel, <br />
                    <b>Havaalanı Abidjan</b>
                  </p>

                  <p className="text-[14px] py-[5px] text-[white] font-light">
                    Bu proje Abidjan, Fildişi Sahili'nde yer almaktadır. 261 oda
                    ve Genel <br /> Alanlar dahil olmak üzere 31.000 m2'lik
                    binanın beton ve MEP işleri hariç <br /> tüm ticari işleri.
                  </p>
                </div>
                <div className="btn flex flex-wrap gap-5">
                  <button className="sm:my-[5px] lg:my-[20px] flex sm:py-[10px] lg:py-[10px] sm:px-[20px] lg:px-[30px] text-white bg-[#E24413]">
                    <p>İncele </p>
                    <div className="strelka">
                      <KeyboardArrowRightIcon sx={{ color: "white" }} />
                    </div>
                  </button>

                  <button className="sm:my-[5px] lg:my-[20px] flex sm:py-[10px] lg:py-[10px] sm:px-[20px] lg:px-[30px] text-white border-[white] border-[1px]">
                    <p>Tüm Projeler</p>
                    <div className="strelka">
                      <KeyboardArrowRightIcon sx={{ color: "white" }} />
                    </div>
                  </button>
                </div>
              </div>

              <div className="sliders pt-[20px]">
                <div className="imgs sm:hidden lg:flex justify-between gap-2">
                  <div className="img ">
                    <img src={img7} alt="" className="" />
                    <p className="bg-[#1E1E1E] text-[14px]  text-white relative z-[1] bottom-10 mr-[180px] py-[10px]">
                      Marriott Hotel Kapadokya Nevşehir
                    </p>
                  </div>
                  <div className="img">
                    <img src={img8um} alt="" className="" />
                    <p className=" text-[14px] bg-[#1E1E1E] text-[white] py-[10px] relative z-[1] bottom-10 mr-[0px] ">
                      Marriott Hotel Kapadokya Nevşehir
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sliders sm:pt-[10px] lg:hidden">
              <div className="imgs sm:flex sm:justify-center lg:hidden gap-10">
                <div className="img ">
                  <img src={img7} alt="" className="" />
                  <p className="bg-[#1E1E1E] text-[14px]  text-white relative z-[1] bottom-10 mr-[180px] py-[10px]">
                    Marriott Hotel Kapadokya Nevşehir
                  </p>
                </div>
                <div className="img">
                  <img src={img8um} alt="" className="" />
                  <p className=" text-[14px] bg-[#1E1E1E] text-[white] py-[10px] relative z-[1] bottom-10 mr-[0px] ">
                    Marriott Hotel Kapadokya Nevşehir
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section4 ">
        <div className="conteiner">
          <div className="block4 sm:block lg:flex justify-center gap-[10px] ">
            <div className="LeftRight sm:grid sm:grid-cols-1 lg:grid-cols-2">
              <div className="left4 sm:text-center lg:text-left py-[50px]">
                <div className="top1 text-center py-[20px]">
                  <div className="img flex justify-center">
                    <img src={ahsap} alt="" className="" />
                  </div>

                  <button className="lg:flex lg:m-auto  items-center gap-5 py-[10px] px-[40px] border-[#E24413] border-[1px] my-[20px] ">
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
                <div className="top2 sm:text-center lg:text-left  py-[36px]">
                  <h1 className="lg:flex lg:ml-[30px]  text-[#E24413] text-[24px] py-[10px]">
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
                <div className="under2 flex justify-center py-[20px] px-[20px]">
                  <img src={korfex} alt="" />
                </div>
              </div>
            </div>

            <div className=" underArrow  sm:ml-[0] lg:ml-[150px] text-center sm:py-[50px] lg:py-[250px]">
              <p className="sm:text-[24px] md:text-[36px] lg:text-[50px] text-[#E24413] font-light ">
                İlerlemenin <br /> Gücü, Şirketler <br />
                <b>
                  Grubuyla Birn <br /> Adım Önde
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section5 ">
        <div className="conteiner">
          <div className="block6 flex flex-wrap sm:justify-center gap-5 lg:justify-around">
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
          <div className="sliders sm:grid sm:grid-cols-1 sm:justify-items-center lg:flex gap-14 py-[20px]">
            <div className="img1 sm:px-[10px] sm:ml-[0] lg:px-[0] lg:ml-[50px]">
              <img src={img88} alt="" />
              <div className="flex items-center justify-center gap-5 lg:relative z-[3] bottom-[100px] right-10 text-[#333333] bg-[#F1F1F1]  border-white border-[10px] hover:bg-[#E24413] hover:text-white   ">
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
            <div className="img2 sm:px-[10px]">
              <img src={img9} alt="" />
              <div className="flex items-center justify-center gap-5 lg:relative z-[3] bottom-[100px] right-10 text-[#333333] bg-[#F1F1F1]  border-white border-[10px] hover:bg-[#E24413] hover:text-white   ">
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
              <div className="flex items-center justify-center gap-5 lg:relative z-[3] bottom-[100px] right-10 py-[30px]   text-[#333333] bg-[#F1F1F1]  border-white border-[10px] hover:bg-[#E24413] hover:text-white   ">
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

      <div className="section6  bg-[#1E1E1E]">
        <div className="block7 sm:grid sm:grid-cols-1 lg:flex justify-around py-[40px]">
          <div className="isoTexts grid grid-cols-3 gap-10">
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

      <div className="footer  bg-[#1B1B1B] py-[50px]">
        <div className="blocks flex flex-wrap justify-center gap-10  ">
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
        <div className="theAnd flex flex-wrap justify-center gap-10 py-[50px]">
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
      <div className="theAnd2 bg-[#1E1E1E] py-[10px] flex justify-around items-center text-[#1E1E1E]">
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
