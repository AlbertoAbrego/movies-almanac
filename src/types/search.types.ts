export interface SearchResults {
    id: number
    name: string
}

export interface SearchResultsListResponse {
    page: number
    results: SearchResults[]
    total_pages: number
    total_results: number
}
