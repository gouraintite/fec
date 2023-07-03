import { Button } from "@material-tailwind/react";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";


export default function Main() {
  let navigate = useNavigate();

  return (
    <>
      <div className="ring h-screen bg-login bg-no-repeat bg-contain bg-center">
        <div className="w-full h-full flex items-center mx-auto justify-around container">
          <div className="h-auto py-12 rounded-xl shadow-xl bg-white/90">
            <div className="cursor-pointer" onClick={()=>{navigate(-1)}}>
              <FiArrowLeft className="text-4xl mx-5 -mt-6 text-center cursor-pointer" onClick={()=>{navigate(-1)}} />
            </div>
            <div className="mx-2 text-center -mt-8">
            <h1 className="text-2xl mb-2 font-bold">Archives</h1>
                <p className="text-xl w-9/12 text-center text-white/80">
                  ----------------------------------------
                </p>
            </div>
            
            <div className="flex justify-center px-12 w-full py-12">
              <div className="space-y-4 w-full">
                <Button
                  
                  variant="outlined"
                  color="amber"
                  className="flex text-black duration-300 ease-in-out hover:bg-orange-400 hover:text-white w-full justify-around items-center gap-3"
                >
                  <p className="text-md font-semibold w-5/6">Historique des alertes incendies </p>
                </Button>
                <Button
                  
                  variant="outlined"
                  color="amber"
                  className="flex text-black duration-300 ease-in-out hover:bg-orange-400 hover:text-white w-full justify-around items-center gap-3"
                >
                  <p className="text-md font-semibold w-5/6">Historique de la variation de pression </p>
                </Button>
                <Button
                  
                  variant="outlined"
                  color="amber"
                  className="flex text-black duration-300 ease-in-out hover:bg-orange-400 hover:text-white w-full justify-around items-center gap-3"
                >
                  <p className="text-md font-semibold w-5/6">Historique des défaillances</p>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
