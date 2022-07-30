import React, { useContext, useEffect, useReducer, useState } from "react"


import reducer from "./reducer";

const AppContext = React.createContext()



const AppProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer)



  



   return <AppContext.Provider
    value={{
      
    }}
  >
    {children}
  </AppContext.Provider>

}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppProvider, AppContext }