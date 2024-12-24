import quotes from "/assets/quotes.png";

const Quotes = () => {
    return (
        <div className="text-center py-28 space-y-5">
            <img src={quotes} alt="quotes" className="mx-auto w-40" />
            <h2 className="text-4xl qoutes-font">{`"Every day is a journey and the journey itself is home."`}</h2>
            <h3 className="text-lg font-semibold qoutes-font text-[#818181]">Matsu Bashio</h3>
        </div>
    );
};

export default Quotes;