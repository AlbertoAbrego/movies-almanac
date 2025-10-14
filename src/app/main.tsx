import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { DependencyProvider } from "@/context/DependencyContext.tsx"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <DependencyProvider>
            <App />
        </DependencyProvider>
    </StrictMode>
)
