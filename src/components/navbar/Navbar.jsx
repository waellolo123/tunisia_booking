"use client";
import Link from "next/link";
import {AiOutlineHome, AiOutlineUser} from "react-icons/ai";
import {signOut} from "next-auth";

import { useEffect, useState } from "react";

const Navbar = () => {

  const [showModal, setShowModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleModal = () => setShowModal(prev => !prev);

  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.scrollY === 0 ? false : true);
      return () => (window.onscroll = null)
    }
  })

  return (
    <div className={`fixed z-20 h-16 w-full top-0 left-0 ${isScrolled ? "shadow-md backdrop-blur bg-white" : ""} `}>
     <div className="h-full px-6 md:p-0  md:w-2/3  mx-auto flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2 transition-all">
        <h1 className={`${isScrolled ? "text-blue-600" : "text-[#cec7c7]"} text-2xl font-bold`}>Tunisia Booking</h1>
        <AiOutlineHome size={25} color={`${isScrolled ? "rgb(37 99 235)" : "#cec7c7"}`}/>
      </Link>
      <div className="cursor-pointer" onClick={toggleModal}>
        <AiOutlineUser size={25} color={`${isScrolled ? "rgb(37 99 235)" : "#cec7c7"}`} />
      </div>
     </div>
     <div className="">
      {showModal && (
        <div className="absolute top-16 right-[270px] shadow-md flex flex-col gap-4 p-4 rounded-md" onClick={toggleModal}>
          <Link href="/reservations" className="text-slate-500">Reservations</Link>
          <button className="text-slate-500 text-center" onClick={() => signOut()}>Logout</button>
        </div>
      )}
     </div>
    </div>
  )
}

export default Navbar;