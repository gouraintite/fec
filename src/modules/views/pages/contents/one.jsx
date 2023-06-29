import { Button } from "@material-tailwind/react";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Main() {  
  let navigate = useNavigate();
  return (
    <>
      <div className="ring h-screen bg-login bg-no-repeat bg-contain bg-center">
        <div className="w-full h-full flex items-center mx-auto justify-around container">
          <div className="h-auto py-16 rounded-xl shadow-xl bg-white/95">
            {/* <h1 className="text-3axl pb-6 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-main to-second">Synes</h1> */}
            <h1 className="text-6xl text-center pb-6 font-bold text-second">
              <span className="bg-main rounded-lg px-3">FE</span> C
            </h1>
            <div>
              <div className="flex mx-6 flex-col justify-center items-center">
                <h1 className="text-2xl mb-12 font-bold">Bienvenue...</h1>
                <p className="text-2xl mb-6 p-16 text-center">
                  Fire Extinguisher Control
                </p>
              </div>
            </div>
            <div className="flex mx-auto justify-center text-center">
            <Button
              color="amber"
              buttonType="filled"
              size="lg"
              block={false}
              iconOnly={false}
              onClick={() => navigate("/register")}
              ripple="light"
              className="w-1/2 mx-6 text-center text-black flex justify-center bg-main my-6"
            > <span>Continuer</span>
            <FiArrowRight className="text-2xl text-center" />
            </Button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
