import './App.css';

import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";

import { HomePage } from './views';
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

  const routes = [
    {
      path: "/home",
      element: <HomePage title={"Home"}/>,
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
