import { Link } from "react-router-dom";
import { FaApple, FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


function SigninPage() {
    return (
        <div className="flex flex-col sm:flex-row w-full min-h-screen bg-white">

            <div className="hidden sm:block sm:w-1/2 bg-amber-300 min-h-screen p-3">
            </div>

            <div className="w-full sm:w-1/2 flex items-center justify-center px-6 py-10">
                <div className="w-full max-w-sm">

                    <h1 className="text-center text-4xl text-gray-700 font-semibold">Sign in</h1>
                    <p className="text-center text-gray-400 text-sm mt-2">Hii Welcome back, you've been missed</p>

                    <form className="mt-10 flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="Email"
                            className="text-sm font-medium text-gray-700"
                            >Email</label>
                            <input type="email" placeholder="exemple@gmail.com" required
                            className="p-3 border border-orange-500/40 rounded-xl outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="Password"
                            className="text-sm font-medium text-gray-700"
                            >Password</label>
                            <input type="password" required minLength={8} placeholder="Enter 8 digit password"
                            className="p-3 border border-orange-500/40 rounded-xl outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition"
                            />
                        </div>

                        <Link to="/forgot-password" className="text-right text-sm text-orange-400 hover:text-orange-500 underline underline-offset-2 -mt-1">
                            Forget Password
                        </Link>

                        <button type="submit" className="w-full py-3 mt-1 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-2xl transition">
                            Sign in
                        </button>

                        <div className="flex items-center gap-3 my-1">
                            <div className="h-px flex-1 bg-gray-200" />
                            <span className="text-xs text-gray-400 whitespace-nowrap">or sign in with</span>
                            <div className="h-px flex-1 bg-gray-200" />
                        </div>

                        <div className="flex justify-center gap-4">
                            <span className="p-3 rounded-full border border-gray-200 cursor-pointer hover:bg-gray-50 hover:border-gray-300 transition">
                                <FaApple className="text-2xl" />
                            </span>

                            <span className="p-3 rounded-full border border-gray-200 cursor-pointer hover:bg-gray-50 hover:border-gray-300 transition">
                                <FcGoogle className="text-2xl" />
                            </span>

                            <span className="p-3 rounded-full border border-gray-200 cursor-pointer hover:bg-gray-50 hover:border-gray-300 transition">
                                <FaFacebookF className="text-2xl text-blue-600" />
                            </span>
                        </div>

                        <div className="flex justify-center gap-1 text-sm text-gray-500 mt-2">
                            <p>Don't have an account?</p>
                            <Link to="/SignupPage" className="text-orange-500 font-medium hover:text-orange-600">
                                Sign up
                            </Link>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}
export default SigninPage;