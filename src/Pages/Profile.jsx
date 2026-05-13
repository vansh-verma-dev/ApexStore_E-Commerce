import { FaLocationDot, FaRegCreditCard } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineSupervisorAccount, MdOutlineSecurity } from "react-icons/md";
import { FaBell, FaHeart, FaBoxOpen, FaUserEdit } from "react-icons/fa";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { IoSettings } from "react-icons/io5";

function Profile() {
  return (
    <div className="bg-orange-500 grid grid-cols-1 sm:grid-cols-[400px_1fr] w-full min-h-screen pb-10">

   
      <div className="profile_page bg-[#f8fafc] pb-10 shadow-xl overflow-hidden">
 
        <div className="flex flex-col py-8 items-center bg-gradient-to-r from-amber-400 via-orange-400 to-pink-500 relative">
          <div className="absolute inset-0 bg-black/10"></div>

          <img
            src="https://i.pinimg.com/736x/4e/22/be/4e22beef6d94640c45a1b15f4a158b23.jpg"
            alt="UserImg"
            className="w-[120px] h-[120px] rounded-full border-4 border-white shadow-lg z-10"
          />

          <h1 className="text-white font-semibold text-2xl mt-3 z-10">
            Vansh Verma
          </h1>

          <p className="text-white/90 text-sm z-10">
            Email: Vanshverma6065@gmail.com
          </p>
        </div>
 
        <div className="px-3 space-y-4 mt-4">
 
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <a className="flex justify-between items-center p-4 hover:bg-gray-50">
              <span className="flex gap-2 items-center">
                <FaLocationDot /> Address
              </span>
              <IoIosArrowForward />
            </a>

            <div className="border-t mx-4" />

            <a className="flex justify-between items-center p-4 hover:bg-gray-50">
              <span className="flex gap-2 items-center">
                <MdOutlineSupervisorAccount /> Account
              </span>
              <IoIosArrowForward />
            </a>
          </div>
 
          <div className="bg-white rounded-xl shadow-md overflow-hidden">

            <a className="flex justify-between items-center p-4 hover:bg-gray-50">
              <span className="flex gap-2 items-center">
                <FaBell /> Notifications
              </span>
              <IoIosArrowForward />
            </a>

            <div className="border-t mx-4" />

            <a className="flex justify-between items-center p-4 hover:bg-gray-50">
              <span className="flex gap-2 items-center">
                <FaBoxOpen /> My Order
              </span>
              <IoIosArrowForward />
            </a>

            <div className="border-t mx-4" />

            <a className="flex justify-between items-center p-4 hover:bg-gray-50">
              <span className="flex gap-2 items-center">
                <FaHeart /> Wishlist
              </span>
              <IoIosArrowForward />
            </a>

          </div>

         
          <div className="bg-white rounded-xl shadow-md overflow-hidden">

            <a className="flex justify-between items-center p-4 hover:bg-gray-50">
              <span className="flex gap-2 items-center">
                <FaRegCreditCard /> Payment Methods
              </span>
              <IoIosArrowForward />
            </a>

            <div className="border-t mx-4" />

            <a className="flex justify-between items-center p-4 hover:bg-gray-50">
              <span className="flex gap-2 items-center">
                <MdOutlineSecurity /> Security
              </span>
              <IoIosArrowForward />
            </a>

            <div className="border-t mx-4" />

            <a className="flex justify-between items-center p-4 hover:bg-gray-50">
              <span className="flex gap-2 items-center">
                <HiOutlineQuestionMarkCircle /> Help & Support
              </span>
              <IoIosArrowForward />
            </a>

          </div>

          {/* SECTION 4 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">

            <a className="flex justify-between items-center p-4 hover:bg-gray-50">
              <span className="flex gap-2 items-center">
                <FaUserEdit /> Edit Profile
              </span>
              <IoIosArrowForward />
            </a>

            <div className="border-t mx-4" />

            <a className="flex justify-between items-center p-4 hover:bg-gray-50">
              <span className="flex gap-2 items-center">
                <IoSettings /> Settings
              </span>
              <IoIosArrowForward />
            </a>

          </div>

        </div>
      </div>

     
      <div className="bg-green-400 w-full min-h-screen p-5 hidden">
     
      </div>

    </div>
  );
}

export default Profile;