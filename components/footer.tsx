import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    navigation: [
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
    projects: [
      { label: "ISO 27001 Certification", href: "/projects/iso-27001-certification" },
      { label: "Open Source SOC", href: "/projects/open-source-soc" },
      { label: "Digital Transformation", href: "/projects/digital-transformation" },
    ],
    resources: [
      { label: "Download CV (English)", href: "/cv/hamza-weslati-cv-en.pdf" },
      { label: "Download CV (French)", href: "/cv/hamza-weslati-cv-fr.pdf" },
      { label: "LinkedIn Profile", href: "https://linkedin.com/in/hamza-weslati" },
    ],
  }

  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Hamza Weslati</h3>
              <p className="text-sm text-muted-foreground">
                Senior IT Manager & Cybersecurity Specialist with 12+ years of experience
              </p>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://linkedin.com/in/hamza-weslati"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://github.com/hamzaweslati"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="mailto:hamza_weslati@live.fr" aria-label="Email">
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Navigation</h4>
              <ul className="space-y-2">
                {footerLinks.navigation.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Projects */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Featured Projects</h4>
              <ul className="space-y-2">
                {footerLinks.projects.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/cv/hamza-weslati-cv-en.pdf"
                    download
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    <Download className="h-3 w-3" />
                    CV (English)
                  </a>
                </li>
                <li>
                  <a
                    href="/cv/hamza-weslati-cv-fr.pdf"
                    download
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    <Download className="h-3 w-3" />
                    CV (Français)
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/hamza-weslati"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">© {currentYear} Hamza Weslati. All rights reserved.</p>
              <p className="text-sm text-muted-foreground">Built with Next.js, TypeScript, and Tailwind CSS</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
