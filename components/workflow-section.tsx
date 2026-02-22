export default function WorkflowSection() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We learn everything about your business, goals, and vision.",
      visual: "image",
      imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8l8J71hx7OGECUqeRr64zElUw5hQ2o.png",
      imageAlt: "Creative workspace with sketches and ideas"
    },
    {
      number: "02",
      title: "Design",
      description: "We map out structure and flow before a single line is written.",
      visual: "image",
      imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OZvDAGrcyqfWkrnASpzxD8FHzHOdVw.png",
      imageAlt: "Designer working on laptop"
    },
    {
      number: "03",
      title: "Development",
      description: "Your site is hand-coded from scratch with performance and precision.",
      visual: "image",
      imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tsU54dBXnLIIcdqHeQh1ofrhEPvQZF.png",
      imageAlt: "Developer typing code"
    },
    {
      number: "04",
      title: "Delivery",
      description: "We deploy, hand over fully, and support you free for your first month.",
      visual: "image",
      imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IHO0mzhwYUHGBU4LZ9RCVlDtSbwgWs.png",
      imageAlt: "Happy celebration"
    },
  ]

  return (
    <section id="process" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-start justify-between mb-16">
          <div>
            <span className="text-xs font-mono text-muted-foreground tracking-wider">◆ HOW_FRESH_SITES_WORKS</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 max-w-md leading-tight">
              Built for craftsmanship.
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs hidden md:block">
            Transparent process. Real developers. Real results.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="bg-card border border-border rounded-2xl p-6 h-full">
                {/* Visual placeholder */}
                <div className="aspect-square bg-secondary/50 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden border border-border/50">
                  {step.visual === "image" && (
                    <img 
                      src={step.imageSrc}
                      alt={step.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs font-mono text-muted-foreground">{step.number}</span>
                </div>
                <h3 className="font-medium text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 border-t border-dashed border-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
