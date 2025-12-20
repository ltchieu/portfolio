import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../page/Home";
import About from "../page/About";

const AppRoute = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<div>Projects Page (Coming Soon)</div>} />
        <Route path="resume" element={<div>Resume Page (Coming Soon)</div>} />
        <Route path="blogs" element={<div>Blogs Page (Coming Soon)</div>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
