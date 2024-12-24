import Quotes from "../../Components/Quotes";
import Banner from "./Banner";
import Categories from "./Categories";
import categoryBg from "/assets/category-bg.png";

const Home = () => {
  return (
    <div>
      {/* banner */}
      <section>
        <Banner></Banner>
        <div className=" w-11/12 mx-auto">
          <Quotes></Quotes>
        </div>
      </section>

      {/* categories */}
      <section className=" w-11/12 mx-auto relative">
        <div className="relative z-10">
          <Categories></Categories>
        </div>
        <img src={categoryBg} alt="" className="absolute bottom-32 right-0 xl:h-[500px] h-96 sm:block hidden" />
      </section>
    </div>
  );
};

export default Home;
