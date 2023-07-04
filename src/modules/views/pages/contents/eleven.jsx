import { Button } from "@material-tailwind/react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Main() {
  let navigate = useNavigate();

  return (
    <>
      <div className="ring h-screen bg-login bg-no-repeat bg-contain bg-center">
        <div className="w-full h-full flex items-center mx-auto justify-around container">
          <div className="h-auto py-12 rounded-xl shadow-xl bg-white/90">

          <div className="flex justify-evenly mx-auto w-9/12">
              <div
                className="cursor-pointer"
                onClick={() => {
                  navigate(-1);
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
                className="cursor-pointer right-1"
                onClick={() => {
                  navigate("/twelve");
                }}
              >
                <FiArrowRight className="text-4xl -mt-6 text-center" />
              </div>
            </div>
            <div className="flex justify-center px-16 w-full py-12">
              <div className="space-y-4 w-full">
                <div className="pt-4 w-full">
                  <a href="mailto:fireextinguisher@gmail.net">
                    <Button
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
