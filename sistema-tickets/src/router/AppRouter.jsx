import { Routes, Route } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { TicketsRoutes } from "../tickets/routes/TicketsRoutes"

export const AppRouter = () => {
  return (
    <Routes>
        {/* login y registro de usuarios */}
        <Route path="/auth/*" element={<AuthRoutes />} />

        {/* rutas de los perfiles que manejan los tickets*/}
        <Route path="/*" element={<TicketsRoutes />} />
    </Routes>
  )
}
