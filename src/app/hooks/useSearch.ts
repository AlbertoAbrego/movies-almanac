import { useDependencies } from "@/context/DependencyContext"
import type {
    SearchMultiResultsListResponse,
    SearchResults,
} from "@/types/search.types"

export function useSearch() {
    const { searchService } = useDependencies()

    const getSearchKeyword = async (
        keyword: string
    ): Promise<SearchResults[]> => {
        const data = await searchService.getSearchKeyword(keyword)
        return data.results
    }

    const getSearchMulti = async (
        query: string
    ): Promise<SearchMultiResultsListResponse> => {
        const data = await searchService.getSearchMulti(query)
        return data
    }

    return { getSearchKeyword, getSearchMulti }
}
