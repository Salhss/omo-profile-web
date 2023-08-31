import "../assets/css/mobile-menu.css";

export default function MobileMenu() {
  return (
    <div className="md:block lg:hidden">
      <nav>
        <div className="navbar">
          <div className="container nav-container">
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            <div className="menus absolute top-[60px] right-0 bg-[#8BCCD3] w-[300px] xs:w-[250px] z-40">
              <ul className="flex flex-col gap-4 justify-center items-center py-3">
                <li className="cursor-pointer text-white font-bold text-base hover:text-[#E4BA61]">
                  <a href="#home">Home</a>
                </li>
                <li className="cursor-pointer text-white font-bold text-base hover:text-[#E4BA61]">
                  <a href="#products">Our Products</a>
                </li>
                <li className="cursor-pointer text-white font-bold text-base hover:text-[#E4BA61]">
                <a href="#memories">Memories</a>
                </li>
                <li className="cursor-pointer text-white font-bold text-base hover:text-[#E4BA61]">
                  <a href="#faq">FAQ</a>
                </li>
                <li className="cursor-pointer text-white font-bold text-base hover:text-[#E4BA61]">
                  <a href="#store">Where to Buy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
