import { Card } from "@/components/ui/card"
import { Shield, Server, Users } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">About Me</h2>
            <div className="grid md:grid-cols-3 gap-8 items-center pt-8">
              <div className="md:col-span-1 flex justify-center">
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-accent/20 shadow-xl">
                  <Image src="/hamza-weslati-professional.jpg" alt="Hamza Weslati" fill className="object-cover" />
                </div>
              </div>
              <div className="md:col-span-2 text-left space-y-4">
                <p className="text-xl text-muted-foreground text-balance">
                  Experienced IT Manager with 12+ years of expertise in cybersecurity, IT infrastructure, and strategic
                  project management. ISO 27001 certified expert specialized in digital transformation of complex
                  organizations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    ISO 27001 Certified
                  </span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    12+ Years Experience
                  </span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    200+ Team Members
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Cybersecurity & Compliance</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• ISO 27001 Implementation</li>
                <li>• IT Risk Management</li>
                <li>• Security audits and compliance</li>
                <li>• SOC management and incident response</li>
              </ul>
            </Card>

            <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Server className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Architecture & Infrastructure</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Hybrid architecture design</li>
                <li>• Virtualization and cloud computing</li>
                <li>• Backup and recovery strategies</li>
                <li>• System performance optimization</li>
              </ul>
            </Card>

            <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Management & Strategy</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Technical team leadership</li>
                <li>• Complex project management</li>
                <li>• Digital transformation</li>
                <li>• IT budget management</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
