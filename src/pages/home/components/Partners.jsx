import { Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/a11y";
import { useTranslation } from "react-i18next";

const Partners = ({data}) => {
  const {t} = useTranslation()
  return (
    <div className="mt-32">
      <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 2xl:px-10">
        <div>
          <h1 className="text-5xl text-cyan-900 font-semibold text-center mb-20">
            {t("ilmiyHamkorlar")}
          </h1>
          <Swiper
            modules={[Pagination, A11y, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // effect="fade"
            // autoplay={true}
            delay={2000}
            loop={true}
            spaceBetween={24}
            pagination={{
              clickable: true,
              renderCustom:true,
            }}
            draggable
            // onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              280: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
              1920: {
                slidesPerView: 5,
                spaceBetween: 24,
              },
            }}
            className="w-full bg-white h-[300px]"
          >
            {data?.map((partner, i) => (
              <SwiperSlide key={i} className="">
                <div className="h-full">
                  <div className="w-full h-[80%]">
                    <img
                      src={`https://aldava.pythonanywhere.com${partner.photo}`}
                      alt="photo"
                      className="w-[100%] h-[100%] object-contain"
                    />
                  </div>
                  <p className="mx-auto text-center mt-4 text-md font-semibold text-cyan-900">
                    {partner.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination mt-10"></div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Partners;
