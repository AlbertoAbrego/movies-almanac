export interface Serie {
    id: number
    name: string
    overview: string
    first_air_date: string
    poster_path: string | null
    backdrop_path: string | null
    vote_average: number
    vote_count: number
    popularity: number
    original_language: string
    genre_ids: number[]
}

export interface SerieListResponse {
    page: number
    results: Serie[]
    total_pages: number
    total_results: number
}
