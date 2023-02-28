import { applyRouting } from "./routing";

// Dès le chargement des élements du DOM
document.addEventListener("DOMContentLoaded", () => {
  applyRouting(window.location.pathname);
});