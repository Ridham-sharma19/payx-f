import { BottomWarning } from "../components/bottomwarning";
import { Button } from "../components/btn";
import { Heading } from "../components/heading";
import { InputBox } from "../components/input";
import { SubHeading } from "../components/subheading";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../congig"; // make sure api has withCredentials: true

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // optional loading state
  const navigate = useNavigate();

  const login = async () => {
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/api/v1/user/login", { email, password });

   
      navigate("/dashboard");
    } catch (error: any) {
      console.error("Login failed:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Invalid email or password!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
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

          <div className="pt-4">
            <Button label={loading ? "Signing in..." : "Sign in"} onClick={login} />
          </div>

          <BottomWarning
            label="Don't have an account?"
            buttonText="Sign up"
            to="/signup"
          />
        </div>
      </div>
    </div>
  );
};
