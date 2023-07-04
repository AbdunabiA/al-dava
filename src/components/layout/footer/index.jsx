import logo from 'assets/images/Logo_name.png'
import Facebook from 'assets/icons/facebook'
import Telegram from 'assets/icons/telegram'
import Instagram from 'assets/icons/instagram'

const Index = () => {
  return (
    <footer className="mt-20 py-5 bg-cyan-900">
      <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 2xl:px-10">
        <div className="flex justify-between items-center">
          <div className="w-[10%]">
            <img src={logo} alt="logo" className="w-full h-full object-cover" />
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 group border border-white p-1 hover:bg-white duration-300 cursor-pointer relative">
              <Facebook
                width="14"
                height="14"
                className="fill-white group-hover:fill-cyan-900"
              />
              <p className="text-white group-hover:text-cyan-900 font-semibold">
                Facebook
              </p>
              <a
                href="https://www.facebook.com/aldavauz"
                target="_blank"
                className="absolute top-0 left-0 w-full h-full"
              ></a>
            </div>
            <div className="flex items-center space-x-2 group border border-white p-1 hover:bg-white duration-300 cursor-pointer relative">
              <Instagram
                width="14"
                height="14"
                className="fill-white group-hover:fill-cyan-900"
              />
              <p className="text-white group-hover:text-cyan-900 font-semibold">
                Instagram
              </p>
              <a
                href="https://www.instagram.com/aldavauz/"
                target="_blank"
                className="absolute top-0 left-0 w-full h-full"
              ></a>
            </div>
            <div className="flex items-center space-x-2 group border border-white p-1 hover:bg-white duration-300 cursor-pointer relative">
              <Telegram
                width="14"
                height="14"
                className="fill-white group-hover:fill-cyan-900"
              />
              <p className="text-white group-hover:text-cyan-900 font-semibold">
                Telegram
              </p>
              <a
                href="https://t.me/Aldava_farm"
                target="_blank"
                className="absolute top-0 left-0 w-full h-full"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Index