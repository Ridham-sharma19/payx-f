import { useState } from "react";
import { BottomWarning } from "../components/bottomwarning";
import { Button } from "../components/btn";
import { Heading } from "../components/heading";
import { InputBox } from "../components/input";
import { SubHeading } from "../components/subheading";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../congig";

export const Signup = () => {
  const [fullname, setFullName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const register = async () => {
    axios.post(`${BACKEND_URL}/api/v1/user/register`, {
      fullname,
      username,
      password,
      email,
    });
    navigate("/dashboard");
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your infromation to create an account"} />
          <InputBox
            placeholder="John"
            label={"Full Name"}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
          <InputBox
            placeholder="Joh123"
            label={"User Name"}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />

          <InputBox
            placeholder="johndoe@gmail.com"
            label={"Email"}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <InputBox
            placeholder="123456"
            label={"Password"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="pt-4">
            <Button label={"Sign up"} onClick={register} />
          </div>
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign in"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
};
