import { useNavigate, useLocation } from "react-router-dom";

function OrderSuccess() {
    const navigate = useNavigate();
    const location = useLocation();

    // TODO: pass these from Checkout via navigate("/order-success", { state: { orderId, total } })
    const orderId = location.state?.orderId || "UC" + Math.floor(100000 + Math.random() * 900000);
    const total = location.state?.total || 0;

    const estimatedDate = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <div className="flex min-h-screen items-center justify-center bg-white px-4 py-10">
            <div className="w-full max-w-md rounded-2xl border border-gray-100 p-6 text-center shadow-sm sm:p-10">

                {/* Success icon */}
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-black sm:h-20 sm:w-20">
                    <svg
                        className="h-8 w-8 text-white sm:h-10 sm:w-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>

                <p className="mb-2 text-xs font-medium uppercase tracking-widest text-gray-400">
                    UrbanCart
                </p>

                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    Thank you for your order!
                </h1>

                <p className="mt-2 text-sm text-gray-500">
                    Your order has been placed successfully. We've sent a confirmation to your phone.
                </p>

                {/* Order details */}
                <div className="mt-6 space-y-3 rounded-xl bg-gray-50 p-4 text-left sm:p-5">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-medium uppercase tracking-wide text-gray-400">
                            Order ID
                        </span>
                        <span className="text-sm font-semibold text-gray-900">
                            #{orderId}
                        </span>
                    </div>

                    {total > 0 && (
                        <div className="flex items-center justify-between border-t border-gray-200 pt-3">
                            <span className="text-xs font-medium uppercase tracking-wide text-gray-400">
                                Amount Paid
                            </span>
                            <span className="text-sm font-semibold text-gray-900">
                                ₹{total}
                            </span>
                        </div>
                    )}

                    <div className="flex items-center justify-between border-t border-gray-200 pt-3">
                        <span className="text-xs font-medium uppercase tracking-wide text-gray-400">
                            Estimated Delivery
                        </span>
                        <span className="text-sm font-semibold text-gray-900">
                            {estimatedDate}
                        </span>
                    </div>
                </div>

                {/* Actions */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <button
                        onClick={() => navigate("/orders")}
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-50 active:scale-95 sm:w-1/2"
                    >
                        Track Order
                    </button>
                    <button
                        onClick={() => navigate("/")}
                        className="w-full rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-gray-800 active:scale-95 sm:w-1/2"
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OrderSuccess;