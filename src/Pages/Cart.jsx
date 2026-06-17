import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  ShieldCheck,
  CreditCard,
  Wallet,
  Smartphone,
  CheckCircle2,
  Truck,
  Edit2,
  MapPin,
  Phone,
  Clock,
  AlertCircle,
  Eye,
  EyeOff,
  Percent,
  IndianRupee,
  ArrowRight,
  Check,
  X,
  Plus,
} from "lucide-react";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import MobileNav from "../Components/MobileNav";

function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state;


  // ============== STATES ==============
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [upiMethod, setUpiMethod] = useState("scanner");
  const [showCardPassword, setShowCardPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(0);
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    cardHolder: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [cardErrors, setCardErrors] = useState({});

  // ============== ADDRESS DATA ==============
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Vansh verma",
      address: "21 Rajpur Road, Near Clock Tower",
      city: "Dehradun",
      state: "Uttarakhand",
      zip: "248001",
      phone: "+91 XXXXXXXX89",
      isDefault: true,
      type: "Home",
    },
   
  ]);

  const [newAddress, setNewAddress] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    type: "Home",
  });

  // ============== PROMO CODES ==============
  const promoCodes = {
    SAVE500: { discount: 500, maxUse: true },
    SAVE1000: { discount: 1000, maxUse: false },
    WELCOME: { discount: 300, maxUse: true },
    FLAT20: { discount: "20%", maxUse: false },
  };

  // ============== NO PRODUCT CHECK ==============
  if (!product) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center gap-6">
        <AlertCircle size={64} className="text-red-500" />
        <h1 className="text-4xl font-bold">No Product Found</h1>
        <p className="text-gray-600 text-lg">Please select a product first</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  // ============== CALCULATIONS ==============
  const subtotal = product.price * product.quantity;
  const shipping = subtotal > 500 ? 0 : 99;
  let discount = 0;

  if (appliedPromo) {
    const promoValue = promoCodes[appliedPromo].discount;
    if (typeof promoValue === "string") {
      discount = Math.floor(subtotal * (parseInt(promoValue) / 100));
    } else {
      discount = promoValue;
    }
  }

  const total = subtotal + shipping - discount;
  const savings = discount;

  // ============== CARD VALIDATION ==============
  const validateCard = () => {
    const errors = {};

    if (!formData.cardHolder.trim()) {
      errors.cardHolder = "Card holder name required";
    }

    if (!formData.cardNumber.replace(/\s/g, "").match(/^\d{13,19}$/)) {
      errors.cardNumber = "Invalid card number";
    }

    if (!formData.expiry.match(/^(0[1-9]|1[0-2])\/\d{2}$/)) {
      errors.expiry = "Use MM/YY format";
    }

    if (!formData.cvv.match(/^\d{3,4}$/)) {
      errors.cvv = "Invalid CVV";
    }

    setCardErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateAddress = () => {
    if (!newAddress.name.trim()) return false;
    if (!newAddress.address.trim()) return false;
    if (!newAddress.city.trim()) return false;
    if (!newAddress.state.trim()) return false;
    if (!newAddress.zip.match(/^\d{6}$/)) return false;
    if (!newAddress.phone.match(/^[0-9]{10}$/)) return false;
    return true;
  };

  // ============== HANDLERS ==============
  const handleAddAddress = () => {
    if (!validateAddress()) {
      alert("Please fill all fields correctly");
      return;
    }

    const newAddr = {
      id: addresses.length + 1,
      ...newAddress,
      isDefault: false,
    };

    setAddresses([...addresses, newAddr]);
    setNewAddress({
      name: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      phone: "",
      type: "Home",
    });
    setShowAddressForm(false);
    setSelectedAddress(addresses.length);
  };

  const handleApplyPromo = () => {
    if (!promoCode.trim()) {
      alert("Enter promo code");
      return;
    }

    if (!promoCodes[promoCode.toUpperCase()]) {
      alert("Invalid promo code");
      return;
    }

    setAppliedPromo(promoCode.toUpperCase());
    setPromoCode("");
  };

  const handlePayment = async () => {
    if (paymentMethod === "upi" && upiMethod === "bank") {
      if (!validateCard()) return;
    }

    if (!termsAccepted) {
      alert("Please accept terms and conditions");
      return;
    }

    setLoading(true);

    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      setOrderPlaced(true);

      // Store order in localStorage
      const order = {
        orderId: "ORD" + Date.now(),
        product: product.name,
        amount: total,
        paymentMethod,
        address: addresses[selectedAddress],
        date: new Date().toLocaleDateString(),
        status: "Processing",
      };

      const orders = JSON.parse(localStorage.getItem("orders")) || [];
      localStorage.setItem("orders", JSON.stringify([...orders, order]));

      // Redirect after 3 seconds
      setTimeout(() => {
        navigate("/order-confirmation", { state: { order } });
      }, 3000);
    }, 2000);
  };

  const formatCardNumber = (value) => {
    return value
      .replace(/\s/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim();
  };

  useEffect(() => {

  if (orderPlaced) {

    setTimeout(() => {

      navigate("/");

    }, 3000);

  }

}, [orderPlaced]);
  // ============== ORDER CONFIRMATION MODAL ==============
  if (orderPlaced) {
    return (
      <div className="w-full h-screen bg-black/50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 text-center max-w-sm w-full animate-pulse">
          <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-4">
            <Check size={48} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold">Payment Successful!</h2>
          <p className="text-gray-600 mt-2">Redirecting to order tracking...</p>
          <div className="mt-6 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-green-500 animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  // ============== MAIN RENDER ==============
  return (
    <>
      <Navbar />

      <section className="w-full min-h-screen bg-gray-50 pb-24 lg:pb-10">
        {/* STICKY HEADER */}
        <div className="w-full bg-white border-b sticky top-0 z-40 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-xl md:text-2xl font-bold">Secure Checkout</h1>
              <p className="text-gray-500 text-xs md:text-sm mt-0.5">
                Complete your payment safely
              </p>
            </div>

            <div className="hidden md:flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              <ShieldCheck size={18} />
              100% Secure
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-6 grid lg:grid-cols-[1.3fr_1fr] gap-6 lg:gap-8">
          {/* LEFT SECTION */}
          <div className="flex flex-col gap-6">
            {/* ADDRESS SECTION */}
            <div className="bg-white rounded-2xl border shadow-sm p-5 md:p-6 hover:shadow-md transition">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold">
                    Delivery Address
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">
                    Choose where to deliver
                  </p>
                </div>
                <CheckCircle2 className="text-green-600 hidden md:block" size={28} />
              </div>

              {/* ADDRESS TABS */}
              <div className="space-y-3 mt-5">
                {addresses.map((addr, idx) => (
                  <div
                    key={addr.id}
                    onClick={() => setSelectedAddress(idx)}
                    className={`border-2 rounded-2xl p-4 cursor-pointer transition-all ${
                      selectedAddress === idx
                        ? "border-black bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-base md:text-lg">
                            {addr.name}
                          </h3>
                          <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">
                            {addr.type}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mt-2 leading-6">
                          {addr.address}, {addr.city}, {addr.state} -{" "}
                          {addr.zip}
                        </p>
                        <p className="text-gray-600 text-sm mt-2 flex items-center gap-2">
                          <Phone size={14} /> {addr.phone}
                        </p>
                      </div>
                      <input
                        type="radio"
                        checked={selectedAddress === idx}
                        readOnly
                        className="w-5 h-5 mt-1"
                      />
                    </div>
                  </div>
                ))}

                {/* ADD ADDRESS BUTTON */}
                <button
                  onClick={() => setShowAddressForm(true)}
                  className="w-full border-2 border-dashed border-gray-300 rounded-2xl p-4 text-gray-600 hover:text-black hover:border-black transition flex items-center justify-center gap-2"
                >
                  <Plus size={20} />
                  <span className="font-medium">Add New Address</span>
                </button>

                {/* ADD ADDRESS FORM */}
                {showAddressForm && (
                  <div className="border-2 border-blue-300 bg-blue-50 rounded-2xl p-4 space-y-3">
                    <div className="grid md:grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={newAddress.name}
                        onChange={(e) =>
                          setNewAddress({
                            ...newAddress,
                            name: e.target.value,
                          })
                        }
                        className="h-11 border rounded-lg px-4 outline-none focus:border-black text-sm"
                      />
                      <input
                        type="tel"
                        placeholder="Phone (10 digits)"
                        value={newAddress.phone}
                        onChange={(e) =>
                          setNewAddress({
                            ...newAddress,
                            phone: e.target.value.replace(/\D/g, "").slice(0, 10),
                          })
                        }
                        className="h-11 border rounded-lg px-4 outline-none focus:border-black text-sm"
                      />
                    </div>

                    <input
                      type="text"
                      placeholder="Street Address"
                      value={newAddress.address}
                      onChange={(e) =>
                        setNewAddress({
                          ...newAddress,
                          address: e.target.value,
                        })
                      }
                      className="w-full h-11 border rounded-lg px-4 outline-none focus:border-black text-sm"
                    />

                    <div className="grid grid-cols-3 gap-3">
                      <input
                        type="text"
                        placeholder="City"
                        value={newAddress.city}
                        onChange={(e) =>
                          setNewAddress({
                            ...newAddress,
                            city: e.target.value,
                          })
                        }
                        className="h-11 border rounded-lg px-4 outline-none focus:border-black text-sm"
                      />
                      <input
                        type="text"
                        placeholder="State"
                        value={newAddress.state}
                        onChange={(e) =>
                          setNewAddress({
                            ...newAddress,
                            state: e.target.value,
                          })
                        }
                        className="h-11 border rounded-lg px-4 outline-none focus:border-black text-sm"
                      />
                      <input
                        type="text"
                        placeholder="PIN Code"
                        value={newAddress.zip}
                        onChange={(e) =>
                          setNewAddress({
                            ...newAddress,
                            zip: e.target.value.replace(/\D/g, "").slice(0, 6),
                          })
                        }
                        className="h-11 border rounded-lg px-4 outline-none focus:border-black text-sm"
                      />
                    </div>

                    <select
                      value={newAddress.type}
                      onChange={(e) =>
                        setNewAddress({
                          ...newAddress,
                          type: e.target.value,
                        })
                      }
                      className="w-full h-11 border rounded-lg px-4 outline-none focus:border-black text-sm"
                    >
                      <option>Home</option>
                      <option>Work</option>
                      <option>Other</option>
                    </select>

                    <div className="flex gap-2">
                      <button
                        onClick={handleAddAddress}
                        className="flex-1 h-11 bg-black text-white rounded-lg font-medium text-sm hover:bg-gray-800 transition"
                      >
                        Save Address
                      </button>
                      <button
                        onClick={() => setShowAddressForm(false)}
                        className="flex-1 h-11 border rounded-lg font-medium text-sm hover:bg-gray-50 transition"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* PAYMENT METHOD SECTION */}
            <div className="bg-white rounded-2xl border shadow-sm p-5 md:p-6 hover:shadow-md transition">
              <h2 className="text-xl md:text-2xl font-bold">Payment Method</h2>
              <p className="text-gray-500 text-sm mt-1">
                Choose your preferred payment option
              </p>

              <div className="space-y-4 mt-6">
                {/* ONLINE PAYMENT */}
                <div
                  onClick={() => setPaymentMethod("upi")}
                  className={`rounded-2xl border-2 p-4 cursor-pointer transition-all ${
                    paymentMethod === "upi"
                      ? "border-black bg-purple-50"
                      : "border-gray-200"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                        <Wallet className="text-purple-600" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-base md:text-lg">
                          Online Payment
                        </h3>
                        <p className="text-xs md:text-sm text-gray-500">
                          UPI, Cards, Wallets
                        </p>
                      </div>
                    </div>
                    <input
                      type="radio"
                      checked={paymentMethod === "upi"}
                      readOnly
                      className="w-5 h-5"
                    />
                  </div>

                  {/* UPI OPTIONS */}
                  {paymentMethod === "upi" && (
                    <div className="mt-5 space-y-4">
                      <div className="flex gap-2 flex-wrap">
                        <button
                          onClick={() => setUpiMethod("scanner")}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                            upiMethod === "scanner"
                              ? "bg-black text-white"
                              : "border hover:border-black"
                          }`}
                        >
                          📱 Scan QR
                        </button>
                        <button
                          onClick={() => setUpiMethod("bank")}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                            upiMethod === "bank"
                              ? "bg-black text-white"
                              : "border hover:border-black"
                          }`}
                        >
                          💳 Card Payment
                        </button>
                        <button
                          onClick={() => setUpiMethod("wallet")}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                            upiMethod === "wallet"
                              ? "bg-black text-white"
                              : "border hover:border-black"
                          }`}
                        >
                          👛 Wallet
                        </button>
                        <button
                          onClick={() => setUpiMethod("netbanking")}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                            upiMethod === "netbanking"
                              ? "bg-black text-white"
                              : "border hover:border-black"
                          }`}
                        >
                          🏦 Net Banking
                        </button>
                      </div>

                      {/* QR SCANNER */}
                      {upiMethod === "scanner" && (
                        <div className="border rounded-2xl p-5 bg-gradient-to-b from-purple-50 to-white">
                          <div className="flex flex-col items-center text-center">
                            <div className="w-40 h-40 rounded-2xl overflow-hidden border-4 border-purple-300 p-3 bg-white shadow-lg">
                              <img
                                src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=payment-demo"
                                alt="QR Code"
                                className="w-full h-full"
                              />
                            </div>
                            <h3 className="mt-4 text-lg font-bold">Scan & Pay</h3>
                            <p className="text-gray-600 text-sm mt-2 leading-6">
                              Use any UPI app to scan this QR code and complete
                              your payment instantly
                            </p>

                            <div className="flex gap-2 flex-wrap justify-center mt-4">
                              {["Google Pay", "PhonePe", "Paytm", "BHIM"].map(
                                (app) => (
                                  <div
                                    key={app}
                                    className="bg-gray-100 px-3 py-1 rounded-lg text-xs font-medium"
                                  >
                                    {app}
                                  </div>
                                )
                              )}
                            </div>

                            <div className="mt-4 w-full bg-blue-100 border border-blue-300 rounded-lg p-3 text-left text-xs text-blue-700">
                              <strong>ℹ️ Note:</strong> Use any UPI app installed
                              on your phone to scan and pay
                            </div>
                          </div>
                        </div>
                      )}

                      {/* CARD PAYMENT */}
                      {upiMethod === "bank" && (
                        <div className="border rounded-2xl p-5 bg-gradient-to-b from-blue-50 to-white">
                          <div className="flex items-center gap-2 mb-4">
                            <CreditCard className="text-blue-600" size={24} />
                            <h3 className="text-lg font-bold">Card Payment</h3>
                          </div>

                          <div className="space-y-3">
                            <div>
                              <label className="text-sm font-medium text-gray-700">
                                Cardholder Name
                              </label>
                              <input
                                type="text"
                                placeholder="Enter name on card"
                                value={formData.cardHolder}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    cardHolder: e.target.value,
                                  })
                                }
                                className={`w-full h-11 border rounded-lg px-4 outline-none focus:border-black text-sm mt-1 ${
                                  cardErrors.cardHolder ? "border-red-500" : ""
                                }`}
                              />
                              {cardErrors.cardHolder && (
                                <p className="text-red-500 text-xs mt-1">
                                  {cardErrors.cardHolder}
                                </p>
                              )}
                            </div>

                            <div>
                              <label className="text-sm font-medium text-gray-700">
                                Card Number
                              </label>
                              <input
                                type="text"
                                placeholder="1234 5678 9012 3456"
                                value={formData.cardNumber}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    cardNumber: formatCardNumber(e.target.value),
                                  })
                                }
                                maxLength="19"
                                className={`w-full h-11 border rounded-lg px-4 outline-none focus:border-black text-sm mt-1 tracking-widest ${
                                  cardErrors.cardNumber ? "border-red-500" : ""
                                }`}
                              />
                              {cardErrors.cardNumber && (
                                <p className="text-red-500 text-xs mt-1">
                                  {cardErrors.cardNumber}
                                </p>
                              )}
                            </div>

                            <div className="grid grid-cols-3 gap-3">
                              <div>
                                <label className="text-sm font-medium text-gray-700">
                                  Expiry
                                </label>
                                <input
                                  type="text"
                                  placeholder="MM/YY"
                                  value={formData.expiry}
                                  onChange={(e) => {
                                    let val = e.target.value.replace(/\D/g, "");
                                    if (val.length >= 2) {
                                      val =
                                        val.slice(0, 2) +
                                        "/" +
                                        val.slice(2, 4);
                                    }
                                    setFormData({
                                      ...formData,
                                      expiry: val,
                                    });
                                  }}
                                  maxLength="5"
                                  className={`w-full h-11 border rounded-lg px-4 outline-none focus:border-black text-sm mt-1 ${
                                    cardErrors.expiry ? "border-red-500" : ""
                                  }`}
                                />
                                {cardErrors.expiry && (
                                  <p className="text-red-500 text-xs mt-1">
                                    {cardErrors.expiry}
                                  </p>
                                )}
                              </div>

                              <div className="col-span-2">
                                <label className="text-sm font-medium text-gray-700">
                                  CVV
                                </label>
                                <div className="relative mt-1">
                                  <input
                                    type={
                                      showCardPassword ? "text" : "password"
                                    }
                                    placeholder="123"
                                    value={formData.cvv}
                                    onChange={(e) =>
                                      setFormData({
                                        ...formData,
                                        cvv: e.target.value
                                          .replace(/\D/g, "")
                                          .slice(0, 4),
                                      })
                                    }
                                    maxLength="4"
                                    className={`w-full h-11 border rounded-lg px-4 pr-10 outline-none focus:border-black text-sm ${
                                      cardErrors.cvv ? "border-red-500" : ""
                                    }`}
                                  />
                                  <button
                                    onClick={() =>
                                      setShowCardPassword(!showCardPassword)
                                    }
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
                                  >
                                    {showCardPassword ? (
                                      <EyeOff size={16} />
                                    ) : (
                                      <Eye size={16} />
                                    )}
                                  </button>
                                </div>
                                {cardErrors.cvv && (
                                  <p className="text-red-500 text-xs mt-1">
                                    {cardErrors.cvv}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* WALLET */}
                      {upiMethod === "wallet" && (
                        <div className="border rounded-2xl p-5 bg-gradient-to-b from-green-50 to-white text-center">
                          <Wallet size={48} className="text-green-600 mx-auto" />
                          <h3 className="text-lg font-bold mt-3">
                            Digital Wallet
                          </h3>
                          <p className="text-gray-600 text-sm mt-2">
                            PayPal, Amazon Pay, Apple Pay
                          </p>
                          <button className="w-full mt-4 h-11 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition">
                            Connect Wallet
                          </button>
                        </div>
                      )}

                      {/* NET BANKING */}
                      {upiMethod === "netbanking" && (
                        <div className="border rounded-2xl p-5 bg-gradient-to-b from-orange-50 to-white">
                          <h3 className="text-lg font-bold mb-4">
                            Select Bank
                          </h3>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {[
                              "HDFC",
                              "ICICI",
                              "SBI",
                              "Axis",
                              "IDBI",
                              "Kotak",
                            ].map((bank) => (
                              <button
                                key={bank}
                                className="h-11 border rounded-lg font-medium text-sm hover:bg-orange-50 hover:border-orange-600 transition"
                              >
                                {bank}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* EMI OPTION */}
                <div
                  onClick={() => setPaymentMethod("emi")}
                  className={`rounded-2xl border-2 p-4 cursor-pointer transition-all ${
                    paymentMethod === "emi"
                      ? "border-black bg-amber-50"
                      : "border-gray-200"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                        <Percent className="text-amber-600" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-base md:text-lg">
                          EMI Options
                        </h3>
                        <p className="text-xs md:text-sm text-gray-500">
                          0% interest available
                        </p>
                      </div>
                    </div>
                    <input
                      type="radio"
                      checked={paymentMethod === "emi"}
                      readOnly
                      className="w-5 h-5"
                    />
                  </div>

                  {paymentMethod === "emi" && (
                    <div className="mt-4 space-y-2 bg-amber-50 p-3 rounded-lg">
                      {[3, 6, 12].map((months) => (
                        <div
                          key={months}
                          className="flex items-center justify-between text-sm"
                        >
                          <span className="font-medium">{months} Months</span>
                          <span className="text-gray-600">
                            ₹{Math.ceil(total / months)}/month
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* COD */}
                <div
                  onClick={() => setPaymentMethod("cod")}
                  className={`rounded-2xl border-2 p-4 cursor-pointer transition-all ${
                    paymentMethod === "cod"
                      ? "border-black bg-orange-50"
                      : "border-gray-200"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                        <Truck className="text-orange-600" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-base md:text-lg">
                          Cash on Delivery
                        </h3>
                        <p className="text-xs md:text-sm text-gray-500">
                          Pay at your doorstep
                        </p>
                      </div>
                    </div>
                    <input
                      type="radio"
                      checked={paymentMethod === "cod"}
                      readOnly
                      className="w-5 h-5"
                    />
                  </div>

                  {paymentMethod === "cod" && (
                    <div className="mt-4 bg-orange-100 border border-orange-300 rounded-lg p-3 text-sm text-orange-700">
                      ✓ Keep exact amount ready for delivery
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION - ORDER SUMMARY */}
          <div>
            <div className="bg-white rounded-2xl border shadow-sm p-5 md:p-6 sticky top-20 hover:shadow-md transition">
              <h2 className="text-xl md:text-2xl font-bold">Order Summary</h2>

              {/* PRODUCT CARD */}
              <div className="mt-6 flex gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-24 h-24 md:w-28 md:h-28 bg-gray-200 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-base md:text-lg line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Size: <span className="font-medium">{product.size}</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Qty: <span className="font-medium">{product.quantity}</span>
                  </p>
                  <h2 className="text-lg md:text-xl font-bold mt-2 text-black">
                    ₹{subtotal}
                  </h2>
                </div>
              </div>

              {/* PROMO CODE */}
              <div className="mt-5">
                <label className="text-sm font-medium text-gray-700">
                  Have a promo code?
                </label>
                <div className="flex gap-2 mt-2">
                  <input
                    type="text"
                    placeholder="Enter code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                    className="flex-1 h-10 border rounded-lg px-3 outline-none focus:border-black text-sm"
                  />
                  <button
                    onClick={handleApplyPromo}
                    className="h-10 px-4 bg-gray-800 text-white rounded-lg text-sm font-medium hover:bg-black transition"
                  >
                    Apply
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Try: SAVE500, SAVE1000, WELCOME, FLAT20
                </p>

                {appliedPromo && (
                  <div className="mt-3 bg-green-50 border border-green-300 rounded-lg p-3 flex items-center justify-between">
                    <span className="text-green-700 text-sm font-medium">
                      ✓ {appliedPromo} applied
                    </span>
                    <button
                      onClick={() => setAppliedPromo(null)}
                      className="text-green-600 hover:text-green-800"
                    >
                      ✕
                    </button>
                  </div>
                )}
              </div>

              {/* PRICE BREAKDOWN */}
              <div className="mt-6 space-y-3 border-t pt-5">
                <div className="flex justify-between text-gray-600 text-sm">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>

                {shipping > 0 && (
                  <div className="flex justify-between text-gray-600 text-sm">
                    <span>Shipping</span>
                    <span>₹{shipping}</span>
                  </div>
                )}

                {savings > 0 && (
                  <div className="flex justify-between text-green-600 text-sm font-medium">
                    <span>Discount</span>
                    <span>-₹{savings}</span>
                  </div>
                )}

                {shipping === 0 && subtotal > 500 && (
                  <div className="text-xs text-green-600 font-medium">
                    ✓ FREE SHIPPING on orders above ₹500
                  </div>
                )}

                <div className="border-t pt-3 flex justify-between items-center">
                  <span className="text-base md:text-lg font-bold">Total</span>
                  <span className="text-2xl md:text-3xl font-bold text-black">
                    ₹{total}
                  </span>
                </div>
              </div>

              {/* SECURE BADGE */}
              <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <ShieldCheck
                    className="text-green-600 flex-shrink-0 mt-0.5"
                    size={20}
                  />
                  <div>
                    <h4 className="font-semibold text-green-900 text-sm">
                      Secure Checkout
                    </h4>
                    <p className="text-xs text-green-700 mt-1 leading-5">
                      All transactions are encrypted with SSL protection
                    </p>
                  </div>
                </div>
              </div>

              {/* DELIVERY INFO */}
              <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Clock className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="font-semibold text-blue-900 text-sm">
                      Delivery by{" "}
                      {new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                    </h4>
                    <p className="text-xs text-blue-700 mt-1">
                      Standard delivery available
                    </p>
                  </div>
                </div>
              </div>

              {/* TERMS */}
              <div className="mt-6 flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <input
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="w-4 h-4 mt-1 cursor-pointer"
                />
                <label className="text-xs md:text-sm text-gray-600 cursor-pointer flex-1">
                  I agree to the{" "}
                  <a href="#" className="font-semibold hover:underline">
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="font-semibold hover:underline">
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* BUTTON */}
              <button
                onClick={handlePayment}
                disabled={loading || !termsAccepted}
                className={`w-full h-14 rounded-xl font-bold text-lg mt-6 flex items-center justify-center gap-2 transition-all ${
                  loading || !termsAccepted
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-black text-white hover:bg-gray-800 active:scale-95"
                }`}
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Processing...
                  </>
                ) : paymentMethod === "cod" ? (
                  <>
                    <Check size={20} />
                    Place Order
                  </>
                ) : (
                  <>
                    <ArrowRight size={20} />
                    Pay ₹{total}
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center mt-3">
                This is a demo. No real charges will be made.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileNav />
    </>
  );
}

export default PaymentPage;