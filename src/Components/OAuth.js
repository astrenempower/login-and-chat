import React, { useEffect, useState } from "react";
import { auth, db, provider } from "../firebase";
import {signInWithPopup} from "firebase/auth"
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { toast } from 'react-toastify'
import {useNavigate} from "react-router-dom"




export default function OAuth() {

  // oauth login
  const navigate = useNavigate();

  async function onGoogleSignin(){
     try {
      const result = await signInWithPopup(auth, provider)
      const user= result.user


      // check if user exists
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef)
      if(!docSnap.exists()){
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp()
        })
      }
      navigate("/rooms/:roomId")
      
     } catch (error) {
      toast.error("Could not authorize with google")
      
     }
  }

  return (
  
    <div>
        <button
          className="bg-gradient-to-r from-[#5A33C4] via-[#B649A3] to-[#FF0040] text-white mt-12 p-3 uppercase rounded-md font-medium"
          onClick={onGoogleSignin}
        >
          Sign In With Google
        </button>
    </div>
  );
}
