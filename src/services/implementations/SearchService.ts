import type {
    SearchMultiResultsListResponse,
    SearchResultsListResponse,
} from "@/types/search.types"
import type { ISearchService } from "../interfaces/ISearchService"

export class SearchService implements ISearchService {
    async getSearchKeyword(
        keyword: string
    ): Promise<SearchResultsListResponse> {
        const response = await fetch(`/api/search/${keyword}`)
        if (!response.ok)
            throw new Error(`Error fetching search keyword ${keyword}`)
        return response.json()
    }
    async getSearchMulti(
        query: string
    ): Promise<SearchMultiResultsListResponse> {
        const response = await fetch(`/api/search/multi/${query}`)
        if (!response.ok) throw new Error(`Error fetching search of ${query}`)
        return response.json()
    }
}
