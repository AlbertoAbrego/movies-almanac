import type { PeopleListResponse } from "@/types/people.types"
import type { IPeopleService } from "../interfaces/IPeopleService"

export class PeopleService implements IPeopleService {
    async getPopularPeople(): Promise<PeopleListResponse> {
        const response = await fetch("/api/people/popular")
        if (!response.ok) throw new Error("Error fetching popular people")
        return response.json()
    }
}
