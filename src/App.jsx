import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { Routes, BrowserRouter, Route } from "react-router";
import MainLayout from "./layout/MainLayout";
import About from "./pages/About";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
