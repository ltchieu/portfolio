import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../page/Home";
import Projects from "../page/Projects";

const AppRoute = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<Navigate to="/#about" replace />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
