import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Catalog } from "./components/Catalog";
import { PlantDetail } from "./components/PlantDetail";
import { Chatbot } from "./components/Chatbot";
import { Contact } from "./components/Contact";
import { Login } from "./components/Login";
import { AdminDashboard } from "./components/AdminDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "catalogo", Component: Catalog },
      { path: "planta/:id", Component: PlantDetail },
      { path: "chatbot", Component: Chatbot },
      { path: "contacto", Component: Contact },
      { path: "login", Component: Login },
      { path: "admin", Component: AdminDashboard },
    ],
  },
]);