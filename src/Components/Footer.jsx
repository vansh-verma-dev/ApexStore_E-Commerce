import { FaInstagram, FaTwitter, FaGithub, FaFacebook } from "react-icons/fa";

function Footersection() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 mt-16">
      
      <div className="w-full max-w-[1200px] mx-auto px-6 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Logo Section */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            
            <img
              src="./logo.png"
              alt="Logo"
              className="h-10 w-auto"
            />

            <p className="text-gray-500 max-w-sm leading-relaxed">
              Making the world a better place through constructing elegant hierarchies.
            </p>

            <div className="flex gap-5 pt-2">
              <FaInstagram className="text-gray-400 hover:text-pink-600 text-xl cursor-pointer" />
              <FaFacebook className="text-gray-400 hover:text-blue-500 text-xl cursor-pointer" />
              <FaTwitter className="text-gray-400 hover:text-sky-500 text-xl cursor-pointer" />
              <FaGithub className="text-gray-400 hover:text-gray-900 text-xl cursor-pointer" />
            </div>

          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Solutions
            </h3>
            <ul className="mt-5 space-y-3">
              {["Marketing", "Analytics", "Automation", "Commerce", "Insights"].map((item) => (
                <li key={item}>
                  <a className="text-gray-600 hover:text-black transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Support
            </h3>
            <ul className="mt-5 space-y-3">
              {["Submit ticket", "Documentation", "Guides"].map((item) => (
                <li key={item}>
                  <a className="text-gray-600 hover:text-black transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="mt-5 space-y-3">
              {["Terms of service", "Privacy policy", "License"].map((item) => (
                <li key={item}>
                  <a className="text-gray-600 hover:text-black transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-gray-100 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © 2024 Apex Store. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footersection;