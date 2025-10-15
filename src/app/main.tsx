import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import { DependencyProvider } from "@/context/DependencyContext.tsx"
import { IndexRoute } from "./routes/index.tsx"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <DependencyProvider>
                <IndexRoute />
            </DependencyProvider>
        </BrowserRouter>
    </StrictMode>
)
