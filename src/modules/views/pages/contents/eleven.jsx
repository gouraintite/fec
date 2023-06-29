import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const onChange = ({ target }) => setPassword(target.value);
  let navigate = useNavigate();

  return (
    <>
      <div className="ring h-screen bg-login bg-no-repeat bg-contain bg-center">
        <div className="w-full h-full flex items-center mx-auto justify-around container">
          <div className="h-auto py-12 rounded-xl shadow-xl bg-white/95">

          <div className="flex justify-between w-9/12 px-3">
              <div
                className="cursor-pointer"
                onClick={() => {
                  navigate('/ten');
                }}
              >
                <FiArrowLeft className="text-4xl -mt-6 text-center" />
              </div>
              <div className="mx-0 text-center -mt-8">
                <h1 className="text-2xl mb-2 font-bold">Contatez-nous</h1>
                <p className="text-xl text-center text-white/10">
                  --------------------------------
                </p>
              </div>
              <div  
                className="cursor-pointer"
                onClick={() => {
                  navigate("/twelve");
                }}
              >
                <FiArrowRight className="text-4xl -mt-6 text-center" />
              </div>
            </div>
            <div className="flex justify-center px-16 w-full bg-white py-12">
              <div className="space-y-4 w-full">
                <div className="pt-4 w-full">
                  <a href="mailto:fireextinguisher@gmail.net">
                    <Button
                      onClick={() => {
                        navigate("/eight");
                      }}
                      variant="outlined"
                      color="amber"
                      className="flex text-black duration-300 ease-in-out hover:bg-orange-400 hover:text-white w-full justify-around items-center gap-3"
                    >
                      <p className="text-lg normal-case font-semibold w-5/6">
                        E-mail: fireextinguisher@gmail.net
                      </p>
                    </Button>
                  </a>
                </div>
                <div className="pt-4 w-full">
                  <a href="tel:+237670167002">
                    <Button
                      onClick={() => {
                        navigate("/eight");
                      }}
                      variant="outlined"
                      color="amber"
                      className="flex text-black duration-300 ease-in-out hover:bg-orange-400 hover:text-white w-full justify-around items-center gap-3"
                    >
                      <p className="text-lg font-semibold w-5/6">
                        Tel: 6 70 16 70 02
                      </p>
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
