export default function Store() {
  return (
    <div id="store">
      <div className="w-full flex flex-col items-center h-screen">
        <h1 className="font-bold pt-40 text-[#8BCCD3] xs:text-2xl md:text-4xl">
          Where To Buy <span className="text-[#E4BA61] xs:text-3xl md:text-5xl">?</span>
        </h1>
        <div className="flex justify-center items-center xs:mt-10 md:mt-20 md:gap-10 lg:gap-20">
          <a href="https://shopee.co.id/omohealthysnack" target="_blank">
            <img
              src="https://logodownload.org/wp-content/uploads/2021/03/shopee-logo-0.png"
              alt=""
              className="w-[300px]"
              data-aos="fade-up"
            />
          </a>
          <a href="https://www.tokopedia.com/omohealthysnack" target="_blank">
            <img
              src="https://www.sukrensi.com/wp-content/uploads/2022/05/logo-tokopedia-vector-1.jpg"
              alt=""
              className="w-[400px]"
              data-aos="fade-up"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
