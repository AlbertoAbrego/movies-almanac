export const Navbar: React.FC = () => {
    return (
        <>
            <nav className="relative w-full flex justify-center p-2 bg-gray-700">
                <ul className="flex space-x-4">
                    <li><a href="/" className="hover:underline">Home</a></li>
                    <li><a href="/movies" className="hover:underline">Movies</a></li>
                    <li><a href="/about" className="hover:underline">About</a></li>
                </ul>
            </nav>
        </>
    )
}