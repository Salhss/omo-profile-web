import { useEffect } from "react";
import banner from "../assets/images/dari-anak-negeri-fotor-bg-remover-2023083121553.png"
import productPhoto from "../assets/images/img_190611111654-removebg-preview.png";
import astrounot from "../assets/images/Gambar-Astronot-Kartun-4-fotor-bg-remover-2023083120541.png";
import astrounot2 from "../assets/images/Gambar-Astronot-Kartun-2-fotor-bg-remover-2023083120516.png";
import astrounot3 from "../assets/images/Gambar-Astronot-Kartun-1-removebg-preview.png";
import "../assets/css/hero.css";

export default function Hero() {
  return (
    <>
      <div id="home" className="relative background-hero w-full h-[700px] flex justify-center items-center">
        <img src={banner} alt="" className="absolute xs:w-[250px] xs:top-[90px] md:w-[350px] lg:w-[500px] xl:top-[100px]" data-aos="fade-down"/>
        <img
          src={productPhoto}
          alt="product-photo"
          className="absolute w-[1200px] top-[200px]"
          data-aos="fade-up"
        />
        <img
          src={astrounot}
          alt=""
          className="absolute animate-bounce xs:w-[150px] xs:top-[180px] xs:right-[10px] md:w-[200px] md:top-[200px] md:right-[20px] lg:top-[280px] lg:right-[100px] xl:w-[300px] xl:right-[300px] xl:top-[250px]"
          data-aos="fade-up"
          data-aos-duration="1000"
        />
        <img
          src={astrounot2}
          alt=""
          className="absolute w-[270px] xs:w-[180px] xs:right-0 xs:top-[300px] md:w-[230px] md:top-[400px] md:right-[50px] lg:top-[500px] lg:right-[150px] xl:w-[350px] xl:right-[250px]"
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
        />
        <img
          src={astrounot3}
          alt=""
          className="absolute xs:w-[130px] xs:top-[210px] xs:left-0 md:w-[170px] md:top-[270px] md:left-[30px] lg:w-[270px] lg:top-[300px] lg:left-[100px] xl:w=[300px] xl:left-[300px]"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
        />
      </div>
    </>
  );
}
