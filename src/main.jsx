import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import FormUserComponent from "./components/formUser";
import DetailUser from "./components/DetailUser";
import HomePage from "./components/HomePage";
import { Provider } from "react-redux";
import store from "./store/store.js";
import DemoComponenthook from "./components/DemoComponenthook.jsx";
import RootLayout from "./routes/RootLayout.jsx";
import SignInPage from "./auth/SignIn.jsx";
import SignUpPage from "./auth/SignUp.jsx";
import IndexPage from "./routes/index.jsx";
import DashboardLayout from "./routes/dashboard-layout.jsx";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <IndexPage /> },
      { path: "/sign-in", element: <SignInPage /> },
      { path: "/sign-up", element: <SignUpPage /> },
      {
        element: <DashboardLayout />,
        path: "admin",
        children: [
          {
            path: "/admin",
            element: <Root />,
            errorElement: <ErrorPage />,
            children: [
              {
                path: "",
                element: <HomePage />,
              },
              {
                path: "/admin/userList",
                element: <App />,
              },
              {
                path: "/admin/userList/editUser/:id",
                element: <FormUserComponent />,
              },
              {
                path: "/admin/addUser",
                element: <FormUserComponent />,
              },
              {
                path: "/admin/testTaiwind",
                element: <DetailUser />,
              },
              {
                path: "/admin/customHook",
                element: <DemoComponenthook />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export const ThemeContext = createContext(null);
export const TitleContext = createContext(null);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
