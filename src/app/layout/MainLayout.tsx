import { Footer } from "./Footer"
import { Header } from "./Header"
import { Navbar } from "./Navbar"

interface MainLayoutProps{
    children: React.ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
    return(
        <>
            <Header />
            <Navbar />
            <main className="container mx-auto px-4">
                {children}
            </main>
            <Footer />
        </>
    )
}