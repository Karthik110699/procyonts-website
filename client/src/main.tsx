import { createRoot } from "react-dom/client";
import "./index.css";

// Simple test component
function TestApp() {
  return (
    <div style={{ 
      padding: '20px', 
      color: 'white', 
      backgroundColor: '#1a1a1a',
      fontFamily: 'Arial, sans-serif',
      fontSize: '24px'
    }}>
      <h1>🚀 Procyon Tech - React is Working!</h1>
      <p>If you can see this, React is rendering correctly.</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<TestApp />);
} else {
  console.error("Root element not found");
}
