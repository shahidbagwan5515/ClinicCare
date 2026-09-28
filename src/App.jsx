import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./Componet/Register";
import SignIn from "./Componet/SignIn";
import Home from "./Componet/Home";
import AppointmentPage from "./Componet/AppointmentPage";
import ClinicDashboard from "./Componet/ClinicDashboard";
import NoticeNavbar from "./Componet/NoticeNavbar";
import NoticePage from "./Componet/NoticePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/AppointmentPage" element={<AppointmentPage />} />
        <Route path="/ClinicDashboard" element={<ClinicDashboard />} />
        <Route path="/NoticeNavbar" element={<NoticeNavbar />} />
        <Route path="/NoticePage" element={<NoticePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
