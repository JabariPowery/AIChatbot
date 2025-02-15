import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Overview from "./admin/dashboard/pages/Overview";
import RootLayout from "./shared/components/Root";
import ErrorPage from "./shared/pages/Error";
import Guests from "./admin/guestsPage/pages/Guests";
import Register from "./shared/pages/Register";
import Login from "./shared/pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, //root layout
    errorElement: <ErrorPage />, //error
    children: [
      { index: true, element: <Register /> },
      { path: "/guests", element: <Guests /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
