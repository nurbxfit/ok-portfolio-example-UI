import { Button } from "../ui/button"

export const AboutSection = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="bg-white text-[#FF5A52] px-3 py-1 rounded font-bold text-lg">OK</div>
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="w-2 h-2 bg-white rounded-full opacity-60" />
                            ))}
                        </div>
                    </div>
                    <h2 className="text-5xl font-bold mb-6">
                        2023 Best
                        <br />
                        of the best
                    </h2>
                    <p className="text-lg opacity-90 mb-8 max-w-md">
                        Premia online tutaj adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Button className="bg-yellow-400 text-black hover:bg-yellow-500 px-6 py-3 rounded-full font-semibold">
                        VIEW CASE
                    </Button>
                </div>
                <div className="relative">
                    <img src="/isometric-3d-illustration-of-design-portfolio-book.jpg" alt="Portfolio showcase" className="w-full max-w-lg mx-auto" />
                </div>
            </div>
        </section>
    )
}