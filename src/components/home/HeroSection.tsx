import { ExternalLink } from "lucide-react"
import { Button } from "../ui/button"

export const HeroSecction = () => {
    return <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
                <p className="text-sm opacity-80 mb-4 tracking-wider">ILLUSTRATOR</p>
                <h1 className="text-6xl lg:text-8xl font-bold mb-6 leading-none">
                    OSKAR
                    <br />
                    KADERA
                </h1>
                <p className="text-lg mb-8 opacity-90 max-w-md">
                    Oskar Kadera is a world known Polish Visual Artist and Illustrator.
                </p>
                <div className="flex items-center gap-4">
                    <Button className="bg-yellow-400 text-black hover:bg-yellow-500 px-6 py-3 rounded-full font-semibold">
                        LEARN MORE
                    </Button>
                    <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
                        <ExternalLink className="w-5 h-5" />
                    </div>
                </div>
            </div>
            <div className="relative">
                <img
                    src="/isometric-3d-illustration-of-creative-workspace-wi.jpg"
                    alt="Isometric workspace illustration"
                    className="w-full max-w-lg mx-auto"
                />
            </div>
        </div>
    </section>
}