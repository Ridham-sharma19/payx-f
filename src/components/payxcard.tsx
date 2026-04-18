import { motion, useMotionValue, useTransform } from "framer-motion";
import { Wallet, Zap, ShieldCheck, TrendingUp } from "lucide-react";

export default function Payx() {
  const items = [
    { Icon: Wallet, label: "Wallet" },
    { Icon: Zap, label: "Quick" },
    { Icon: ShieldCheck, label: "Secure" },
    { Icon: TrendingUp, label: "Growth" }
  ];


  const x = useMotionValue(0);
  const y = useMotionValue(0);


  const rotateX = useTransform(y, [-150, 150], [8, -8]);
  const rotateY = useTransform(x, [-150, 150], [-8, 8]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div className="[perspective:1000px]">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
        className="relative w-[320px] h-[460px] rounded-3xl p-6 text-white shadow-xl border border-white/10
        bg-gradient-to-br from-[#0f4cff] via-[#0061ff] to-[#003bb5]"
      >
     
        <div className="absolute inset-0 rounded-3xl bg-white/5 blur-xl opacity-20 pointer-events-none" />

      
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-b-2xl" />

      
        <div style={{ transform: "translateZ(40px)" }} className="mt-12">
          <p className="text-xs uppercase tracking-wide text-white/70">
            Available Balance
          </p>
          <h3 className="text-3xl font-semibold mt-2">₹150</h3>
        </div>

        <div
          className="mt-8 grid grid-cols-2 gap-4"
          style={{ transform: "translateZ(25px)" }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10
              flex flex-col items-center justify-center"
            >
              <item.Icon className="w-5 h-5 text-white mb-1" />
              <span className="text-xs text-white/80">{item.label}</span>
            </motion.div>
          ))}
        </div>

  
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-16 h-1 bg-white/30 rounded-full" />
      </motion.div>
    </div>
  );
}