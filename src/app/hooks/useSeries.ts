import { useDependencies } from "@/context/DependencyContext"
import type { Serie } from "@/types/serie.types"

export function useSeries() {
    const { serieService } = useDependencies()

    const getPopularSeries = async (): Promise<Serie[]> => {
        const data = await serieService.getPopularSeries()
        return data.results
    }

    return { getPopularSeries }
}
