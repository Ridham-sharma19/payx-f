import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function HeroContent() {
  const navigate = useNavigate();
  const fullText = "Simple Fast Secure";
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    /* Changed space-y-8 back to space-y-4 or 5 for tighter grouping */
    <div className="space-y-5 text-center md:text-left">
      
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <span className="inline-block text-sm font-semibold text-[#00baf2] bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
          Trusted by 1+ users
        </span>
      </motion.div>

     
      <h2 className="text-4xl md:text-6xl font-bold text-[#002970] leading-tight min-h-[60px] md:min-h-[110px] tracking-tight">
        {text}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block ml-1 w-1 h-10 md:h-14 bg-[#00baf2] align-middle"
        />
      </h2>

   
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-gray-600 max-w-lg mx-auto md:mx-0 text-lg leading-relaxed"
      >
        Simple Fast and Secure Payments at Your Fingertips.
        <br />
        Experience the future of digital transactions with PayX.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="pt-2" 
      >
        <motion.button
          onClick={() => navigate("/signin")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 bg-[#002970] text-white px-4 py-3 rounded-lg font-semibold hover:bg-[#001f52]  l"
        >
          Get Started <ArrowRight size={20} />
        </motion.button>
      </motion.div>
    </div>
  );
}