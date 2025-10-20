import { useDependencies } from "@/context/DependencyContext"
import type { People } from "@/types/people.types"

export function usePeople() {
    const { peopleService } = useDependencies()

    const getPopularPeople = async (): Promise<People[]> => {
        const data = await peopleService.getPopularPeople()
        return data.results
    }
    return { getPopularPeople }
}
