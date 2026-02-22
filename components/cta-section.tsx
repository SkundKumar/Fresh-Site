import { ArrowRight, FileText, Mail, Send, Users, Zap } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-card border border-border rounded-3xl p-12 md:p-16 overflow-hidden">
          {/* Decorative corner icons */}
          <div className="absolute top-8 left-8 w-10 h-10 border border-border rounded-lg flex items-center justify-center">
            <Mail className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="absolute top-8 right-8 w-10 h-10 border border-border rounded-lg flex items-center justify-center">
            <Zap className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="absolute bottom-8 left-8 w-10 h-10 border border-border rounded-lg flex items-center justify-center">
            <FileText className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="absolute bottom-8 right-8 w-10 h-10 border border-border rounded-lg flex items-center justify-center">
            <Users className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="absolute top-1/2 right-16 -translate-y-1/2 w-10 h-10 border border-border rounded-lg flex items-center justify-center">
            <Send className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="absolute bottom-1/3 left-16 w-10 h-10 border border-border rounded-lg flex items-center justify-center">
            <span className="text-muted-foreground text-lg">+</span>
          </div>

          {/* Main content */}
          <div className="text-center max-w-2xl mx-auto relative z-10">
            <h2 className="font-serif text-4xl md:text-5xl mb-4 leading-tight">
              Your business deserves better
              <br />
              than a template.
            </h2>
            <p className="text-muted-foreground mb-8">
              Let Fresh Sites build you something worth showing off. Hand-coded, transparent, and built to last.
            </p>
            <a href="https://wa.me/917347565100?text=Hi%20Fresh%20Sites%2C%20I%27m%20interested%20in%20getting%20a%20custom%20website%20built." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
              Get Your Free Quote
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
