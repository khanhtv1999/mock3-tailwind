import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePageComponent/HomePage";
import BlogPage from "./pages/BlogPageComponent/BlogPage";
import SharedLayout from "./components/SharedLayoutComponent/SharedLayout";
import WorkPage from "./pages/WorkPage/WorkPage";
import WorkDetailPage from "./pages/WorkDetailPage/WorkDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="work" element={<WorkPage />} />
          <Route path="contact" element={<WorkDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
