import icon1 from "/assets/icon1.png";
import icon2 from "/assets/icon2.png";
import icon3 from "/assets/icon3.png";

const Divider = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-12 text-center text-[#7a7a7a] mb-28 border-b pb-28">
      {/* 1 */}
      <div>
        <div className="flex justify-center mb-5">
          <img src={icon1} className="h-20" alt="" />
        </div>
        <p>
        Join the Starship Enterprise on an epic journey through the stars, where even the smallest ship must brave the fiercest cosmic storms.
        </p>
      </div>

      {/* 2 */}
      <div>
        <div className="flex justify-center mb-5">
          <img src={icon2} className="h-20" alt="" />
        </div>
        <p>
        Follow the Starship Enterprise as it navigates the vast unknown, facing unexpected challenges and thrilling discoveries at every corner.
        </p>
      </div>

      {/* 3 */}
      <div>
        <div className="flex justify-center mb-5">
          <img src={icon3} className="h-20" alt="" />
        </div>
        <p>
        Set sail with the Starship Enterprise on a daring journey through the cosmos, where every moment brings new challenges and adventures.
        </p>
      </div>
    </div>
  );
};

export default Divider;
