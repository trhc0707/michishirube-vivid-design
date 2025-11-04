import { createRoot } from "react-dom/client";
import App from "./App";
import AppSubdomain from "./AppSubdomain";
import "./index.css";

// Check if the current hostname is the Georgia seminar subdomain
const isGeorgiaSeminarSubdomain = 
  window.location.hostname === "georgia-tbilisi-seminar.michishirubeou.com" ||
  window.location.hostname === "localhost" && window.location.pathname.startsWith("/georgia-seminar");

// Render the appropriate app based on the hostname
createRoot(document.getElementById("root")!).render(
  isGeorgiaSeminarSubdomain ? <AppSubdomain /> : <App />
);
