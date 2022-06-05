import React, { useContext } from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Table from "./pages/Table";
import Login from "./pages/Login";

import { AutheProvider, AuthContext } from "./contexts/auth";

const AppRoutes = () => {
    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext);
        console.log(authenticated);

        if (loading) {
            return <div>Loading...</div>;
        }

        if (!authenticated) {
            return <Navigate to="/" />;
        }

        return children;
    };

    return (
        <Router>
            <AutheProvider>
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route
                        exact
                        path="/table"
                        element={
                            <Private>
                                <Table />
                            </Private>
                        }
                    />
                </Routes>
            </AutheProvider>
        </Router>
    );
};

export default AppRoutes;
