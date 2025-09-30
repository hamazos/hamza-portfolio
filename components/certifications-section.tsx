import { Card } from "@/components/ui/card"
import { Award, Shield, Server, Code } from "lucide-react"

const certifications = [
  {
    icon: Shield,
    name: "ISC2 - Introduction to Cybersecurity",
    issuer: "ISC2",
    year: "2024",
    status: "Active",
  },
  {
    icon: Shield,
    name: "Introduction to Cybersecurity",
    issuer: "Gomycode",
    year: "2024",
    status: "Active",
  },
  {
    icon: Award,
    name: "ISO 27001 Lead Implementer",
    issuer: "ISO",
    year: "In Progress",
    status: "In Progress",
  },
  {
    icon: Server,
    name: "CCNA / CCNP Security / MCSA",
    issuer: "GTEC",
    year: "2015",
    status: "Active",
  },
]

const education = [
  {
    degree: "Professional Master's in Cybersecurity",
    institution: "ISSAT Gafsa, Tunisia",
    year: "2023",
    icon: Shield,
  },
  {
    degree: "Applied Bachelor's in Information Technologies",
    institution: "ISET Jendouba, Tunisia",
    year: "2011",
    icon: Code,
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24">
      <div className="container">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Certifications & Education</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Professional certifications and academic qualifications
            </p>
          </div>

          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Professional Certifications</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => {
                  const Icon = cert.icon
                  return (
                    <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-accent" />
                        </div>
                        <div className="space-y-2 flex-1">
                          <h4 className="font-semibold leading-tight">{cert.name}</h4>
                          <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                          <div className="flex items-center justify-between pt-2">
                            <span className="text-sm font-medium text-accent">{cert.year}</span>
                            <span
                              className={`text-xs px-2 py-1 rounded-full ${
                                cert.status === "Active"
                                  ? "bg-green-500/10 text-green-600 dark:text-green-400"
                                  : "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400"
                              }`}
                            >
                              {cert.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  )
                })}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Academic Education</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {education.map((edu, index) => {
                  const Icon = edu.icon
                  return (
                    <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold leading-tight">{edu.degree}</h4>
                          <p className="text-sm text-muted-foreground">{edu.institution}</p>
                          <span className="text-sm font-medium text-primary">{edu.year}</span>
                        </div>
                      </div>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
