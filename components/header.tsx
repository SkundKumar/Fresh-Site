import Link from "next/link"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-6 h-6 border-2 border-foreground rounded-sm flex items-center justify-center">
            <span className="text-xs font-mono">FS</span>
          </div>
          <span className="font-serif text-lg tracking-tight">Fresh Sites</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
            Features
          </a>
          <a href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
            Process
          </a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
            Pricing
          </a>
        </nav>

        <a href="https://wa.me/917347565100?text=Hi%20Fresh%20Sites%2C%20I%27d%20like%20to%20discuss%20building%20a%20website." target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors inline-block">
          Get a Quote
        </a>
      </div>
    </header>
  )
}
