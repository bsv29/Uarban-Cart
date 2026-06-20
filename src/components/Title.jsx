const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-3 items-center mb-3">
      <p className="uppercase text-gray-500 tracking-wide">
        {text1} <span className="text-gray-800 font-semibold">{text2}</span>
      </p>
      <div className="w-12 h-[2px] bg-gray-800"></div>
    </div>
  );
};

export default Title;
