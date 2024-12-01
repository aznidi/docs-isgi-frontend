import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "../src/App";
import { AuthProvider } from "../src/contexts/authContext/index"; // Import du AuthProvider

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider> {/* AuthProvider englobe App */}
      <App />
    </AuthProvider>
  </StrictMode>
);
