import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { MainLayout } from "../layout/MainLayout"
import { useSearch } from "../hooks/useSearch"
import type { SearchMultiResults } from "@/types/search.types"
import { Card } from "@/components/Card"

export const SearchResults: React.FC = () => {
    const { getSearchMulti } = useSearch()
    const [params] = useSearchParams()
    const query = params.get("query") || ""
    const [results, setResults] = useState<SearchMultiResults[]>([])
    useEffect(() => {
        if (query) {
            getSearchMulti(query)
                .then((data) => setResults(data.results))
                .catch(console.error)
        }
    }, [query])
    return (
        <>
            <MainLayout>
                <div className="justify-items-center">
                    <section className="relative w-[90%] py-6 justify-center">
                        <h1 className="text-3xl font-semibold mb-3">
                            Search results for: {query}
                        </h1>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            {results.map((item) => (
                                <div key={item.id}>
                                    <Card
                                        title={item.title || item.name}
                                        imgURL={item.poster_path}
                                        date={item.release_date}
                                    />
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </MainLayout>
        </>
    )
}
