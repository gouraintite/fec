import React, { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
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
          <div className="h-auto py-12 rounded-xl shadow-xl w-11/12 bg-white/90">
            
          <div className="cursor-pointer" onClick={()=>{navigate(-1)}}>
              <FiArrowLeft className="text-4xl mx-5 -mt-6 text-center"  onClick={()=>{navigate(-1)}} />
            </div>
            <div className="mx-2 text-center -mt-8">
            <h1 className="text-2xl mb-2 font-bold">À propos de nous</h1>
                <p className="text-xl w-9/12 text-center text-white/10">
                  ----------------------------------------
                </p>
            </div>
            <div className="p-12 pt-6 px-4 w-full">
            <p className="font-semibold uppercase py-3 text-center text-xl">FIRE EXTINGUISHER CONTROL</p>
              <p className="text-justify text-xl"> est une
                application permettant de contrôler differents paramètres tels
                que la detection des départs de feu, et la pression de
                l'extincteur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
