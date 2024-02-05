import React from "react";
// Importation de la fonction createRoot depuis le module "react-dom/client"
import { createRoot } from "react-dom/client";
import "./styles/index.scss";
// Importation du composant principal de l'application depuis le fichier App.js
import App from "./App";
// Importation du composant BrowserRouter depuis le module "react-router-dom"
import { BrowserRouter } from "react-router-dom";

// Création d'une racine de rendu React à l'élément HTML avec l'ID "root"
const root = createRoot(document.getElementById("root"));
// Rendu de l'application React à l'intérieur du composant BrowserRouter
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
