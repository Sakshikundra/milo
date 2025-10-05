import React ,{ createContext } from "react";
export const userDatacontext=createContext();
function Usercontext({children}) {
  
    const serverurl="http://localhost:8000";
    const value={serverurl};
    return(
    
    <userDatacontext.Provider value={value}>
      {children}
    </userDatacontext.Provider>
    
  );
}

export default Usercontext
//rfce se boilerplate for react functional component