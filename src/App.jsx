import { useState } from "react";
import { calculateInvestmentResults, formatter } from "./util/investment"
import Header from "./components/Header";
import UserInput from "./components/UserInput";

function App() {

  return ( 
      <>
        <Header/>
        <UserInput/>         
      </>      
    )
  }

export default App
