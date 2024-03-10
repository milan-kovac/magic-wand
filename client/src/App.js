import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./components/Navigation";
import MagicWands from "./pages/MagicWands";
import CreateMagicWand from "./pages/CreateMagicWand";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/magic-wands" element={<MagicWands />} />

          <Route
            path="/create-magic-wand"
            element={
              <ProtectedRoute>
                <CreateMagicWand />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer position="top-center" />
      </div>
    </BrowserRouter>
  );
}

export default App;
