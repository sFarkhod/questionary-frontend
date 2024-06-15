import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Questionary from "./components/Questionary";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Teacher from "./components/admin/Teacher";
import Subject from "./components/admin/Subject";
import User from "./components/admin/User";
import Statistics from "./components/admin/Statistics";
import Sidebar from "./components/admin/Sidebar";

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
        <Route path="admin">
          <Route
            path="sidebar"
            element={
              <ProtectedRoute>
                <Sidebar />
              </ProtectedRoute>
            }
          />
          <Route
            path="teacher"
            element={
              <ProtectedRoute>
                <Teacher />
              </ProtectedRoute>
            }
          />
          <Route
            path="subject"
            element={
              <ProtectedRoute>
                <Subject />
              </ProtectedRoute>
            }
          />
          <Route
            path="user"
            element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            }
          />
          <Route
            path="statistics"
            element={
              <ProtectedRoute>
                <Statistics />
              </ProtectedRoute>
            }
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
