import type { SearchResultsListResponse } from "@/types/search.types"

export interface ISearchService {
    getSearchKeyword(keyword: string): Promise<SearchResultsListResponse>
}
