import { useState } from "react";
import { BottomWarning } from "../components/bottomwarning";
import { Button } from "../components/btn";
import { Heading } from "../components/heading";
import { InputBox } from "../components/input";
import { SubHeading } from "../components/subheading";
import { useNavigate } from "react-router-dom";
import { api } from "../congig"; 

export const Signup = () => {
  const [fullname, setFullName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const register = async () => {
    if (!fullname || !username || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);
       await api.post("/api/v1/user/register", {
        fullname,
        username,
        password,
        email,
      });

      
      navigate("/signin");
    } catch (error: any) {
      console.error("Registration failed:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Registration failed! Please check your input.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label="Sign up" />
          <SubHeading label="Enter your information to create an account" />

          <InputBox
            placeholder="John"
            label="Full Name"
            onChange={(e) => setFullName(e.target.value)}
          />

          <InputBox
            placeholder="Joh123"
            label="User Name"
            onChange={(e) => setUserName(e.target.value)}
          />

          <InputBox
            placeholder="johndoe@gmail.com"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputBox
            placeholder="123456"
            label="Password"
           type="passord"
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="pt-4">
            <Button label={loading ? "Signing up..." : "Sign up"} onClick={register} />
          </div>

          <BottomWarning
            label="Already have an account?"
            buttonText="Sign in"
            to="/signin"
          />
        </div>
      </div>
    </div>
  );
};
