import { Input, Button, IconButton } from "@material-tailwind/react";
import React, { useState } from "react";
import { FiEye, FiEyeOff, FiArrowLeft } from "react-icons/fi";
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
          <div className="h-auto py-12 rounded-xl shadow-xl bg-white/90">
            <div className="cursor-pointer" onClick={()=>{navigate(-1)}}>
              <FiArrowLeft className="text-4xl mx-5 -mt-6 text-center" />
            </div>
            <div className="mx-2 text-center -mt-8">
            <h1 className="text-2xl mb-2 font-bold">Analyse des données</h1>
                <p className="text-xl w-9/12 text-center text-white/10">
                  ----------------------------------------
                </p>
            </div>
            
            <div className="flex justify-center px-16 w-full py-16">
              <div className="space-y-4 w-full">
                <Button
                  variant="outlined"
                  color="amber"
                  className="flex text-black duration-300 ease-in-out hover:bg-orange-400 hover:text-white w-full justify-around items-center gap-3"
                >
                  <p className="text-md font-semibold w-5/6">Seuil température</p>
                </Button>
                <Button
                  variant="outlined"
                  color="amber"
                  className="flex text-black duration-300 ease-in-out hover:bg-orange-400 hover:text-white w-full justify-around items-center gap-3"
                >
                  <p className="text-md font-semibold w-5/6">Seuil pression</p>
                </Button>
                <Button
                  variant="outlined"
                  color="amber"
                  className="flex text-black duration-300 ease-in-out hover:bg-orange-400 hover:text-white w-full justify-around items-center gap-3"
                >
                  <p className="text-md font-semibold w-5/6">Prédiction panne</p>
                </Button>
                <Button
                  variant="outlined"
                  color="amber"
                  className="flex text-black duration-300 ease-in-out hover:bg-orange-400 hover:text-white w-full justify-around items-center gap-3"
                >
                  <p className="text-md font-semibold w-5/6">Programmation maintenance</p>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
