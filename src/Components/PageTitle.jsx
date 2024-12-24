/* eslint-disable react/prop-types */

const PageTitle = ({title, subtitle}) => {
  return (
    <div className="bg-[url(/assets/pageTitle.jpg)] py-40 bg-center text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-semibold mb-3">{title}</h2>
        <span className="w-16 mt-3 rounded-full h-[2px] bg-[#f66e5e] inline-block mb-1"></span>
        <h4 className="font-semibold">{subtitle}</h4>
      </div>
    </div>
  );
};

export default PageTitle;
