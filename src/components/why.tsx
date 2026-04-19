import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wallet, Smartphone, Zap } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const features: Feature[] = [
  {
    title: 'Easy Bill Payments',
    description: 'Pay utility bills, subscriptions, and more with just a few taps.',
    icon: Wallet,
  },
  {
    title: 'Mobile Recharges',
    description: 'Top up your phone instantly for any network, anywhere in the country.',
    icon: Smartphone,
  },
  {
    title: 'Instant Transfers',
    description: 'Send money to friends and family in real-time with zero fees.',
    icon: Zap,
  },
];

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  const IconComponent = feature.icon;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

 
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();

    setMousePosition({
      x: clientX - left,
      y: clientY - top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
        delay: index * 0.2,
      }}
      className="relative overflow-hidden bg-white p-8 rounded-xl shadow-md transition-shadow duration-300 group hover:shadow-2xl"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <AnimatePresence>
        {isHovering && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none absolute -inset-px z-0 rounded-xl"
            style={{
              background: `
                radial-gradient(
                  150px circle at ${mousePosition.x}px ${mousePosition.y}px,
                  rgba(0, 180, 0, 0.1),
                  transparent 80%
                )
              `,
            }}
          />
        )}
      </AnimatePresence>

      <div className="relative z-10">
        <motion.div 
            whileHover={{ y: -5, scale: 1.1 }} 
            className="w-16 h-16 bg-[#00baf2]/10 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <IconComponent className="text-[#00baf2]"  />
        </motion.div>
        
        <h3 className="text-xl font-semibold text-[#002970] mb-2">
          {feature.title}
        </h3>
        <p className="text-gray-600">{feature.description}</p>
      </div>
    </motion.div>
  );
};

export default function WhyChoosePayX() {
  return (
    <section className="py-16 px-4 md:px-8 text-center bg-gray-50/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-[#002970] mb-4"
        >
          Why Choose PayX?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg"
        >
          Experience the future of digital payments with features designed for
          speed, security, and convenience.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}