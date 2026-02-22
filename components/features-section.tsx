import { Check, Lock, Mail, Zap } from "lucide-react"

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-start justify-between mb-16">
          <div>
            <span className="text-xs font-mono text-muted-foreground tracking-wider">◆ WHY_FRESH_SITES</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 max-w-lg leading-tight">
              Built to Mean Business
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs hidden md:block">
            Hand-coded excellence. No shortcuts. No compromises.
          </p>
        </div>

        {/* Top row features */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {/* 100% Hand-Coded */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-start justify-between mb-6">
              <span className="text-xs font-mono text-muted-foreground">BENEFIT</span>
              <span className="text-xs font-mono text-muted-foreground">CODE_QUALITY</span>
            </div>
            <div className="bg-secondary/50 rounded-xl p-4 mb-6 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-mono mb-2">100%</div>
                <div className="text-xs font-mono text-muted-foreground">HAND-CODED</div>
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">100% Hand-Coded</h3>
            <p className="text-sm text-muted-foreground">
              Every line of code written by a real developer. No AI-generated slop, no page builders, no shortcuts.
            </p>
          </div>

          {/* Full Code Ownership */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-start justify-between mb-6">
              <span className="text-xs font-mono text-muted-foreground">BENEFIT</span>
              <span className="text-xs font-mono text-muted-foreground">OWNERSHIP</span>
            </div>
            <div className="bg-secondary/50 rounded-xl p-4 mb-6 flex items-center justify-center">
              <div className="relative">
                <div className="w-16 h-16 rounded-full border-4 border-accent flex items-center justify-center">
                  <Lock className="w-6 h-6 text-foreground" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary-foreground" />
                </div>
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">You Own It Entirely</h3>
            <p className="text-sm text-muted-foreground">
              Full code ownership. No platform lock-in. No dependency on third-party builders.
            </p>
          </div>

          {/* Built for Performance */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-start justify-between mb-6">
              <span className="text-xs font-mono text-muted-foreground">BENEFIT</span>
              <span className="text-xs font-mono text-muted-foreground">PERFORMANCE</span>
            </div>
            <div className="bg-secondary/50 rounded-xl p-4 mb-6 flex items-center justify-center">
              <div className="flex gap-1">
                {["●", "●", "●"].map((dot, i) => (
                  <div key={i} className="w-3 h-3 rounded-full bg-accent" />
                ))}
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Speed & SEO First</h3>
            <p className="text-sm text-muted-foreground">
              Hand-coded websites load faster, rank better, and need no babysitter.
            </p>
          </div>
        </div>

        {/* Bottom row features */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Direct Relationship */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex gap-6">
              <div className="bg-secondary/50 rounded-xl p-4 flex-shrink-0">
                <div className="relative w-20 h-20 rounded-full border-4 border-accent flex items-center justify-center">
                  <Zap className="w-8 h-8 text-foreground" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs font-mono text-muted-foreground">RELATIONSHIP</span>
                </div>
                <h3 className="font-semibold text-2xl mb-1">Talk to Your Developer</h3>
                <p className="text-sm text-muted-foreground">
                  Direct communication with the person actually building your site. No agency layers. No miscommunication. Just real collaboration.
                </p>
              </div>
            </div>
          </div>

          {/* Transparent Pricing */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex gap-6">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs font-mono text-muted-foreground">PRICING</span>
                </div>
                <h3 className="font-semibold text-2xl mb-1">No Surprise Invoices</h3>
                <p className="text-sm text-muted-foreground">
                  Transparent, upfront pricing. You know exactly what you're paying and what you're getting. No hidden fees, ever.
                </p>
              </div>
              <div className="bg-secondary/50 rounded-xl p-4 flex-shrink-0">
                <div className="flex gap-1">
                  {["$", "✓", "✓", "✓"].map((num, i) => (
                    <div
                      key={i}
                      className="w-8 h-10 bg-card border border-border rounded flex items-center justify-center text-sm"
                    >
                      <span className="font-mono">{num}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
