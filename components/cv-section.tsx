import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Globe } from "lucide-react"

export function CVSection() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Curriculum Vitae</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Download my complete CV in your preferred language
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* English CV */}
            <Card className="p-8 space-y-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-accent" />
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold">English Version</h3>
                    <Badge variant="secondary">EN</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Complete professional CV in English, optimized for international opportunities in Europe and North
                    America
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center justify-between">
                  <span>Format</span>
                  <span className="font-medium">PDF</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Pages</span>
                  <span className="font-medium">2 pages</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Last Updated</span>
                  <span className="font-medium">September 2025</span>
                </div>
              </div>

              <Button asChild className="w-full gap-2">
                <a href="/cv/hamza-weslati-cv-en.pdf" download>
                  <Download className="h-4 w-4" />
                  Download English CV
                </a>
              </Button>
            </Card>

            {/* French CV */}
            <Card className="p-8 space-y-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-accent" />
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold">Version Française</h3>
                    <Badge variant="secondary">FR</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    CV professionnel complet en français, optimisé pour les opportunités en France, Belgique et Québec
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center justify-between">
                  <span>Format</span>
                  <span className="font-medium">PDF</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Pages</span>
                  <span className="font-medium">2 pages</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Dernière mise à jour</span>
                  <span className="font-medium">September 2025</span>
                </div>
              </div>

              <Button asChild className="w-full gap-2">
                <a href="/cv/hamza-weslati-cv-fr.pdf" download>
                  <Download className="h-4 w-4" />
                  Télécharger CV Français
                </a>
              </Button>
            </Card>
          </div>

          {/* Quick Summary */}
          <Card className="p-8 bg-muted/50">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Globe className="h-6 w-6 text-accent" />
                <h3 className="text-xl font-bold">Professional Summary</h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Experience</p>
                  <p className="text-2xl font-bold">12+ Years</p>
                  <p className="text-sm text-muted-foreground">IT Management & Cybersecurity</p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Education</p>
                  <p className="text-2xl font-bold">Master's</p>
                  <p className="text-sm text-muted-foreground">Cybersecurity (2023)</p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Certifications</p>
                  <p className="text-2xl font-bold">ISO 27001</p>
                  <p className="text-sm text-muted-foreground">Lead Implementer (In Progress)</p>
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  <strong>Languages:</strong> French (Native), Arabic (Native), English (Professional B2-C1), German
                  (Basic A2)
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
