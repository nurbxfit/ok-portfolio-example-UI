import { ExternalLink } from "lucide-react"
import { Button } from "../ui/button"
import { Card } from "../ui/card"
import { Badge } from "../ui/badge"

export const WorksSection = () => {
    return (
        < section className="max-w-7xl mx-auto px-6 py-16" >
            <div className="grid md:grid-cols-3 gap-8">
                {/* Project 1 */}
                <Card className="bg-white text-black p-6 rounded-3xl">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-bold">01</span>
                        <ExternalLink className="w-4 h-4" />
                    </div>
                    <div className="aspect-square bg-gradient-to-br from-pink-200 to-yellow-200 rounded-2xl mb-6 flex items-center justify-center">
                        <img src="/colorful-cartoon-mascot-character-with-yellow-and-.jpg" alt="Swesco Maskot" className="w-32 h-32" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Swesco Maskot</h3>
                    <p className="text-sm text-gray-600 mb-4">
                        Cute design mascot comes mascot character design for Swesco company.
                    </p>
                    <Button className="bg-yellow-400 text-black hover:bg-yellow-500 px-4 py-2 rounded-full text-sm font-semibold">
                        VIEW CASE
                    </Button>
                </Card>

                {/* Project 2 */}
                <Card className="bg-white text-black p-6 rounded-3xl">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-bold">02</span>
                        <ExternalLink className="w-4 h-4" />
                    </div>
                    <div className="aspect-square bg-gray-100 rounded-2xl mb-6 flex items-center justify-center">
                        <img
                            src="/modern-design-portfolio-layout-with-geometric-shap.jpg"
                            alt="Best of 2023"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Best of 2023</h3>
                    <p className="text-sm text-gray-600 mb-4">BEHANCE WORKS</p>
                    <div className="flex gap-2 mb-4">
                        <Badge className="bg-yellow-400 text-black hover:bg-yellow-500">BRANDING</Badge>
                        <Badge className="bg-yellow-400 text-black hover:bg-yellow-500">UX</Badge>
                    </div>
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <ExternalLink className="w-4 h-4" />
                    </div>
                </Card>

                {/* Project 3 */}
                <Card className="bg-white text-black p-6 rounded-3xl">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-bold">03</span>
                        <ExternalLink className="w-4 h-4" />
                    </div>
                    <div className="aspect-square bg-gradient-to-br from-red-200 to-orange-200 rounded-2xl mb-6 flex items-center justify-center">
                        <img
                            src="/coffee-shop-branding-design-with-warm-colors-and-g.jpg"
                            alt="Cusco Barista"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Cusco Barista</h3>
                    <p className="text-sm text-gray-600 mb-4">COFFEE HOUSE</p>
                    <div className="flex gap-2 mb-4">
                        <Badge className="bg-yellow-400 text-black hover:bg-yellow-500">BRANDING</Badge>
                        <Badge className="bg-yellow-400 text-black hover:bg-yellow-500">UX</Badge>
                    </div>
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <ExternalLink className="w-4 h-4" />
                    </div>
                </Card>
            </div>
        </section >
    )
}