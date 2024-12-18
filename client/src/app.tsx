import React from "react";
import Providers from "./redux/Provider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import NotFound from "./routes/NotFound";
import MainPage from "./routes/MainPage";
import MainLayout from "./layouts/mainLayout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  );
}

export default App;
