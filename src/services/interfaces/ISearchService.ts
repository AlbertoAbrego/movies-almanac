import type {
    SearchMultiResultsListResponse,
    SearchResultsListResponse,
} from "@/types/search.types"

export interface ISearchService {
    getSearchKeyword(keyword: string): Promise<SearchResultsListResponse>
    getSearchMulti(query: string): Promise<SearchMultiResultsListResponse>
}
