import { Routes, Route } from "react-router-dom";
import { RequireAuth } from "../contexts/Auth/RequireAuth";
import { Home } from "../pages/Home";
import { SignUp } from "../pages/SignUp";
import { TransactionPage } from "../pages/TransactionPage";


export const AppRouter = () =>{
    return(
        <Routes>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/" element={<RequireAuth><TransactionPage /></RequireAuth>} />
            <Route path="/home" element={<RequireAuth><Home /></RequireAuth>} />
        </Routes>
    )
}