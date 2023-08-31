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
            <li className="cursor-pointer text-white font-bold text-base pb-4 duration-100 hover:scale-105 hover:border-b-4 border-white-400">
              Home
            </li>
            <li className="cursor-pointer text-white font-bold text-base pb-4 duration-100 hover:scale-105 hover:border-b-4 border-white-400">
              Customer Reviews
            </li>
            <li className="cursor-pointer text-white font-bold text-base pb-4 duration-100 hover:scale-105 hover:border-b-4 border-white-400">
              About Us
            </li>
            <li className="cursor-pointer text-white font-bold text-base pb-4 duration-100 hover:scale-105 hover:border-b-4 border-white-400">
              Omo! Feature
            </li>
            <li className="cursor-pointer text-white font-bold text-base pb-4 duration-100 hover:scale-105 hover:border-b-4 border-white-400">
              How To Buy
            </li>
            <li className="cursor-pointer text-white font-bold text-base pb-4 duration-100 hover:scale-105 hover:border-b-4 border-white-400">
              FAQ
            </li>
            <li className="cursor-pointer text-white font-bold text-base pb-4 duration-100 hover:scale-105 hover:border-b-4 border-white-400">
              About Project
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
