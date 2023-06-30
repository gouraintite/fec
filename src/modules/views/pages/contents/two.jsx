import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import {
  BellAlertIcon,
  ChevronRightIcon,
  ArrowTrendingUpIcon,
  Cog8ToothIcon,
  ArchiveBoxIcon
} from "@heroicons/react/24/outline";
import { BiSolidCrown } from "react-icons/bi";
import { FiArrowLeft } from "react-icons/fi";
export default function Main() {
  let navigate = useNavigate();

  return (
    <>
      <div className="ring h-screen bg-login bg-no-repeat bg-contain bg-center">
        <div className="w-full h-full flex items-center mx-auto justify-around container">
          <div className="h-auto py-16 rounded-xl shadow-xl bg-white/95">
          <div className="cursor-pointer" onClick={()=>{navigate('/one')}}>
              <FiArrowLeft className="text-4xl mx-5 -mt-6 text-center" />
            </div>
            <div>
              <div className="flex mx-6 flex-col justify-center items-center">
                <h1 className="text-2xl mb-12 font-bold">Menu</h1>
              </div>
            </div>
            <div className="flex justify-center px-16 w-full">
              <div className="space-y-4 w-full">
                <Button
                  onClick={()=>{navigate('/three')}}
                  variant="outlined"
                  color="amber"
                  className="flex text-black hover:text-orange-600 w-full justify-around items-center gap-3"
                >
                  <BiSolidCrown strokeWidth={2} className="h-5 w-5" />
                  <p className="text-md font-semibold w-5/6">Surveillance</p>
                  <ChevronRightIcon strokeWidth={3} className="h-5 w-5" />
                </Button>
                <Button
                  onClick={()=>{navigate('/four')}}
                  variant="outlined"
                  color="amber"
                  className="flex text-black hover:text-orange-600 w-full justify-around items-center gap-3"
                >
                  <ArrowTrendingUpIcon strokeWidth={2} className="h-5 w-5" />
                  <p className="text-md font-semibold">Analyse de données</p>
                  <ChevronRightIcon strokeWidth={3} className="h-5 w-5" />
                </Button>
                <Button
                  onClick={()=>{navigate('/five')}}
                  variant="outlined"
                  color="amber"
                  className="flex text-black hover:text-orange-600 w-full justify-around items-center gap-3"
                >
                  <BellAlertIcon strokeWidth={2} className="h-5 w-5" />
                  <p className="text-md font-semibold w-5/6">Alertes</p>
                  <ChevronRightIcon strokeWidth={3} className="h-5 w-5" />
                </Button>
                <Button
                  onClick={()=>{navigate('/twelve')}}
                  variant="outlined"
                  color="amber"
                  className="flex text-black hover:text-orange-600 w-full justify-around items-center gap-3"
                >
                  <ArchiveBoxIcon strokeWidth={2} className="h-5 w-5" />
                  <p className="text-md font-semibold w-5/6">Stockage</p>
                  <ChevronRightIcon strokeWidth={3} className="h-5 w-5" />
                </Button>
                <Button
                  onClick={()=>{navigate('/six')}}
                  variant="outlined"
                  color="amber"
                  className="flex text-black hover:text-orange-600 w-full justify-around items-center gap-3"
                >
                  <Cog8ToothIcon strokeWidth={2} className="h-5 w-5" />
                  <p className="text-md font-semibold w-5/6">Paramètres</p>
                  <ChevronRightIcon strokeWidth={3} className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
