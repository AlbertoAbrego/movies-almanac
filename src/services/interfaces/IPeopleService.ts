import type { PeopleListResponse } from "@/types/people.types"

export interface IPeopleService {
    getPopularPeople(): Promise<PeopleListResponse>
}
