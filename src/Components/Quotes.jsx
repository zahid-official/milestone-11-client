/* eslint-disable react/prop-types */

const Quotes = ({ quotesImg, quotes, writer, color }) => {
  return (
    <div className="text-center space-y-5">
      <img src={quotesImg} alt="quotes" className="mx-auto w-40" />
      <h2 className="text-4xl qoutes-font">{quotes}</h2>
      <h3 className={`text-lg font-semibold qoutes-font ${color}`}>
        {writer}
      </h3>
    </div>
  );
};

export default Quotes;
