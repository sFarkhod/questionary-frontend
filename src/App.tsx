import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Questionary from "./components/Questionary";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Questionary />} />
        <Route
          path="/register"
          element={
            // <ProtectedRoute>
            <Register />
            // </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
