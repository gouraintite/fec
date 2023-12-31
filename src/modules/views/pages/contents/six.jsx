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
            <h1 className="text-2xl mb-2 font-bold">Paramètres</h1>
                <p className="text-xl w-9/12 text-center text-white/10">
                  ----------------------------------------
                </p>
            </div>
            
            <div className="flex justify-center px-16 w-full py-12">
              <div className="space-y-4 w-full">
                <Button
                  onClick={()=>{navigate('/seven')}}
                  variant="outlined"
                  color="amber"
                  className="flex text-black duration-300 ease-in-out hover:bg-orange-400 hover:text-white w-full justify-around items-center gap-3"
                >
                  <p className="text-md font-semibold w-5/6">Compte</p>
                </Button>
                <Button
                  onClick={()=>{navigate('/eight')}}
                  variant="outlined"
                  color="amber"
                  className="flex text-black duration-300 ease-in-out hover:bg-orange-400 hover:text-white w-full justify-around items-center gap-3"
                >
                  <p className="text-md font-semibold w-5/6">changer de langue</p>
                </Button>
                <Button
                  variant="outlined"
                  color="amber"
                  className="flex text-black duration-300 ease-in-out hover:bg-orange-400 hover:text-white w-full justify-around items-center gap-3"
                >
                  <p className="text-md font-semibold w-5/6">Ajouter des paramètres</p>
                </Button>
                <Button
                  onClick={()=>{navigate('/ten')}}
                  variant="outlined"
                  color="amber"
                  className="flex text-black duration-300 ease-in-out hover:bg-orange-400 hover:text-white w-full justify-around items-center gap-3"
                >
                  <p className="text-md font-semibold w-5/6">À propos de nous</p>
                </Button>
                <Button
                  onClick={()=>{navigate('/eleven')}}
                  variant="outlined"
                  color="green"
                  className="flex text-white duration-300 ease-in-out bg-green-500/70 hover:bg-green-700 hover:text-white w-full justify-around items-center gap-3"
                >
                  <p className="text-md font-semibold w-5/6">Contactez-nous</p>
                </Button>
                <Button
                  variant="outlined"
                  color="amber"
                  className="flex text-white duration-300 ease-in-out bg-red-500/70 hover:bg-red-700 hover:text-white w-full justify-around items-center gap-3"
                >
                  <p className="text-md font-semibold w-5/6">
                    Déconnexion
                  </p>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
