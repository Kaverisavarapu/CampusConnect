import {
    BrowserRouter,
    Routes,
    Route
}
from "react-router-dom";

import Landing
from "../pages/Landing/Landing";

import StudentLogin
from "../pages/Login/StudentLogin";

import AdminLogin
from "../pages/Login/AdminLogin";

import Dashboard
from "../pages/student/Dashboard";

import Home
from "../pages/student/Home";

import Saved
from "../pages/student/Saved";

import Applications
from "../pages/student/Applications";

import Experiences
from "../pages/student/Experiences";

import AddExperience
from "../pages/student/AddExperience";

import Profile
from "../pages/student/Profile";

import Settings
from "../pages/student/Settings";

import PostOpportunity
from "../pages/admin/PostOpportunity";

import ManageOpportunities
from "../pages/admin/ManageOpportunities";

import EditOpportunity
from "../pages/admin/EditOpportunity";

import AdminResults
from "../pages/admin/AdminResults";

import ProtectedRoute
from "../components/ProtectedRoute";

function AppRoutes(){

    return(

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Landing />}
                />

                <Route
                    path="/login/student"
                    element={<StudentLogin />}
                />

                <Route
                    path="/login/admin"
                    element={<AdminLogin />}
                />

                {/* STUDENT ROUTES */}

                <Route
                    path="/student/dashboard"
                    element={
                        <ProtectedRoute role="STUDENT">
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/student/home"
                    element={
                        <ProtectedRoute role="STUDENT">
                            <Home />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/student/saved"
                    element={
                        <ProtectedRoute role="STUDENT">
                            <Saved />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/student/applications"
                    element={
                        <ProtectedRoute role="STUDENT">
                            <Applications />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/student/experiences"
                    element={
                        <ProtectedRoute role="STUDENT">
                            <Experiences />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/student/add-experience"
                    element={
                        <ProtectedRoute role="STUDENT">
                            <AddExperience />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/student/profile"
                    element={
                        <ProtectedRoute role="STUDENT">
                            <Profile />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/student/settings"
                    element={
                        <ProtectedRoute role="STUDENT">
                            <Settings />
                        </ProtectedRoute>
                    }
                />

                {/* ADMIN ROUTES */}

                <Route
                    path="/admin/post"
                    element={
                        <ProtectedRoute role="ADMIN">
                            <PostOpportunity />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/admin/opportunities"
                    element={
                        <ProtectedRoute role="ADMIN">
                            <ManageOpportunities />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/admin/edit/:id"
                    element={
                        <ProtectedRoute role="ADMIN">
                            <EditOpportunity />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/admin/results/:id"
                    element={
                        <ProtectedRoute role="ADMIN">
                            <AdminResults />
                        </ProtectedRoute>
                    }
                />

            </Routes>

        </BrowserRouter>

    );

}

export default AppRoutes;