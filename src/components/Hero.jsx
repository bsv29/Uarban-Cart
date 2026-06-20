import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-300 w-full mx-auto mt-6">

      {/* LEFT SIDE - TEXT SECTION */}
      <div className="w-full sm:w-1/2 flex flex-col justify-center px-8 py-10 sm:py-0">
        <div className="flex items-center gap-2 mb-2">
          <p className="w-7 md:w-11 h-[3px] bg-[#414141]"></p>
          <p className="text-sm font-semibold md:text-base">OUR BESTSELLERS</p>
        </div>

        <h1 className="prata-regular text-3xl sm:text-1xl lg:text-10xl font-light leading-relaxed mb-4">
          Latest Arrivals
        </h1>

        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold md:text-base">Shop Now</p>
          <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
        </div>
      </div>

      {/* RIGHT SIDE - IMAGE SECTION */}
      <div className="w-full sm:w-1/2">
        <img
          src={assets.hero_img}
          alt="hero"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
