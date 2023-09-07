import "./App.css";
import HomePage from "./components/page/HomePage";
import AboutPage from "./components/page/AboutPage"; // AboutPage komponentini import qo'shing
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/about/:id" element={<AboutPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
