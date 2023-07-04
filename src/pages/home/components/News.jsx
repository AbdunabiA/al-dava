import { useTranslation } from "react-i18next";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/a11y";
import { useNavigate } from "react-router-dom";

const News = ({data, lang}) => {
  const {t} = useTranslation()
  const navigate = useNavigate()
  return (
    <div className="mt-32">
      <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 2xl:px-10 ">
        <h1 className="text-5xl text-cyan-900 font-semibold text-center mb-20">
          {t("yangiliklar")}
        </h1>
        <div>
          <Swiper
            modules={[ A11y, Autoplay]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            // effect="fade"
            // autoplay={true}
            delay={2000}
            loop={true}
            spaceBetween={24}
            pagination={{
              clickable: true,
              renderCustom: true,
            }}
            slidesPerView={1}
            draggable
            // onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="w-full bg-white h-[300px]"
          >
            {data?.map((news, i) => (
              <SwiperSlide key={i} className="">
                <div className="flex items-center">
                  <div className="2xl:w-[1200px] 2xl:h-[400px] xl:w-[1000px] xl:h-[350px] lg:w-[800px] lg:h-[300px] md:w-[500px] md:h-[200px] sm:w-[500px] sm:h-[200px]">
                    <img
                      src={`https://aldava.pythonanywhere.com${news.photo}`}
                      alt="photo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="lg:p-6 md:p-2  flex flex-col 2xl:space-y-10 xl:space-y-8 lg:space-y-6 md:space-y-4 sm:space-y-2 2xl:w-[1200px] 2xl:h-[400px] xl:w-[1000px] xl:h-[350px] lg:w-[800px] lg:h-[300px] md:w-[500px] md:h-[200px] sm:w-[500px] sm:h-[200px]">
                    <h1 className="lg:text-xl font-bold text-cyan-900 md:text-base overflow-hidden [display:_-webkit-box] [-webkit-box-orient:_vertical] [-webkit-line-clamp:_2]">
                      {news[`title_${lang}`]}
                    </h1>
                    <p className="overflow-hidden [display:_-webkit-box] [-webkit-box-orient:_vertical] [-webkit-line-clamp:_4] text-base text-cyan-900">
                      {news[`about_${lang}`]}
                    </p>
                    <div className="flex items-center justify-end">
                      <button
                        className="border-2 border-cyan-900 text-white bg-cyan-900 duration-300 lg:text-md font-semibold lg:px-10 lg:py-2 md:text-sm md:px-6 md:py-1 py-[2px] px-4 cursor-pointer hover:bg-white hover:text-cyan-900 hover:border-cyan-900"
                        onClick={() => navigate(`news/${news.id}`)}
                      >
                        {t("batafsil")}
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination mt-10"></div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default News