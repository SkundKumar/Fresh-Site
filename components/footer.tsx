export default function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 border-2 border-foreground rounded-sm flex items-center justify-center">
                <span className="text-[10px] font-mono">FS</span>
              </div>
              <span className="font-serif">Fresh Sites</span>
            </div>
            <p className="text-xs font-mono text-muted-foreground">
              HAND-CODED WEBSITES
              <br />
              REAL DEVELOPERS
            </p>
            <p className="text-xs font-mono text-muted-foreground mt-4">◆ NO COMPROMISES</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-mono text-muted-foreground mb-4">SERVICES</h4>
            <ul className="space-y-2">
              {["Single-Page Websites", "Multi-Page Websites", "Custom Deployment", "Maintenance Plans"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-xs font-mono text-muted-foreground mb-4">COMPANY</h4>
            <ul className="space-y-2">
              {["Our Process", "Why Hand-Coded", "Our Principles", "Contact Us"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Commitment */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-mono text-muted-foreground mb-4">OUR PROMISE</h4>
            <div className="bg-secondary/50 rounded-xl p-4 font-mono text-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-muted-foreground">100% Code Ownership</span>
              </div>
              <div className="space-y-1">
                <p className="text-primary">✓ Hand-Coded Excellence</p>
                <p className="text-muted-foreground">No Platform Lock-In, Ever.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">©2025 FRESH SITES. HAND-CODED WEBSITES.</p>
          <p className="text-xs text-muted-foreground">BUILT BY DEVELOPERS WHO CARE. DEPLOYED ON VERCEL.</p>
        </div>
      </div>
    </footer>
  )
}
