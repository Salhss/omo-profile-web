import image1 from "../assets/images/img_190611111621.jpg";
import image2 from "../assets/images/img_190611111633.jpg";
import image3 from "../assets/images/img_190827033436.jpg";
import image4 from "../assets/images/img_190827033813.jpg";
import "../assets/css/memories.css";

export default function Memories() {
  return (
    <div className="cont block">
      <div id="memories" className="h-fit mb-5">
        <div
          className=" background-memories w-full h-full"
          data-aos="fade-down"
        >
          <div className="w-full flex flex-col items-center justify-center">
            <h1 className="pt-20 mb-5 font-bold top-0 xs:text-2xl xs:mt-12 md:text-4xl md:mt-20">
              Our Memories
            </h1>
            <div className=" grid grid-cols-2 gap-2 w-[80%] ">
              <img src={image1} alt="" />
              <img src={image2} alt="" />
              <img src={image3} alt="" />
              <img src={image4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
