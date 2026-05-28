import { CiLocationOn } from "react-icons/ci";
function Location() {
    return (
        <div className="sm:hidden mx-3 my-3 px-4 py-3 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-between relative">


            <span className="flex items-center gap-3">

                <div className="w-10 h-10 flex items-center justify-center bg-blue-50 rounded-full">
                    <CiLocationOn className="text-blue-600 text-2xl" />
                </div>

                <p className="text-sm leading-tight text-gray-700">
                    <span className="text-xs text-gray-400">Deliver to</span>
                    <br />
                    <span className="font-semibold text-gray-900">
                        Meerut, 250344
                    </span>
                </p>

            </span>


            <button className="bg-blue-600 hover:bg-blue-700 active:scale-95 transition text-white text-xs font-semibold px-4 py-2 rounded-full shadow-md">
                Change
            </button>

        </div>
    )
}
export default Location;