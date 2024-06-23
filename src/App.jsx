import { useState , useEffect} from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";

export default function App(){
  return(
    <>
      <Navbar/>
      <Hero/>
      <Benefits/>
    </>
  )
}