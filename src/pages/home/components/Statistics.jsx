import CountUp from "react-countup";
import { useTranslation } from "react-i18next";


const Statistics = ({data}) => {
  const {t} = useTranslation()
  return (
    <div className="border-t border-b border-black">
      <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 2xl:px-10">
        <div className="w-full flex items-center justify-between py-20">
          <div className="w-[40%] text-center">
            <p className="text-base text-cyan-900 font-bold">
              {t('partners')}
            </p>
            <CountUp
              end={data.partners}
              enableScrollSpy
              scrollSpyOnce
              suffix="+"
              duration={2}
              className="text-8xl text-cyan-900"
            />
          </div>
          <div className="w-[40%] text-center">
            <p className="text-base text-cyan-900 font-bold">
              {t('customers')}
            </p>
            <CountUp
              end={data.customers}
              enableScrollSpy
              scrollSpyOnce
              suffix="+"
              duration={2}
              className="text-8xl text-cyan-900"
            />
          </div>
          <div className="w-[40%] text-center">
            <p className="text-base text-cyan-900 font-bold">
              {t('products')}
            </p>
            <CountUp
              end={data.products}
              enableScrollSpy
              scrollSpyOnce
              suffix="+"
              duration={2}
              className="text-8xl text-cyan-900"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics