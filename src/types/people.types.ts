export interface People {
    id: number
    known_for_department: string
    name: string
    popularity: number
    profile_path: string
}

export interface PeopleListResponse {
    page: number
    results: People[]
    total_pages: number
    total_results: number
}
