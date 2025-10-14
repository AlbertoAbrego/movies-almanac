export const Navbar: React.FC = () => {
    return (
        <>
            <nav className="bg-primary-dark text-white p-4">
                <ul className="flex space-x-4 justify-center">
                    <li><a href="/" className="hover:underline">Home</a></li>
                    <li><a href="/movies" className="hover:underline">Movies</a></li>
                    <li><a href="/about" className="hover:underline">About</a></li>
                </ul>
            </nav>
        </>
    )
}