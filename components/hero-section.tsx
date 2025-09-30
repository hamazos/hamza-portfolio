import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      <div className="container relative z-10 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left column - Photo */}
            <div className="flex justify-center md:justify-end order-2 md:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden border-4 border-background shadow-2xl">
                  <Image
                    src="/hamza-weslati-professional.jpg"
                    alt="Hamza Weslati - Senior IT Manager & Cybersecurity Specialist"
                    width={400}
                    height={400}
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right column - Content */}
            <div className="space-y-8 order-1 md:order-2 text-center md:text-left">
              <div className="space-y-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Senior IT Manager & Cybersecurity Specialist
                </p>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">Hamza Weslati</h1>
                <p className="text-lg md:text-xl text-muted-foreground text-balance">
                  Transforming IT challenges into business opportunities through strategic leadership and cybersecurity
                  excellence
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
                <Button size="lg" asChild className="gap-2">
                  <Link href="#projects">
                    View Projects <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="gap-2 bg-transparent">
                  <a href="/cv/hamza-weslati-cv.pdf" download>
                    <Download className="h-4 w-4" /> Download CV
                  </a>
                </Button>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://linkedin.com/in/hamza-wesleti"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://github.com/hamazos"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="mailto:hamza_weslati@live.fr" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Stats section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-accent">12+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-accent">200+</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-accent">99.8%</div>
              <div className="text-sm text-muted-foreground">System Uptime</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-accent">-30%</div>
              <div className="text-sm text-muted-foreground">Incident Response</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
