import { Input, Button, IconButton } from "@material-tailwind/react";
import React, { useState } from "react";
import { FiEye, FiEyeOff, FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Logo from "../../../../assets/img/fec.png";

export default function Main() {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const onChange = ({ target }) => setPassword(target.value);
  let navigate = useNavigate();

  return (
    <>
      <div className="ring h-screen bg-login bg-no-repeat bg-contain bg-center">
        <div className="w-full h-full flex items-center mx-auto justify-around container">
          <div className="h-auto py-6 rounded-xl shadow-xl bg-white/90">
          <div className="cursor-pointer" onClick={()=>{navigate("/")}}>
              <FiArrowLeft className="text-4xl mx-5 -mt-2 text-center" />
            </div>
            {/* <h1 className="text-3xl pb-6 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-main to-second">Synes</h1> */}
            <h1 className="text-3xl text-center pb-6 font-bold text-second">
            <span className="bg-main rounded-lg px-2">FE</span> C
            </h1>
            <form action="">
              <div className="flex mx-6 flex-col justify-center items-center">
                <h1 className="text-2xl mb-12 font-bold">Connexion</h1>
                <p className="text-xl mb-6 w-9/12 text-center">
                  Hey, entrez vos informations personnelles pour vous connecter
                </p>
                <div className="w-full my-1">
                  <Input label="Nom d'utilisateur" color="amber" className="py-3" />
                </div>
                <div className="w-full my-6">
                  <div className="relative flex">
                    <Input
                      type={show ? "text" : "password"}
                      label="Mot de passe"
                      color="amber"
                      value={password}
                      onChange={onChange}
                      className="py-3"
                      containerProps={{
                        className: "",
                      }}
                    />
                    <IconButton
                      variant="text"
                      size="md"
                      disabled={!password}
                      color="white"
                      className={`${
                        password ? "text-amber-400" : ""
                      } !absolute right-1 top-1 bg-transparent rounded cursor-pointer`}
                      onClick={() => setShow(!show)}
                    >
                      {show ? (
                        <FiEyeOff className="text-2xl" />
                      ) : (
                        <FiEye className="text-2xl" />
                      )}
                    </IconButton>
                  </div>
                </div>
                <div className="w-full flex justify-center mt-6">
                  <Button
                    color="amber"
                    onClick={() => navigate("/two")}
                    className="bg-main normal-case text-xl text-black mx-auto w-10/12 py-3"
                    size="lg"
                  >
                    Se connecter
                  </Button>
                </div>

                <div className="text-xl text-center mt-6">
                  <span>Vous n'avez pas de compte ?</span>
                </div>
                <a href="/register" className="text-main">
                  Créer un compte
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
