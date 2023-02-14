import './App.css';

import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { getRouteTitle, routes } from "./routes";

import { Layout } from './components';
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }
  }, [])

  useEffect(() => {
    document.title = getRouteTitle(location);
  }, [location])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route path="/home" element={<HomePage title={"Home"} />} /> */}
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
