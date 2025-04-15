import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import App from "../App";
import About from "../components/About";
import Contact from "../components/Contact";
import Services from "../components/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/:lang/",
        element: <Home />,
      },
      {
        path: "/:lang/about",
        element: <About />,
      },
      {
        path: "/:lang/contact",
        element: <Contact />,
      },
      {
        path: "/:lang/services",
        element: <Services />,
      },
    ],
  },
]);

export default router;
