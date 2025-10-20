import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"

interface CarouselProps<T> {
    title: string
    items: T[]
    imageKey: keyof T
    labelKey: keyof T
    imageBaseURL?: string
}

export const Carousel = <T,>({
    title,
    items,
    imageKey,
    labelKey,
    imageBaseURL = "https://image.tmdb.org/t/p/w500",
}: CarouselProps<T>) => {
    const carouselRef = useRef<HTMLDivElement>(null)
    const scroll = (direction: "left" | "right") => {
        if (!carouselRef.current) return
        const scrollAmount = direction === "left" ? -400 : 400
        carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
    return (
        <section className="relative w-[90%] py-6 justify-center">
            <h1 className="text-4xl font-bold mb-3 px-4 text-center">
                {title}
            </h1>
            <button
                onClick={() => scroll("left")}
                className="absolute -left-10 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={() => scroll("right")}
                className="absolute -right-10 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
            >
                <ChevronRight size={24} />
            </button>
            <div
                ref={carouselRef}
                className="flex overflow-x-scroll no-scrollbar scroll-smooth gap-4 px-4"
            >
                {items.map((item, idx) => {
                    const image = (item[imageKey] as string) || ""
                    const label = (item[labelKey] as string) || ""
                    return (
                        <div
                            key={idx}
                            className="flex-none w-48 md:w-56 lg:w-64 relative group"
                        >
                            {image ? (
                                <img
                                    src={`${imageBaseURL}${image}`}
                                    alt={label}
                                    className="rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                                />
                            ) : (
                                <div className="h-72 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 text-sm">
                                    Sin imagen
                                </div>
                            )}
                            <p className="mt-2 text-sm text-center font-medium truncate">
                                {label}
                            </p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
