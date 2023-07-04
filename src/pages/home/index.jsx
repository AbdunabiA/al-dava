import { useTranslation } from "react-i18next";
import News from "./components/News";
import Partners from "./components/Partners";
import Statistics from "./components/Statistics";
import AboutCompany from "./components/aboutCompany";
import GetAll from 'modules/getAll'

const Index = () => {
  const {i18n} = useTranslation()
  return (
    <main className="min-h-screen">
      
        <GetAll url={"/main-page/"} queryKey={'main'}>
          {({items, data, isLoading}) => {
            console.log(items);
            if(isLoading) return <p>Loading...</p>
            return (
              <>
                <AboutCompany data={items?.company} lang={i18n.language} />
                <Statistics data={items?.company} />
                <Partners data={items?.partners} />
                <News data={items?.news} lang={i18n.language} />
              </>
            );
          }}
        </GetAll>
    </main>
  );
}

export default Index