import { useState } from "react"

type IFilterOption = "All" | "Movie" | "Serie" | "People"
interface SearchBarProps {
    onSearch: (query: string) => void
    placeholder?: string
}

export const SearchBar = ({ onSearch, placeholder }: SearchBarProps) => {
    const [query, setQuery] = useState("")
    const [showFilters, setShowFilters] = useState(false)
    const [filters, setFilters] = useState<string[]>([])
    const filterOptions: IFilterOption[] = ["All", "Movie", "Serie", "People"]
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && query.trim() !== "") {
            onSearch(query.trim())
        }
    }
    const handleCheckBox = (value: string) => {
        if (value === "All") {
            if (filters.includes(value)) {
                setFilters([])
            } else {
                setFilters((prev) => {
                    const filtersToAdd = filterOptions.filter(
                        (option) => !prev.includes(option)
                    )
                    return [...prev, ...filtersToAdd]
                })
            }
        } else {
            setFilters((prev) => {
                let updated: string[]
                if (prev.includes(value)) {
                    updated = prev.filter((f) => f !== value)
                    if (prev.includes("All")) {
                        updated = updated.filter((f) => f !== "All")
                    }
                } else {
                    updated = [...prev, value]
                }
                const allCheked = filterOptions
                    .filter((f) => f !== "All")
                    .every((option) => updated.includes(option))
                if (allCheked) updated = [...updated, "All"]
                return updated
            })
        }
    }
    return (
        <div className="w-full flex justify-center">
            <input
                className="w-3/4 md:w-3/4 lg:w-3/4 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder={placeholder || "Search..."}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <div className="relative px-4">
                <button
                    type="button"
                    onClick={() => setShowFilters(!showFilters)}
                    className="px-3 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                >
                    Filtros ▼
                </button>
                {showFilters && (
                    <div className="absolute right-0 mt-2 bg-gray-900 border border-gray-700 rounded-lg shadow-lg w-40 z-10">
                        {filterOptions.map((filter) => (
                            <label
                                key={filter}
                                className="flex items-center gap-2 mb-1 ml-2"
                            >
                                <input
                                    type="checkbox"
                                    checked={filters.includes(filter)}
                                    onChange={() => handleCheckBox(filter)}
                                />
                                {filter}
                            </label>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
