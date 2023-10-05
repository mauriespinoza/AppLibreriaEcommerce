import { createContext, useState, useEffect } from "react";
import { axiosClient } from "../config/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [token, setToken]= useState('');
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);

  const signin = async (user) => {
    try {
      const response = await axiosClient.post("/login",user);
      console.log(`signin.response.token: ${JSON.stringify(response.data)}`)
      if(response.data){
        setToken(response.data);
      } else {
        setToken('');
      }
      setIsAuthenticated(true);
      setUser(response.data);
    } catch (error) {
      console.log(error)
      setErrors([error.response.data.message]);
    }
  };

  const singup = async (user) => {
    try{
      console.log(`singup: ${user}`)
       const response = await axiosClient.post("/users", user);
       console.log(`singup.response.token: ${JSON.stringify(response.data)}`)
      if(response.data){
        setUser(response.data);
      } else {
        setUser('');
      }
    } catch(error){
      console.log(error)
      setErrors([error.response.data.message]);
    }
  }
  return (
    <AuthContext.Provider 
      value={{
        signin,
        isAuthenticated,
        setErrors,
        setToken,
        token,
        setIsAuthenticated,
        singup,
        user,
        setUser,
      }}>
        {children}
      </AuthContext.Provider>
  );
};
