import "../assets/css/faq.css";
import comment1 from "../assets/images/Screenshot 2023-09-01 0605459.png";
import comment2 from "../assets/images/Screenshot 2023-09-01 0606291.png";
import comment3 from "../assets/images/Screenshot 2023-09-01 0607171.png";
import comment4 from "../assets/images/Screenshot 2023-09-01 0608101.png";

export default function FAQ() {
  return (
    <div id="faq">
      <div className="background-faq w-full h-fit flex flex-col items-center pb-20">
        <h1 className="font-bold  text-white text-center pt-36 xs:text-2xl md:text-4xl">
          <span className="text-[#E4BA61] xs:text-4xl md:text-5xl">#</span>Apa
          Kata Mereka?
        </h1>
        <div className="w-[80%] grid grid-cols-1 place-items-center xs:gap-4 md:gap-10">
          <img
            src={comment1}
            alt=""
            className="h-[80%]"
            data-aos="fade-up"
            data-aos-duration="2000"
          />
          <img
            src={comment2}
            alt=""
            className="h-[80%]"
            data-aos="fade-up"
            data-aos-duration="2000"
          />
          <img
            src={comment3}
            alt=""
            className="h-[80%]"
            data-aos="fade-up"
            data-aos-duration="2000"
          />
          <img
            src={comment4}
            alt=""
            className="h-[80%]"
            data-aos="fade-up"
            data-aos-duration="2000"
          />
        </div>
      </div>
    </div>
  );
}
