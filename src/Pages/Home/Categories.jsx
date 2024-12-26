import { Link } from "react-router-dom";
import category1 from "/assets/category1.jpg";
import category2 from "/assets/category2.jpg";
import category3 from "/assets/category3.jpg";
import category4 from "/assets/category4.jpg";
import category5 from "/assets/category5.jpg";
import category6 from "/assets/category6.jpg";

const Categories = () => {
  return (
    <>
      <div className="pb-36">
        <div className="grid xl:grid-cols-12 xl:gap-0 gap-14">
          {/* left */}
          <div className="2xl:col-span-7 xl:col-span-8 max-w-[945px] mx-auto">
            <div className="mx-auto flex justify-center gap-8 flex-wrap">
              {/* comedy */}
              <Link to="/category/Comedy">
                <div className="hover:text-[#f66e5e] duration-300">
                  <img src={category1} className="h-80" alt="" />
                  <h3 className="text-2xl font-semibold mt-2.5">Comedy</h3>
                </div>
              </Link>

              {/* thriller */}
              <Link to="/category/Thriller">
                <div className="hover:text-[#f66e5e] duration-300">
                  <img src={category2} className="h-80" alt="" />
                  <h3 className="text-2xl font-semibold mt-2.5">Thriller</h3>
                </div>
              </Link>

              {/* adventure */}
              <Link to="/category/Adventure">
                <div className="hover:text-[#f66e5e] duration-300">
                  <img src={category3} className="h-80" alt="" />
                  <h3 className="text-2xl font-semibold mt-2.5">Adventure</h3>
                </div>
              </Link>

              {/* fantasy */}
              <Link to="/category/Fantasy">
                <div className="hover:text-[#f66e5e] duration-300">
                  <img src={category4} className="h-80" alt="" />
                  <h3 className="text-2xl font-semibold mt-2.5">Fantasy</h3>
                </div>
              </Link>

              {/* mystery */}
              <Link to="/category/Mystery">
                <div className="hover:text-[#f66e5e] duration-300">
                  <img src={category5} className="h-80" alt="" />
                  <h3 className="text-2xl font-semibold mt-2.5">Mystery</h3>
                </div>
              </Link>

              {/* magical */}
              <Link to="/category/Magical">
                <div className="hover:text-[#f66e5e] duration-300">
                  <img src={category6} className="h-80" alt="" />
                  <h3 className="text-2xl font-semibold mt-2.5">Magical</h3>
                </div>
              </Link>
            </div>
          </div>

          {/* right */}
          <div className="2xl:col-span-5 xl:col-span-4 xl:mt-20">
            <div className="2xl:max-w-[515px] max-w-[710px] 2xl:mx-0 mx-auto">
              <h4 className="font-semibold">Hand Picked Additions.</h4>
              <h1 className="text-4xl title-font mt-2.5">
                Featured Categories in <br className="2xl:block hidden" /> Our
                Library
              </h1>
              <p className="py-10 text-[#7a7a7a]">
                {`Its a neighborly day in this beautywood a neighborly day for a beauty. Would you be mine? Could you be mine. So get a witch’s shawl on a broomstick you can crawl on. Were gonna pay a call on the Addams Family? Michael Knight a young loner on a crusade to champion the cause of the innocent.`}
              </p>

              <div className="flex gap-7">
                <span className="w-16 mt-3 rounded-full h-[2px] bg-black xl:inline-block hidden"></span>
                <Link to='/allBooks'>
                  <span className="font-bold border-b-2 pb-2 hover:text-[#f66e5e] duration-300 border-[#f66e5e]">
                    View All Books
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
