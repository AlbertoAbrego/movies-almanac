import type { SerieListResponse } from "@/types/serie.types"

export interface ISerieService {
    getPopularSeries(): Promise<SerieListResponse>
}
