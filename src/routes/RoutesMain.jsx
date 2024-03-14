import { Route, Routes, useNavigate } from "react-router-dom";

import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { ErrorPage } from "../pages/ErrorPage"
import { DashBoard } from "../pages/DashBoard";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";


export const RoutesMain = () => {
   return (
      <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/register" element={<Register />} />
         <Route path="/dashboard" element={<ProtectedRoutes />}>
            <Route index element={<DashBoard />} />
         </Route>
         <Route path="*" element={<ErrorPage />} />
      </Routes>
   );
}
