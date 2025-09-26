import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Card } from "../ui/card"

export const AwardsSection = () => {
    return <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
            <div>
                <p className="text-sm opacity-80 mb-4 tracking-wider">NO 1 / 3</p>
                <h2 className="text-4xl font-bold mb-8">
                    Personal
                    <br />
                    Awards
                </h2>
            </div>

            <Card className="bg-white/10 backdrop-blur-sm border-2 border-white p-8 rounded-3xl">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                    <div className="w-8 h-8 bg-[#FF5A52] rounded-full" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                    World Brand
                    <br />
                    Design Awards
                </h3>
                <p className="text-sm opacity-80 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                </p>
                <Button className="bg-yellow-400 text-black hover:bg-yellow-500 px-4 py-2 rounded-full text-sm font-semibold">
                    LEARN MORE
                </Button>
            </Card>

            <div className="space-y-6">
                <Card className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                        <div className="w-6 h-6 bg-white rounded" />
                    </div>
                    <h4 className="font-bold mb-2">
                        The Rising Orbit
                        <br />
                        ADC Competition
                    </h4>
                    <Badge className="bg-yellow-400 text-black">2021</Badge>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                        <span className="text-xl">✕</span>
                    </div>
                    <h4 className="font-bold mb-2">
                        Graphic Design
                        <br />
                        USA Award
                    </h4>
                    <Badge className="bg-yellow-400 text-black">2021</Badge>
                </Card>
            </div>
        </div>
    </section>
}