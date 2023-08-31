import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <div className="sticky w-full top-0 z-50 bg-[#8BCCD3] pt-2">
      <div className="relative w-full h-24 shadow-xl">
        <img
          src="https://omohealthysnack.co.id/themes/blue/assets/images/logo.png"
          alt="omo-logo"
          className="absolute top-4 left-4 z-50 xs:max-w-[100px] sm:max-w-[200px]"
        />
        <div className="absolute right-10 top-8">
          <MobileMenu />
          <ul className="hidden gap-8 lg:flex">
            <li className="cursor-pointer text-white font-bold text-xl pb-4 duration-100 hover:scale-105 hover:border-b-4 border-white-400">
              <a href="#home">Home</a>
            </li>
            <li className="cursor-pointer text-white font-bold text-xl pb-4 duration-100 hover:scale-105 hover:border-b-4 border-white-400">
              <a href="#products">Our Products</a>
            </li>
            <li className="cursor-pointer text-white font-bold text-xl pb-4 duration-100 hover:scale-105 hover:border-b-4 border-white-400">
              <a href="#memories">Memories</a>
            </li>
            <li className="cursor-pointer text-white font-bold text-xl pb-4 duration-100 hover:scale-105 hover:border-b-4 border-white-400">
              <a href="#faq">FAQ</a>
            </li>
            <li className="cursor-pointer text-white font-bold text-xl pb-4 duration-100 hover:scale-105 hover:border-b-4 border-white-400">
              <a href="#store">Where to Buy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
