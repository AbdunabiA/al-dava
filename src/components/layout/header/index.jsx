import logo from 'assets/images/Logo_emblem.png'
import { useNavigate } from 'react-router-dom';
import Facebook from 'assets/icons/facebook'
import Telegram from 'assets/icons/telegram'
import Instagram from 'assets/icons/instagram'
import { useTranslation } from 'react-i18next';

const Index = () => {
    const {i18n} = useTranslation()
    const navigate = useNavigate()
  return (
    <header className="bg-cyan-900 backdrop-blur-sm">
      <div className="container px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 2xl:px-10 mx-auto">
        <div className="w-ful backdrop-blur py-2 flex items-center justify-between">
          <div
            onClick={() => navigate("/")}
            className="w-[6%] rounded-[100%] cursor-pointer hover:bg-white duration-300"
          >
            <img src={logo} alt="logo" className="w-full h-full object-cover" />
          </div>
          <div className="flex items-center space-x-6">
            <div className="p-2 border border-white cursor-pointer hover:shadow-md shadow-white group hover:bg-white transition-all duration-300 relative">
              <Facebook
                width="14"
                height="14"
                className="fill-white group-hover:fill-cyan-900"
              />
              <a href="https://www.facebook.com/aldavauz" target='_blank' className='absolute top-0 left-0 w-full h-full'></a>
            </div>
            <div className="p-2 border border-white cursor-pointer hover:shadow-md shadow-white group hover:bg-white transition-all duration-300 relative">
              <Telegram
                width="14"
                height="14"
                className="fill-white group-hover:fill-cyan-900"
              />
              <a href="https://t.me/Aldava_farm" target='_blank' className='absolute top-0 left-0 w-full h-full'></a>
            </div>
            <div className="p-2 border border-white cursor-pointer hover:shadow-md shadow-white group hover:bg-white transition-all duration-300 relative">
              <Instagram
                width="14"
                height="14"
                className="fill-white group-hover:fill-cyan-900"
              />
              <a href="https://www.instagram.com/aldavauz/" target='_blank' className='absolute top-0 left-0 w-full h-full'></a>
            </div>
          </div>
          <div className="flex items-center space-x-5">
            <div
              className={`border border-white rounded-[100%] p-2 font-bold cursor-pointer  ${
                i18n.language === "uz" ? "bg-white text-cyan-900" : "text-white"
              }`}
              onClick={() => i18n.changeLanguage("uz")}
            >
              UZ
            </div>
            <div
              className={`border border-white rounded-[100%] p-2 font-bold cursor-pointer  ${
                i18n.language === "ru" || i18n.language === "ru-RU"
                  ? "bg-white text-cyan-900"
                  : "text-white"
              }`}
              onClick={() => i18n.changeLanguage("ru")}
            >
              RU
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Index