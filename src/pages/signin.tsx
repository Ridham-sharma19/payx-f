import { BottomWarning } from "../components/bottomwarning";
import { Button } from "../components/btn";
import { Heading } from "../components/heading";
import { InputBox } from "../components/input";
import { SubHeading } from "../components/subheading";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../congig"; 
import { motion } from "motion/react"
import Logo from "../components/logo";


export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const login = async () => {
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    try {
      setLoading(true);

       await api.post("/api/v1/user/login", { email, password });

   
      navigate("/dashboard");
    } catch (error: any) {
      console.error("Login failed:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Invalid email or password!");
    } finally {
      setLoading(false);
    }
  };

  return (
   <div className="h-screen overflow-hidden grid grid-cols-1 md:grid-cols-2">
  
 
  <motion.div
    initial={{ x: -200, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{
      type: "spring",
      stiffness: 80,
      damping: 15
    }}

    className="relative bg-white flex flex-col justify-center items-center h-full"
  >
    
    <div className="absolute top-6 left-8">
      <Logo />
    </div>

  
    <div className="rounded-lg shadow-[-5px_11px_29px_3px_#e2e8f0] bg-white w-80 text-center p-2 h-max px-4">
      <Heading label="Sign in" />
      <SubHeading label="Enter your credentials to access your account" />

      <InputBox
        placeholder="johndoe@gmail.com"
        label="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <InputBox
        placeholder="123456"
        label="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="pt-4 w-full flex items-end justify-end">
        <Button label={loading ? "Signing in..." : "Sign in"} onClick={login} />
      </div>

      <BottomWarning
        label="Don't have an account?"
        buttonText="Sign up"
        to="/signup"
      />
    </div>
  </motion.div>

 
  <div className="hidden md:block md:col-span-1">
    <img 
      src="https://i.pinimg.com/webp/1200x/26/73/fc/2673fca2cb979d6dc190654711c5debf.webp"
      alt="Authentication background" 
      className="w-full h-full object-fill"
    />
  </div>
</div>
  );
};
