import {createContext, useState, useEffect} from 'react'
import { axiosClient } from "../config/api";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
    const signin = async (user) => {
        try {
          //const res = await loginRequest(user);
          const response = await axiosClient.post("/login");
          if (res.data.username.includes("admin")) {
            setIsAdmin(true);
          } else {
            setIsAdmin(false);
          }
          setIsAuthenticated(true);
          setUser(res.data);
        } catch (error) {
          if (Array.isArray(error.response.data)) {
            return setErrors(error.response.data);
          }
          setErrors([error.response.data.message]);
        }
      };
  return (
    <div>AuthContext</div>
  )
}
