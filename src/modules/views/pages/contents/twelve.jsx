import { Button } from "@material-tailwind/react";
import React from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Main() {
  let navigate = useNavigate();

  return (
    <>
      <div className="ring h-screen bg-login bg-no-repeat bg-contain bg-center">
        <div className="w-full h-full flex items-center mx-auto justify-around container">
          <div className="h-auto py-12 rounded-xl shadow-xl bg-white/95">

          <div className="flex justify-between w-9/12 px-4">
              <div
                className="cursor-pointer"
                onClick={() => {
                  navigate(-1);
                }}
              >
                <FiArrowLeft className="text-4xl -mt-6 text-center" />
              </div>
              <div className=" text-center -mt-8">
                <h1 className="text-2xl mb-2 font-bold">Stockage</h1>
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
            
            <div className="flex justify-center px-16 w-full py-24">
              <div className="space-y-4 w-full">
                <Button
                  
                  variant="outlined"
                  color="amber"
                  className="flex text-black duration-300 ease-in-out hover:bg-orange-400 hover:text-white w-full justify-around items-center gap-3"
                >
                  <p className="text-lg font-semibold w-5/6">Documents</p>
                </Button>
                <Button
                  
                  variant="outlined"
                  color="amber"
                  className="flex text-black duration-300 ease-in-out hover:bg-orange-400 hover:text-white w-full justify-around items-center gap-3"
                >
                  <p className="text-lg font-semibold w-5/6">Archives</p>
                </Button>
                <Button
                  
                  variant="outlined"
                  color="amber"
                  className="flex text-black duration-300 ease-in-out hover:bg-orange-400 hover:text-white w-full justify-around items-center gap-3"
                >
                  <p className="text-lg font-semibold w-5/6">Autres</p>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
