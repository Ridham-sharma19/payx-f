import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../congig";
import { motion, AnimatePresence } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

export const SendMoney = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const id = searchParams.get("id");
  const name = searchParams.get("name") || "Recipient";
  const [amount, setAmount] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [showPopper, setShowPopper] = useState<"success" | "failure" | null>(null);

  const handleTransfer = async () => {
    if (!id) return toast.error("Receiver not found!");
    if (!amount || Number(amount) <= 0) return toast.error("Enter a valid amount.");

    try {
      setLoading(true);
      await api.post("/api/v1/user/account/transaction", {
        to: id,
        amount: Number(amount),
      });

      setShowPopper("success");
      toast.success("Transfer Successful!");
      setTimeout(() => navigate("/dashboard"), 3000);
    } catch (error: any) {
      setShowPopper("failure");
      toast.error(error.response?.data?.message || "Transfer failed");
      setTimeout(() => setShowPopper(null), 2500);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-50 p-6">
      <Toaster position="top-center" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative z-10 w-full max-w-sm bg-white rounded-3xl shadow-2xl border border-blue-50 p-6"
      >
        <div className="flex flex-col items-center text-center space-y-5">
        
          <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-blue-100">
            {name.charAt(0).toUpperCase()}
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-gray-800">Send to {name}</h2>
            <p className="text-[10px] text-gray-400 font-bold tracking-[0.2em]">SECURE GATEWAY</p>
          </div>

         
          <div className="w-full relative group">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">₹</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="w-full bg-gray-50 border-none rounded-2xl pl-10 pr-4 py-4 text-xl font-semibold text-gray-800 focus:ring-2 focus:ring-blue-500 transition-all outline-none"
            />
          </div>

       
          <div className="grid grid-cols-2 gap-3 w-full">
            <button
              onClick={() => navigate("/dashboard")}
              className="py-4 rounded-2xl font-bold text-white bg-black hover:bg-gray-800 transition-all active:scale-95 shadow-sm"
            >
              Cancel
            </button>
            
            <button
              onClick={handleTransfer}
              disabled={loading}
              className={`py-4 rounded-2xl font-bold text-white transition-all shadow-md ${
                loading ? "bg-blue-300" : "bg-blue-600 hover:bg-blue-700 active:scale-95 shadow-blue-200"
              }`}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </div>


        <AnimatePresence>
          {showPopper && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              {[...Array(60)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 1, scale: 0 }}
                  animate={{ 
                    opacity: 0, 
                    scale: Math.random() * 1.5,
                    x: (Math.random() - 0.5) * 600, 
                    y: (Math.random() - 0.5) * 600,
                  }}
                  transition={{ duration: 1.5, ease: [0.1, 0.6, 0.3, 1] }}
                  className={`absolute w-2 h-2 rounded-full ${
                    showPopper === "success" ? "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" : "bg-red-500"
                  }`}
                />
              ))}
            </div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};