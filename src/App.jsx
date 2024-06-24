import { useState , useEffect} from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Membership from "./components/Membership";
import Footer from "./components/Footer";

export default function App(){
  return(
    <>
      <Navbar/>
      <Hero/>
      <Benefits/>
      <Membership/>
      <Footer/>
    </>
  )
}