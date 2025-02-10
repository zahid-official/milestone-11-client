import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import Quotes from "../../Components/Quotes";
import Banner from "./Banner";
import Categories from "./Categories";
import Stories from "./Stories";
import categoryBg from "/assets/category-bg.png";
import quotesImg from "/assets/quotes.png";
import quotesImg2 from "/assets/quotes2.png";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  // state for scroll
  const [isScroll, setIsScroll] = useState(false);

  // useEffect for navbar scroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 50){
        setIsScroll(true);
      }
      else{
        setIsScroll(false);
      }
    });
  }, []);



  // useEffect for AOS
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease",
      once: false,
    });
  }, []);

  return (
    <div className=" overflow-x-hidden">
      <header className={`fixed top-0 z-50 w-full ${isScroll ? 'bg-white dark:bg-[#010313] backdrop-blur-sm dark:backdrop-blur-sm bg-opacity-70 dark:bg-opacity-70' : 'bg-[#f4f4eb] dark:bg-[#0e1629] border-b dark:border-b-black'}`}>
        <Navbar></Navbar>
      </header>

      {/* banner */}
      <section className="pt-24">
        <Banner></Banner>
        {/* quotes */}
        <div data-aos="fade-up" className=" w-11/12 mx-auto py-28">
          <Quotes
            quotesImg={quotesImg}
            quotes={`Every day is a journey and the journey itself is home.`}
            writer={"Matsu Bashio"}
            color={"text-[#818181] dark:text-white"}
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
            <div data-aos="zoom-in">
              <Quotes
                quotesImg={quotesImg2}
                quotes={`You can’t cross the sea merely by standing and staring at the water`}
                writer={"Hiroshi Fumiko"}
                color={"text-[#d0d09d]"}
              ></Quotes>
            </div>
          </div>
        </div>

        <Stories></Stories>
      </section>
    </div>
  );
};

export default Home;
