import story1 from "/assets/story1.png";
import story2 from "/assets/story2.png";
import story3 from "/assets/story3.png";
import review from "/assets/review.jpg";

const Stories = () => {
  return (
    <>
      {/* story1 */}
      <div className="flex flex-wrap mb-16 px-6 2xl:gap-20 gap-10 xl:flex-row flex-col items-center justify-center">
        {/* image */}
        <div className="bg-white">
          <img src={story1} className="sm:h-[600px]" alt="" />
        </div>

        {/* text */}
        <div className="max-w-3xl">
          <h4 className="font-bold">Adventurer</h4>
          <h2 className="text-5xl font-semibold title-font">
            <span className="text-6xl bg-[#f66e5e] text-white px-9 py-4 mr-1 inline-block mt-4">
              J
            </span>
            son
          </h2>

          <p className="mt-10 text-[#7a7a7a]">{`It's a neighborly day in this beautywood, a neighborly day for a beauty. The air is crisp, the sun shining with a gentle warmth that seems to invite all to enjoy the peace. At the period of our arrival at the island, the heaviest storage of the Pequod had been almost completed; comprising her beef, bread, water, fuel, and iron hoops and staves. The crew moved about with quiet efficiency, their labors almost done, each man eager for the journey ahead. There was a sense of anticipation in the air, a feeling that something momentous was soon to unfold as the ship readied itself for its fateful voyage. The island, with its rugged beauty and remote solitude, seemed to hold its breath, waiting.`}</p>
        </div>
      </div>

      {/* story2 */}
      <div className="flex flex-wrap mb-24 px-6 2xl:gap-20 gap-10 xl:flex-row flex-col-reverse items-center justify-center">
        {/* text */}
        <div className="max-w-3xl xl:text-right">
          <h4 className="font-bold xl:mr-[100px]">Misterious Girl</h4>
          <h2 className="text-5xl font-semibold title-font">
            <span className="text-6xl bg-[#f66e5e] text-white px-9 py-4 mr-1 inline-block mt-4">
              S
            </span>
            erena
          </h2>

          <p className="mt-10 text-[#7a7a7a]">{`The Caterpillar and Alice looked at each other for some time in silence: at last the Caterpillar took the hookah out of its mouth, and addressed her in a languid, sleepy voice.There seemed to be no use in waiting by the little door, so she went back to the table, half hoping she might find another key on it, or at any rate a book of rules for shutting people up like telescopes: this time she found a little bottle on it. Alice did not quite know what to say to this: so she helped herself to some tea and bread-and-butter, and then turned to the Dormouse and repeated her question. “Why did they live at bottom of well?”`}</p>
        </div>

        {/* image */}
        <div className="bg-white">
          <img src={story2} className="sm:h-[600px]" alt="" />
        </div>
      </div>

      {/* story3 */}
      <div className="flex flex-wrap mb-24 px-6 2xl:gap-20 gap-10 xl:flex-row flex-col items-center justify-center">
        {/* image */}
        <div className="bg-white">
          <img src={story3} className="sm:h-[600px]" alt="" />
        </div>
        {/* text */}
        <div className="max-w-3xl">
          <h4 className="font-bold">Enigmatic Beauty</h4>
          <h2 className="text-5xl font-semibold title-font">
            <span className="text-6xl bg-[#f66e5e] text-white px-7 py-4 mr-2 inline-block mt-4">
              A
            </span>
            lice
          </h2>

          <p className="mt-10 text-[#7a7a7a]">{`Alice did not quite know what to say to this: so she helped herself to some tea and bread-and-butter, and then turned to the Dormouse, and repeated her question. “Why did they live at the bottom of a well?” The Caterpillar and Alice looked at each other for some time in silence: at last the Caterpillar took the hookah out of its mouth, and addressed her in a languid, sleepy voice.There seemed to be no use in waiting by the little door, so she went back to the table, half hoping she might find another key on it, or at any rate a book of rules for shutting people up like telescopes: this time she found a little bottle on it.`}</p>
        </div>
      </div>

      {/* review */}
      <div className="bg-[url(/assets/reviewBg.jpg)] bg-bottom text-black">
        <div
          className="mt-10 bg-t mb-36 py-28 flex lg:justify-end justify-center px-6"
          style={{
            "background-image":
              "linear-gradient(180deg, #fff 0%, rgba(227, 238, 239, 0) 71%)",
          }}
        >
          <div className="bg-[#fafafa] inline-block sm:p-20 p10 rounded-2xl lg:mr-44">
            <p className="sm:text-2xl text-xl title-font mb-5">
              Joyful and beautiful adventure. It will take you to{" "}
              <br className="md:block hidden" />
              landscapes never seen before!
            </p>

            <div className="flex items-center gap-2">
              <img
                src={review}
                className="h-16 w-16 object-cover rounded-full"
                alt=""
              />
              <div>
                <p>Tiffany James</p>
                <h4 className="text-sm font-semibold text-[#828686]">Writer</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stories;
