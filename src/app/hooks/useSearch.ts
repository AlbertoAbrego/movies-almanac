import { useDependencies } from "@/context/DependencyContext"
import type { SearchResults } from "@/types/search.types"

export function useSearch() {
    const { searchService } = useDependencies()

    const getSearchKeyword = async (
        keyword: string
    ): Promise<SearchResults[]> => {
        const data = await searchService.getSearchKeyword(keyword)
        return data.results
    }

    return { getSearchKeyword }
}
