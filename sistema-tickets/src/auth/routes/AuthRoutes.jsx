import { Routes, Route, Navigate } from "react-router-dom"
import { LoginPage, RegisterPage } from "../pages"
import { DashboardPage } from "../pages/DashboardPage"





export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/auth/login" />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/auth/dashboard" element={<DashboardPage />} />

        <Route path="/*" element={<Navigate to="/auth/login" />} />

    </Routes>
  )
}
