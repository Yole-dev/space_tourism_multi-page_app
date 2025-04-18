//Imported React router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Page routing
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/destination"
          element={
            <Layout>
              <Destination />
            </Layout>
          }
        />
        <Route
          path="/crew"
          element={
            <Layout>
              <Crew />
            </Layout>
          }
        />
        <Route
          path="/technology"
          element={
            <Layout>
              <Technology />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}
