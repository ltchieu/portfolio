import { Box } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../component/Navbar";
import ParticleBackground from "../component/ParticleBackground";

const MainLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <ParticleBackground />
      <div style={{ position: "relative", zIndex: 1, minHeight: "100vh" }}>
        {!isHome && <Navbar />}
        <Box sx={{ pt: isHome ? 0 : { xs: 7, sm: 8 }, minHeight: "100vh" }}>
          <Outlet />
        </Box>
      </div>
    </div>
  );
};

export default MainLayout;

