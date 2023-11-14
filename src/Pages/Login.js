import React from "react";
import astrenLogo from "../assets/AstrenLogo 1.png";
import OAuth from "../Components/OAuth";



export default function Login() {
  return (
    <div className="login bg-[#14012a] h-[100vh] w-[100vw] grid place-items-center">
      <div className="login-container p-[100px] text-center bg-[#220246] rounded-xl shadow-md">
        <img className="object-contain mb-10" src={astrenLogo} alt="" />
        <div className="login-text">
          <h1 className="text-white">Sign in to Astren Empower</h1>
        </div>
        <button
          className="bg-gradient-to-r from-[#5A33C4] via-[#B649A3] to-[#FF0040] text-white mt-12 p-3 uppercase rounded-md font-medium"
        >
          Sign In With Email
        </button>
        {/* sign in with google */}
        <OAuth/>
      </div>
    </div>
  );
}
