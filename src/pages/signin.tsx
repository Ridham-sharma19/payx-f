import { BottomWarning } from "../components/bottomwarning";
import { Button } from "../components/btn";
import { Heading } from "../components/heading";
import { InputBox } from "../components/input";
import { SubHeading } from "../components/subheading";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; // ✅ import js-cookie

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:8000/api/v1/user/login", {
        email,
        password,
      });

     
      const { accessToken, refreshToken } = res.data.data;

     
      Cookies.set("accessToken", accessToken, {
        expires: 1, 
        secure: true, 
        sameSite: "Strict",
      });

      Cookies.set("refreshToken", refreshToken, {
        expires: 7, 
        secure: true,
        sameSite: "Strict",
      });
      Cookies.set("email",email,{
        expires: 7, 
        secure: true,
        sameSite: "Strict",

      })

      
      navigate("/dashboard");
    } catch (error: any) {
      console.error("Login failed:", error.response?.data || error.message);
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign in"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox
            placeholder="johndoe@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            label={"Email"}
          />
          <InputBox
            placeholder="123456"
            onChange={(e) => setPassword(e.target.value)}
            label={"Password"}
          />
          <div className="pt-4">
            <Button label={"Sign in"} onClick={login} />
          </div>
          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
};
