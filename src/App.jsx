import './App.css';

import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";

import { HomePage } from './views';
import { Layout } from './components';
import Profile from './views/Profile';
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
    document.title = "Twitter";
    
    const currentRoute = routes.find(route => route.path === location.pathname);
    if(currentRoute && currentRoute.title) document.title = currentRoute.title;
    
  }, [location])

  const routes = [
    {
      path: "/home",
      title: "Home",
      element: <HomePage title="Home"/>,
    },
    {
      path: "/profile",
      title: "Profile",
      element: <Profile title="Profile"/>
    }
  ]


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
