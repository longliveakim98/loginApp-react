
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useLocalStorage from "use-local-storage";
//import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { AuthContext } from "./pages/AuthContext";
import RequireAuth from "./components/RequireAuth";
//import Navbar1 from "./components/Navbar";
import './App.css'

function App() {
  const [token, setToken] = useLocalStorage("token", null);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <Routes>

          <Route element={<Login />} path='/' />
          <Route
            element={
              <RequireAuth>

                <Dashboard />
              </RequireAuth>
            }
            path='/dashboard'
          />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>

  );
}

export default App
