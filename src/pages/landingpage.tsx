import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Zap, CreditCard, Smartphone } from "lucide-react";

import Payx from "../components/payxcard";
import HeroContent from "../components/heroContent";
import Logo from "../components/logo";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
    
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center border-b border-gray-200">
        <Logo/>
        <button
          onClick={() => navigate("/signin")}
          className="text-sm font-medium text-[#002970] hover:text-[#00baf2] transition-colors duration-200"
        >
          Sign In
        </button>
      </nav>


      <main className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 text-center md:text-left">
          <HeroContent/>
        </div>

  
        <div className="flex justify-center">
          <Payx />
        </div>
      </main>

   
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