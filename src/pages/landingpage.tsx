import React from "react";
import { useNavigate } from "react-router-dom";
import Payx from "../components/payxcard";
import HeroContent from "../components/heroContent";
import Logo from "../components/logo";
import WhyChoosePayX from "../components/why";
import Footer from "../components/footer";

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
       <WhyChoosePayX/>
      </section>
      <Footer/>
    </div>
  );
};

export default LandingPage;