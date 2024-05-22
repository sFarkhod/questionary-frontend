import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        {/* <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
