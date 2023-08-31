import "../assets/css/products.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";

export default function Product() {
  return (
    <div id="products">
      <div className="background-products w-full h-fit flex flex-col items-center">
        <h1 className="font-bold text-white mb-20 mt-20 xs:text-5xl md:text-6xl">
          Our Products
        </h1>

        <div className="products-container w-full text-center grid gap-10 lg:grid-cols-2 xl:grid-cols-4">
          <div className="swipper-container transition hover:translate-y-[-20px]">
            <div className="mb-2 text-white text-center">Hold And Drag To See More ....</div>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="https://down-id.img.susercontent.com/file/0a1acea5e3fbd74f7bbb42ba3e24bc90" alt="" />
                <p className="text-center mt-2">Masker Kain 3 Lapis</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://down-id.img.susercontent.com/file/1dd945d5f11e179ab0c514629accfd04" alt="" />
                <p className="text-center mt-2">Masker Unicorn</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://down-id.img.susercontent.com/file/b5b1bb3dbc63966e00b614c095232acf" alt="" />
                <p className="text-center mt-2">Masker Dino</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://down-id.img.susercontent.com/file/ccc9956c1713773278a04a07a3182f7e" alt="" />
                <p className="text-center mt-2">Masker Couple</p>
              </SwiperSlide>
            </Swiper>
            <div className="mt-3 text-indigo-900 font-bold text-4xl text-center">Mask Series</div>
          </div>
          <div className="swipper-container transition hover:translate-y-[-20px]">
            <div className="mb-2 text-white">Hold And Drag To See More ....</div>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="https://down-id.img.susercontent.com/file/id-11134207-7qul0-lfj51a6tfitx67" alt="" />
                <p className="text-center mt-2">Puff Kale</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://down-id.img.susercontent.com/file/id-11134207-7qul4-lfj51a6t5out7f" alt="" />
                <p className="text-center mt-2">Puff Chocolate</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://down-id.img.susercontent.com/file/7bbf09c7e22e295801247a5b6fd96469" alt="" />
                <p className="text-center mt-2">Unicorn Roll Beef</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://down-id.img.susercontent.com/file/abf8bc8059eb0adfa344c98bf2a878b0" alt="" />
                <p className="text-center mt-2">Unicorn Roll Banana</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://down-id.img.susercontent.com/file/669dc7a0ccdbf6cf99902d08291f663f" alt="" />
                <p className="text-center mt-2">Unicorn Roll Cheese</p>
              </SwiperSlide>
            </Swiper>
            <div className="mt-3 text-indigo-900 font-bold text-4xl text-center">8 Month +</div>
          </div>
          <div className="swipper-container transition hover:translate-y-[-20px]">
            <div className="mb-2 text-white">Hold And Drag To See More ....</div>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="https://down-id.img.susercontent.com/file/sg-11134201-23020-on2ux9a7g2mv1c" alt="" />
                <p className="text-center mt-2">Crunch X Baby Shark</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://down-id.img.susercontent.com/file/sg-11134201-23020-kqwfwewbihnve8" alt="" />
                <p className="text-center mt-2">Crunch Baby Shark</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://down-id.img.susercontent.com/file/08ecb2ba8b1f78d76f4a616de8ab00d4" alt="" />
                <p className="text-center mt-2">Unicorn Sweet Bites</p>
              </SwiperSlide>
            </Swiper>
            <div className="mt-3 text-indigo-900 font-bold text-4xl text-center">Bundle Snack</div>
          </div>
          <div className="swipper-container transition hover:translate-y-[-20px]">
            <div className="mb-2 text-white">Hold And Drag To See More ....</div>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="https://down-id.img.susercontent.com/file/id-11134207-7qul6-lfj51a6t733ee8" alt="" />
                <p className="text-center mt-2">Crunch It Chocolate</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://down-id.img.susercontent.com/file/id-11134207-7qul6-lfj51a6tcq1ae0" alt="" />
                <p className="text-center mt-2">Crunch It Corn</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://down-id.img.susercontent.com/file/id-11134207-7qul1-lfj51a6ticb287" alt="" />
                <p className="text-center mt-2">Crunch It Strawberry</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://down-id.img.susercontent.com/file/id-11134207-7qukx-lfj51a6te3xm5f" alt="" />
                <p className="text-center mt-2">Crunch It Cheese</p>
              </SwiperSlide>
            </Swiper>
            <div className="mt-3 text-indigo-900 font-bold text-4xl text-center">12 Month +</div>
          </div>
        </div>
      </div>
    </div>
  );
}
