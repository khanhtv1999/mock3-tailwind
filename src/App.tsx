import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePageComponent/HomePage";
import BlogPage from "./pages/BlogPageComponent/BlogPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="blog" element={<BlogPage />} />
        {/* <Route path="work" element={<WorkPage />} />
          <Route path="contact" element={<WorkDetailPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
