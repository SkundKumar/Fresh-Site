import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Main hero area */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground border border-border rounded-full px-3 py-1">
              <span>HAND-CODED WEBSITES FOR FOUNDERS</span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-balance">
              Fresh Sites.
              <br />
              Real Results.
            </h1>

            <p className="text-muted-foreground text-lg max-w-md">Every line of code is hand-written by a developer who actually cares. No templates. No AI-generated bloat. Just code that works.</p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://wa.me/917347565100?text=Hi%20Fresh%20Sites%2C%20I%27m%20interested%20in%20getting%20a%20website%20built." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right visual - Developer workspace */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden border border-border/50">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2bxio7Y3M0HyBbIzDcfUvcqdZpQXNz.png"
              alt="Developer workspace with code and coffee"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
