import { createContext, useState } from "react";
import run from "../config/gemini";
export const Context=createContext();
const ContextProvider=(props)=>{

   const [input,setInput]=useState("");
   const [recentPrompt,setRecentPrompt]=useState("");
   const [prevPrompts,setPrevPrompts]=useState([]);
   const [recentChatPrompts,setRecentChatPrompts]=useState([]);
   const [showResult,setShowResult]=useState(false);
   const [loading,setLoading]=useState(false);
   const [resultData,setResultData]=useState("");
   const [toggle,setToggle]=useState(false);

  const onSent=async (prompt)=>{
   setResultData("");
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(prompt);
   const response=await run(prompt);
   let responseArray=response.split("**");
   let newResponse="";
   for(let i=0;i<responseArray.length;i++)
   {  if(i===0 || i%2!==1)newResponse+=responseArray[i];
      else  newResponse += `<b style="font-weight:800">${responseArray[i]}</b>`; }

      let newResponse2=newResponse.split("*").join("</br>• ")
   setResultData(newResponse2);
   setLoading(false);
   
  }
  
  const contextValue={
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    prevPrompts,
    setPrevPrompts,
    showResult,
    setShowResult,
    loading,
    setLoading,
    resultData,
    setResultData,
    onSent,
    toggle,
    setToggle,
    recentChatPrompts,
    setRecentChatPrompts

  }
  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  )
}
export default ContextProvider;