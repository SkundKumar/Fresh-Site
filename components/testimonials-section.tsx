export default function TestimonialsSection() {
  const testimonials = [
    {
      id: "FS-0001",
      quote:
        "We've worked with dozens of developers. Fresh Sites was different. They delivered exactly what was designed, on time, with zero revisions needed. The code quality is pristine.",
      author: "Sarah Chen",
      role: "FOUNDER & TECH STARTUP",
    },
    {
      id: "FS-0002",
      quote:
        "No agency fluff, no missed deadlines, no surprise invoices. They built our site hand-coded and faster than any template could. Now it actually converts.",
      author: "James Morrison",
      role: "OWNER & LOCAL BUSINESS",
    },
    {
      id: "FS-0003",
      quote:
        "The entire codebase is ours to keep. No platform lock-in. We can hand it to another developer tomorrow if we want. That transparency meant everything.",
      author: "Maya Patel",
      role: "CEO & CREATIVE AGENCY",
    },
    {
      id: "FS-0004",
      quote:
        "I was burned by Webflow before. Fresh Sites gave me a real, scalable website built on clean code. The speed improvement alone was worth it.",
      author: "Michael Zhang",
      role: "PRODUCT & SAAS",
    },
    {
      id: "FS-0005",
      quote: "Direct access to the developer building your site. No gatekeeping. No miscommunication. Just real collaboration with someone who cares about the craft.",
      author: "Emma Roberts",
      role: "FOUNDER & BRAND STUDIO",
    },
  ]

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-start justify-between mb-16">
          <div>
            <span className="text-xs font-mono text-muted-foreground tracking-wider">◆ CLIENT STORIES</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 max-w-md leading-tight">
              Businesses that trusted Fresh Sites
            </h2>
            <span className="block mt-1 text-[10px] text-muted-foreground opacity-60">Testimonials are fictional and for demo purposes.</span>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs hidden md:block">
            Real feedback from real clients who own their code.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={testimonial.id} className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-muted-foreground">REF</span>
                <span className="text-xs font-mono text-primary">{testimonial.id}</span>
                <div className="w-12 h-12 bg-secondary rounded-lg" />
              </div>
              <p className="text-sm leading-relaxed mb-6">{testimonial.quote}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">{testimonial.author}</p>
                  <p className="text-xs font-mono text-muted-foreground">{testimonial.role}</p>
                </div>
                <div className="w-4 h-4 border border-border rounded flex items-center justify-center">
                  <span className="text-[8px]">↗</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {testimonials.slice(3, 4).map((testimonial) => (
            <div key={testimonial.id} className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-muted-foreground">REF</span>
                <span className="text-xs font-mono text-primary">{testimonial.id}</span>
                <div className="w-12 h-12 bg-secondary rounded-lg" />
              </div>
              <p className="text-sm leading-relaxed mb-6">{testimonial.quote}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">{testimonial.author}</p>
                  <p className="text-xs font-mono text-muted-foreground">{testimonial.role}</p>
                </div>
                <div className="w-4 h-4 border border-border rounded flex items-center justify-center">
                  <span className="text-[8px]">↗</span>
                </div>
              </div>
            </div>
          ))}

          {/* Join CTA */}
          <div className="bg-secondary/50 border border-dashed border-border rounded-2xl p-6 flex flex-col items-center justify-center text-center">
            <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center mb-3">
              <span className="text-lg">+</span>
            </div>
            <span className="text-sm font-mono text-muted-foreground">YOUR STORY HERE</span>
            <p className="text-sm text-muted-foreground mt-1">Join the archive.</p>
          </div>

          {testimonials.slice(4).map((testimonial) => (
            <div key={testimonial.id} className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-muted-foreground">REF</span>
                <span className="text-xs font-mono text-primary">{testimonial.id}</span>
                <div className="w-12 h-12 bg-secondary rounded-lg" />
              </div>
              <p className="text-sm leading-relaxed mb-6">{testimonial.quote}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">{testimonial.author}</p>
                  <p className="text-xs font-mono text-muted-foreground">{testimonial.role}</p>
                </div>
                <div className="w-4 h-4 border border-border rounded flex items-center justify-center">
                  <span className="text-[8px]">↗</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
