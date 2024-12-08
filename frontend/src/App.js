import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Overview from "./dashboard/pages/Overview";
import RootLayout from "./shared/components/Root";
import ErrorPage from "./shared/pages/Error";
import Guests from "./guestsPage/pages/Guests";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, //root layout
    errorElement: <ErrorPage />, //error
    children: [
      { index: true, element: <Overview /> },
      { path: "/guests", element: <Guests /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
