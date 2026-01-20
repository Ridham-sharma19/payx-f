import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ShieldCheck, Zap, Wallet, CreditCard, Smartphone } from "lucide-react";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
    
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center border-b border-gray-200">
        <h1 className="text-2xl font-bold text-[#002970]">
          Pay<span className="text-[#00baf2]">X</span>
        </h1>
        <button
          onClick={() => navigate("/signin")}
          className="text-sm font-medium text-[#002970] hover:text-[#00baf2] transition-colors duration-200"
        >
          Sign In
        </button>
      </nav>


      <main className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 text-center md:text-left">
          <span className="inline-block text-sm font-semibold text-[#00baf2] bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
            Trusted by 1+ users
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-[#002970] leading-tight">
            Simple. Fast. <br />
            Secure Payments.
          </h2>

          <p className="text-gray-600 max-w-lg mx-auto md:mx-0 text-lg leading-relaxed">
            Pay bills, recharge, and transfer money instantly using a secure digital wallet designed for modern life.
          </p>

          <button
            onClick={() => navigate("/signin")}
            className="inline-flex items-center gap-3 bg-[#002970] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#001f52] transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get Started <ArrowRight size={20} />
          </button>
        </div>

  
        <div className="flex justify-center">
          <div className="relative w-72 h-[480px] bg-gradient-to-br from-[#002970] to-[#001f52] rounded-3xl p-6 text-white shadow-2xl">
       
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-b-2xl"></div>
            
            <div className="mt-12">
              <p className="text-xs opacity-80 uppercase tracking-wide">Available Balance</p>
              <h3 className="text-3xl font-bold mt-2">₹48,250</h3>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="h-20 bg-white/10 rounded-2xl flex items-center justify-center">
                <Wallet className="text-[#00baf2]" size={24} />
              </div>
              <div className="h-20 bg-white/10 rounded-2xl flex items-center justify-center">
                <Zap className="text-[#00baf2]" size={24} />
              </div>
              <div className="h-20 bg-white/10 rounded-2xl flex items-center justify-center">
                <ShieldCheck className="text-[#00baf2]" size={24} />
              </div>
              <div className="h-20 bg-white/10 rounded-2xl flex items-center justify-center">
                <ArrowRight className="text-[#00baf2]" size={24} />
              </div>
            </div>

           
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-white/30 rounded-full"></div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002970] mb-4">
            Why Choose PayX?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
            Experience the future of digital payments with features designed for speed, security, and convenience.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-[#00baf2]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="text-[#00baf2]" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-[#002970] mb-2">Easy Bill Payments</h3>
              <p className="text-gray-600">Pay utility bills, subscriptions, and more with just a few taps.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-[#00baf2]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="text-[#00baf2]" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-[#002970] mb-2">Mobile Recharges</h3>
              <p className="text-gray-600">Top up your phone instantly for any network, anywhere in the country.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-[#00baf2]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-[#00baf2]" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-[#002970] mb-2">Instant Transfers</h3>
              <p className="text-gray-600">Send money to friends and family in real-time with zero fees.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;