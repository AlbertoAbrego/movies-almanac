import type { SerieListResponse } from "@/types/serie.types"
import type { ISerieService } from "../interfaces/ISerieService"

export class SerieService implements ISerieService {
    async getPopularSeries(): Promise<SerieListResponse> {
        const response = await fetch("/api/series/popular")
        if (!response.ok) throw new Error("Error fetching popular series")
        return response.json()
    }
}
