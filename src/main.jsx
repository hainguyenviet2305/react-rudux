import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import FormUserComponent from "./components/formUser";
import DetailUser from "./components/DetailUser";
import HomePage from "./components/HomePage";
import { Provider } from "react-redux";
import store from "../store/store.js";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/userList",
        element: <App />,
      },
      {
        path: "userList/editUser/:id",
        element: <FormUserComponent />,
      },
      {
        path: "addUser",
        element: <FormUserComponent />,
      },
      {
        path: "testTaiwind",
        element: <DetailUser />,
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
