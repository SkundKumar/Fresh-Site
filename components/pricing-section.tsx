import { Check } from "lucide-react"

export default function PricingSection() {
  const tiers = [
    {
      name: "Single-Page Website",
      price: "₹5,000",
      description: "The essentials for startups and launches",
      features: [
        "Single, powerful page",
        "Hand-coded excellence",
        "Mobile responsive",
        "Basic SEO optimization",
        "Free deployment on Vercel",
      ],
      cta: "Get a Quote",
    },
    {
      name: "Multi-Page Website",
      price: "Custom",
      description: "Full-featured site tailored to your business",
      features: [
        "Multiple custom pages",
        "Hand-coded from scratch",
        "Advanced functionality",
        "SEO performance focused",
        "Free deployment & domain setup",
      ],
      popular: true,
      cta: "Discuss Your Project",
    },
    {
      name: "Maintenance Plan",
      price: "₹2,000",
      description: "Ongoing support and updates",
      features: [
        "Monthly retainer",
        "Bug fixes & updates",
        "Content changes",
        "Direct developer access",
        "First month free",
      ],
      cta: "Learn More",
    },
  ]

  return (
    <section id="pricing" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-muted-foreground tracking-wider">◆ SERVICES & PRICING</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-4">
            Premium websites,
            <br />
            transparent pricing
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="bg-[#fffef0] px-3 py-1 rounded shadow-sm rotate-[-2deg] border border-amber-100">
              <span className="text-xs font-mono">CUSTOM QUOTES</span>
            </div>
            <p className="text-muted-foreground text-sm">No surprise invoices. No hidden fees.</p>
            <div className="bg-[#fffef0] px-3 py-1 rounded shadow-sm rotate-[2deg] border border-amber-100">
              <span className="text-xs font-mono">FIRST_MONTH_FREE</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`bg-card border rounded-2xl p-6 relative ${
                tier.popular ? "border-primary shadow-lg" : "border-border"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-mono px-3 py-1 rounded-full">
                  ◆ MOST POPULAR
                </div>
              )}

              <div className="mb-6">
                <span className="text-xs font-mono text-muted-foreground">{tier.name.split(" ")[0].toUpperCase()}</span>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-4xl font-serif">{tier.price}</span>
                  {tier.price !== "Custom" && <span className="text-muted-foreground text-sm"></span>}
                </div>
                <p className="text-sm text-muted-foreground mt-2">{tier.description}</p>
              </div>

              <div className="space-y-3 mb-6">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-accent flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-accent-foreground" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/917347565100?text=Hi%20Fresh%20Sites%2C%20I%27m%20interested%20in%20your%20${tier.name.replace(/\s+/g, '%20')}%20plan.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-full text-sm font-medium transition-colors text-center block ${
                  tier.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border hover:bg-secondary"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
