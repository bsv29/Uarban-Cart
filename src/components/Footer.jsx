import { assets } from "../assets/assets"

const Footer = () => {
  return (
    <div className="px-6 sm:px-20">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        
        {/* LEFT SECTION (Logo + About Text) */}
        <div>
          <p className="text-2xl font-bold mb-5">Urban Cart</p>
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>

        {/* MIDDLE SECTION (Links) */}
        <div>
          <h3 className="text-gray-800 font-medium mb-5 text-xl">Company</h3>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* RIGHT SECTION (Contact Info / Social Links) */}
        <div>
          <p className="text-gray-800 font-medium mb-4 text-xl">Get in Touch</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 7013353553</li>
            <li>bsv@gmail.com</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM COPYRIGHT LINE */}
      <hr />
      <p className="text-center text-gray-500 border-t pt-5 pb-8 text-sm py-5">
        © Copyright 2024@ foreever.com - All Right Reserved
      </p>
    </div>
  )
}

export default Footer
