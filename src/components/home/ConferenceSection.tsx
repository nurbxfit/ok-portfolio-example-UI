import { ExternalLink, MapPin } from "lucide-react"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"

export const ConferenceSection = () => {

    const talks = [
        { year: "2024", name: "Bump Festival", location: "Krakow, PL", category: "Design Trends" },
        { year: "2023", name: "FCR Creative", location: "Paris, FR", category: "Creativity" },
        { year: "2023", name: "OFFF Festival", location: "Barcelona, ES", category: "New Media", highlight: true },
        { year: "2020", name: "Open Studio", location: "Glasgow, UK", category: "Trends & Hype" },
    ]
    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            <h2 className="text-4xl font-bold mb-12 text-center">Conferences & Events</h2>

            <div className="flex justify-center gap-4 mb-8">
                <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-[#FF5A52] bg-transparent"
                >
                    INTERVIEWS
                </Button>
                <Button className="bg-white text-[#FF5A52] hover:bg-gray-100">TALKS</Button>
                <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-[#FF5A52] bg-transparent"
                >
                    EXHIBITION
                </Button>
            </div>

            <div className="space-y-4">
                {talks.map((event, index) => (
                    <div
                        key={index}
                        className={`flex items-center justify-between p-6 rounded-2xl transition-all hover:scale-105 ${event.highlight ? "bg-yellow-400 text-black" : "bg-white/10 backdrop-blur-sm"
                            }`}
                    >
                        <div className="flex items-center gap-8">
                            <span className="text-2xl font-bold w-16">{event.year}</span>
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                <span className="text-xl font-bold">
                                    {event.name === "FCR Creative" ? "AR" : event.name.charAt(0)}
                                </span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">{event.name}</h3>
                            </div>
                        </div>
                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>{event.location}</span>
                            </div>
                            <Badge className={event.highlight ? "bg-black text-white" : "bg-white/20 text-white"}>
                                {event.category}
                            </Badge>
                            <ExternalLink className="w-5 h-5" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}