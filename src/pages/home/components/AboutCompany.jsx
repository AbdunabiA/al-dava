


const AboutCompany = ({data, lang}) => {
  return (
    <div className="bg-gradient-to-b from-cyan-900 to-white mt-[1px] backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 2xl:px-10 ">
        <div className="w-full h-full bg-[url('assets/images/Logo_name.png')] bg-contain bg-no-repeat bg-center">
          <div className="backdrop-blur-md text-cyan-950 p-10 rounded-sm">
            <h1 className="text-7xl mt-20 font-semibold mx-auto text-center w-[70%]">
              {data[`title_${lang}`]}
            </h1>
            <p className="mt-10 text-lg w-[80%] mx-auto text-center font-semibold mb-20">
              {data[`about_${lang}`]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCompany