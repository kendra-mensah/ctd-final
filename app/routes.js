// src/routes.js
import Home from "./pages/Home.jsx";
import AddEntry from "./pages/AddEntry.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";

const routes = [
  { path: "/", element: Home },
  { path: "/add", element: AddEntry },
  { path: "/about", element: About },
  { path: "*", element: NotFound },
];

export default routes;
