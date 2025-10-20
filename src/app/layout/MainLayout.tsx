import { Footer } from "./Footer"
import { Header } from "./Header"
import { Navbar } from "./Navbar"

interface MainLayoutProps {
    children: React.ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-900 text-gray-200">
            <Header />
            <Navbar />
            <main className="min-h-screen bg-gray-900 text-white flex-1 px-4 py-6">
                {children}
            </main>
            <Footer />
        </div>
    )
}
