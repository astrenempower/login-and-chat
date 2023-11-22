import React, { useState } from "react";
import astrenLogo from "../assets/AstrenLogo 1.png";
import OAuth from "../Components/OAuth";
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import {toast} from 'react-toastify'
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";



export default function Signup() {

    // hide and show password
    const [showPassword, setShowPassword] = useState(false)

    // get email and password and destructure it
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    })
    const {name, email, password} = formData;
    const navigate = useNavigate();
    // update form content
    function onChange(e){
        setFormData((prevState)=> ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
    }

    async function onSubmit(e){
        e.preventDefault();

        try {
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password);

            updateProfile(auth.currentUser,{
              displayName: name
            })
            const user = userCredentials.user

            const formDataCopy = { ...formData}
            delete formDataCopy.password
            // timestamp
            formDataCopy.timestamp = serverTimestamp()

            await setDoc(doc(db, "users", user.uid), formDataCopy)
            toast.success("Signup Successful")
            navigate("/rooms/:roomID")

            
        } catch (error) {
            toast.error("Something went wrong")
        }
    }

  return (
    <div className="login bg-[#14012a] h-[100vh] w-[100vw] grid place-items-center">
      <div className="login-container p-[100px] text-center bg-[#220246] rounded-xl shadow-md">
        <img className="object-contain mb-10" src={astrenLogo} alt="" />
        <div className="login-text">
          <h1 className="text-white">Sign Up to Astren Empower</h1>
        </div>
        <form onSubmit={onSubmit}>
         <input  
                    type="text" 
                    id="name" 
                    value={name}
                    onChange={onChange}
                    placeholder="Full name"
                    className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out '/>
         <input  
                    type="email" 
                    id="email" 
                    value={email}
                    onChange={onChange}
                    placeholder="Email Address"
                    className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out '/>
        <div className='relative mb-6'>
                        <input  
                        type={showPassword ? "text": "password"} 
                        id="password" 
                        value={password}
                        onChange={onChange}
                        placeholder="Password"
                        className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out '/>
                       
                        {showPassword ? <AiFillEyeInvisible className='absolute right-3 top-3 text-xl cursor-pointer' onClick={()=> setShowPassword((prevState) =>!prevState)}/> : <AiFillEye className='absolute right-3 top-3 text-xl cursor-pointer' onClick={()=> setShowPassword((prevState) =>!prevState)}/>}

        </div>
        <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
                        <p className='mb-6'>Have an account? 
                            <Link to="/sign-in" className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out ml-1'> Sign Up</Link>
                        </p>
                        <p>
                            <Link to="/forgot-password" className='text-red-600 hover:text-red-800 transition duration-200 ease-in-out'> Forgot password?</Link>
                        </p>
        </div>
        <button
          className="bg-gradient-to-r from-[#5A33C4] via-[#B649A3] to-[#FF0040] text-white mt-12 p-3 uppercase rounded-md font-medium"
        >
          Sign Up With Email
        </button>
        <div className='flex items-center my-4 before:border-t  before:flex-1  before:border-gray-300 after:border-t  after:flex-1  after:border-gray-300'>
                        <p className='text-center font-semibold mx-4'>OR</p>
        </div>

        {/* sign in with google */}
        <OAuth/>
        </form>
      </div>
    </div>
  );
}
