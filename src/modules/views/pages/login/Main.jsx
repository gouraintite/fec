import { Input, Button, IconButton } from "@material-tailwind/react";
import React, { useState } from "react";
import { FiEye, FiEyeOff, FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Logo from "../../../../assets/img/logo.png";

export default function Main() {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const onChange = ({ target }) => setPassword(target.value);
  let navigate = useNavigate();

  return (
    <>
      <div className="ring h-screen bg-login bg-no-repeat bg-contain bg-center">
        <div className="w-full h-full flex items-center mx-auto justify-around container">
          <div className="h-auto py-16 rounded-xl shadow-xl bg-white/95">
          <div className="cursor-pointer" onClick={()=>{navigate(-1)}}>
              <FiArrowLeft className="text-4xl mx-5 -mt-6 text-center" />
            </div>
            {/* <h1 className="text-3xl pb-6 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-main to-second">Synes</h1> */}
            <h1 className="text-3xl text-center pb-6 font-bold text-second">
              <span className="bg-main rounded-lg px-1">Sy</span> nes
            </h1>
            <form action="">
              <div className="flex mx-6 flex-col justify-center items-center">
                <h1 className="text-2xl mb-12 font-bold">Login</h1>
                <p className="text-xl mb-6 w-9/12 text-center">
                  Hey, enter your details to get sign in to your account
                </p>
                <div className="w-full my-1">
                  <Input label="Username" color="amber" className="py-6" />
                </div>
                <div className="w-full my-12">
                  <div className="relative flex">
                    <Input
                      type={show ? "text" : "password"}
                      label="Password"
                      color="amber"
                      value={password}
                      onChange={onChange}
                      className="py-6"
                      containerProps={{
                        className: "",
                      }}
                    />
                    <IconButton
                      variant="text"
                      size="md"
                      disabled={!password}
                      color="white"
                      className={`${
                        password ? "text-amber-400" : ""
                      } !absolute right-1 top-1 bg-transparent rounded cursor-pointer`}
                      onClick={() => setShow(!show)}
                    >
                      {show ? (
                        <FiEyeOff className="text-2xl" />
                      ) : (
                        <FiEye className="text-2xl" />
                      )}
                    </IconButton>
                  </div>
                </div>
                <div className="w-full flex justify-center mt-12">
                  <Button
                    color="amber"
                    onClick={() => navigate("/two")}
                    className="bg-main normal-case text-xl text-black mx-auto w-10/12 py-3"
                    size="lg"
                  >
                    Log in
                  </Button>
                </div>

                <div className="text-xl text-center mt-6">
                  Don't have an account?
                </div>
                <a href="/register" className="text-main">
                  Register
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}