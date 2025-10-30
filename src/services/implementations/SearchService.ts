import type { SearchResultsListResponse } from "@/types/search.types"
import type { ISearchService } from "../interfaces/ISearchService"

export class SearchService implements ISearchService {
    async getSearchKeyword(
        keyword: string
    ): Promise<SearchResultsListResponse> {
        const response = await fetch(`/api/search/${keyword}`)
        if (!response.ok) throw new Error(`Error fetching search ${keyword}`)
        return response.json()
    }
}
