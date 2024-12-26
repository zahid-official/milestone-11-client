import Quotes from "../../Components/Quotes";
import Banner from "./Banner";
import Categories from "./Categories";
import Stories from "./Stories";
import categoryBg from "/assets/category-bg.png";
import quotesImg from "/assets/quotes.png";
import quotesImg2 from "/assets/quotes2.png";
const Home = () => {
  return (
    <div>
      {/* banner */}
      <section>
        <Banner></Banner>
        <div className=" w-11/12 mx-auto py-28">

        {/* quotes */}
          <Quotes
            quotesImg={quotesImg}
            quotes={`Every day is a journey and the journey itself is home.`}
            writer={"Matsu Bashio"}
            color={'text-[#818181]'}
          ></Quotes>
        </div>
      </section>

      {/* categories */}
      <section className=" w-11/12 mx-auto relative">
        <div className="relative z-10">
          <Categories></Categories>
        </div>
        <img
          src={categoryBg}
          alt=""
          className="absolute bottom-32 right-0 xl:h-[500px] h-96 sm:block hidden"
        />
      </section>

      {/* stories */}
      <section>
        <div className="mx-auto bg-[url(/assets/quotesBg.jpg)] bg-fixed bg-cover text-white space-y-5 mb-36">
          {/* quotes */}
          <div className="bg-[#18273a7e] py-28 h-full px-3">
          <Quotes
            quotesImg={quotesImg2}
            quotes={`You can’t cross the sea merely by standing and staring at the water`}
            writer={"Hiroshi Fumiko"}
            color={'text-[#d0d09d]'}
          ></Quotes>
          </div>
        </div>

        <Stories></Stories>
      </section>
    </div>
  );
};

export default Home;
