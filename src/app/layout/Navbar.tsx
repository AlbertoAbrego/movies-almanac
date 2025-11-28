import { SearchBar } from "@/components/SearchBar"
import { NavLink, useNavigate } from "react-router-dom"

export const Navbar: React.FC = () => {
    const navigate = useNavigate()
    const handleSearch = async (query: string) => {
        navigate(`/search?query=${encodeURIComponent(query)}`)
    }
    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
        isActive
            ? "text-indigo-400 font-semibold"
            : "text-gray-300 hover:text-gray-50 hover:font-semibold"
    return (
        <>
            <nav className="relative w-full flex justify-center p-2 bg-gray700">
                <ul className="flex space-x-4">
                    <NavLink to="/" className={navLinkClass}>
                        Home
                    </NavLink>
                    <NavLink to="/movies" className={navLinkClass}>
                        Movies
                    </NavLink>
                    <NavLink to="/series" className={navLinkClass}>
                        Series
                    </NavLink>
                    <NavLink to="/people" className={navLinkClass}>
                        People
                    </NavLink>
                </ul>
            </nav>
            <div className="py-5">
                <SearchBar onSearch={handleSearch} />
            </div>
        </>
    )
}
