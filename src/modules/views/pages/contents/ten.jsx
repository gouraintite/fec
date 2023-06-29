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
          <div className="h-auto py-12 rounded-xl shadow-xl bg-white/95">
            <div className="flex justify-between w-9/12  px-3">
              <div
                className="cursor-pointer"
                onClick={() => {
                  navigate(-1);
                }}
              >
                <FiArrowLeft className="text-4xl -mt-6 text-center" />
              </div>
              <div className="mx-0 text-center -mt-8">
                <h1 className="text-2xl mb-2 font-bold">À Propos de nous</h1>
                <p className="text-xl text-center text-white/10">
                  --------------------------------
                </p>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => {
                  navigate("/eleven");
                }}
              >
                <FiArrowRight className="text-4xl -mt-6 text-center" />
              </div>
            </div>
            <div className="flex justify-center px-16 w-full bg-white py-24">
              <p className="text-justify text-xl">
                <span className="font-semibold">Fire Extinguisher</span> est une
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
