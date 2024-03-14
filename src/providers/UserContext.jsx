import { children, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/index";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
   const [techList, setTechList] = useState([]);
   const [user, setUser] = useState();
   const [loading, setLoading] = useState(false);

   const navigate = useNavigate();

   const userLogout = () => {
      setUser(null);
      localStorage.removeItem("@kenziehub:@TOKEN");
      localStorage.removeItem("@kenziehub:@USERID");
   }

   const submitUserInfo = (userInfo) => {
      createUser(userInfo);
   }

   const createUser = async (payload) => {
      const { confirmPassword, ...rest } = payload;
      try {
         const { data } = await api.post("/users", rest);

         localStorage.setItem("@kenziehub:token", data.id) || [];
         toast.success("Conta criada com sucesso!");
         setUser(data.user);

         navigate("/");
      } catch (error) {
         toast.error(`Ops! Algo deu errado (Erro: ${error.response.status})`);
      }
   }

   const handleUserLogin = (useInfoLogin) => {
      getUserRegistraded(useInfoLogin);
   }

   const getUserRegistraded = async (payload) => {
      try {
         const { data } = await api.post("/sessions", payload);
         const { token, user } = data;

         localStorage.setItem("@kenziehub:@TOKEN", token) || [];
         localStorage.setItem("@kenziehub:@USERID", user.id) || [];
         setUser(user);
         setTechList(user.techs);

         navigate("./dashboard");
      } catch (error) {
         toast.error("Ops! Algo deu errado");
      }
   }

   useEffect(() => {
      const loadUser = async () => {
         const token = localStorage.getItem("@kenziehub:@TOKEN");
         const userId = localStorage.getItem("@kenziehub:@USERID");

         if (token && userId) {
            try {
               setLoading(true);

               const { data } = await api.get("/profile", {
                  headers: {
                     "Authorization": ` Bearer ${token}`
                  }
               })
               setUser(data);
               setTechList(data.techs);

               navigate("/dashboard");
            } catch (error) {
               toast.error(error);
               localStorage.clear();
            } finally {
               setLoading(false);
            }
         }
      }
      loadUser();
   }, [])

   return (
      <UserContext.Provider value={{
         user,
         setUser,
         loading,
         handleUserLogin,
         submitUserInfo,
         userLogout,
         setTechList,
         techList
      }}>
         {children}
      </UserContext.Provider>
   )
}