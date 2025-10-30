export const SearchBar = () => {
    return (
        <div className="w-full flex justify-center">
            <input
                type="text"
                placeholder="Search..."
                className="w-3/4 md:w-3/4 lg:w-3/4 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    )
}
