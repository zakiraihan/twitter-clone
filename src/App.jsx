import './App.css';

import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { getRouteTitle, routes } from "./routes";

import { Layout } from './components';
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const defaultTitle = "Twitter";
    const titleFromRoute = getRouteTitle(location);
    document.title = titleFromRoute === defaultTitle ? 
      defaultTitle : titleFromRoute + ` / ${defaultTitle}`;

    if (location.pathname === "/") {
      navigate("/home");
    };
  }, [location, navigate])

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
