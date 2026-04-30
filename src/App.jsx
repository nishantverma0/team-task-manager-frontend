import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import MyTasks from "./pages/MyTasks";
import NotFound from "./pages/NotFound";

import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition">
      <Navbar />
      <div>{children}</div>
    </div>
  );
}

export default function App() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <p>Loading...</p>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes with Layout */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/projects"
          element={
            <ProtectedRoute>
              <Layout>
                <Projects />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/projects/:id"
          element={
            <ProtectedRoute>
              <Layout>
                <ProjectDetail />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-tasks"
          element={
            <ProtectedRoute>
              <Layout>
                <MyTasks />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
