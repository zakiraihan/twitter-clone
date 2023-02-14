import {
  HomePage,
  ProfilePage
} from '../views';

import { navItems } from './navItems';

export const routes = [
  {
    path: "/home",
    title: navItems[0].text,
    element: <HomePage title="Home"/>,
  },
  {
    path: "/profile",
    title: "Profile",
    element: <ProfilePage title="Profile"/>
  }
]

export const getRouteTitle = (location) => {
  let routeTitle = "Twitter";
  const currentRoute = routes.find(route => route.path === location.pathname);
  if(currentRoute && currentRoute.title) routeTitle = currentRoute.title;

  return routeTitle;
}