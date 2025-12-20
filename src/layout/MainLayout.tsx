import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import ParticleBackground from "../component/ParticleBackground";

const MainLayout = () => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <ParticleBackground />
      <div style={{ position: "relative", zIndex: 1, minHeight: "100vh" }}>
        <Navbar />
        <Box sx={{ pt: { xs: 7, sm: 8 }, minHeight: "100vh" }}>
          <Outlet />
        </Box>
      </div>
    </div>
  );
};

export default MainLayout;
