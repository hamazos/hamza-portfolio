import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Database, Shield, Terminal } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      icon: Shield,
      title: "Cybersecurity",
      skills: [
        { name: "ISO 27001/27002", level: 95 },
        { name: "SOC Management", level: 90 },
        { name: "Incident Response", level: 90 },
        { name: "Risk Assessment", level: 85 },
      ],
      tools: ["Wazuh", "TheHive", "MISP", "Cortex", "Nessus", "OpenVAS"],
    },
    {
      icon: Database,
      title: "Infrastructure & Systems",
      skills: [
        { name: "Linux Administration", level: 95 },
        { name: "Windows Server", level: 90 },
        { name: "Virtualization", level: 90 },
        { name: "Cloud Computing", level: 85 },
      ],
      tools: ["VMware", "Hyper-V", "AWS", "Azure", "Docker", "Kubernetes"],
    },
    {
      icon: Terminal,
      title: "Tools & Automation",
      skills: [
        { name: "Monitoring & Supervision", level: 90 },
        { name: "Backup & Recovery", level: 90 },
        { name: "Scripts & Automation", level: 85 },
        { name: "Network Management", level: 85 },
      ],
      tools: ["Veeam", "TrueNAS", "Nagios", "Zabbix", "PowerShell", "Python", "Ansible"],
    },
  ]

  const certifications = [
    { name: "ISC2 - Introduction to Cybersecurity", year: "2024", icon: Shield },
    { name: "Introduction to Cybersecurity - Gomycode", year: "2024", icon: Shield },
    { name: "CCNA / CCNP Security / MCSA", year: "2015", icon: Award },
    { name: "ISO 27001 Lead Implementer", year: "In Progress", icon: Award },
  ]

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technical expertise across cybersecurity, infrastructure, and IT management
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <Card key={index} className="p-8 space-y-6">
                  <div className="space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-accent rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t">
                    <p className="text-sm font-medium mb-3">Tools & Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {category.tools.map((tool, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center">Certifications & Education</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => {
                const Icon = cert.icon
                return (
                  <Card key={index} className="p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
                    <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground">{cert.year}</p>
                    </div>
                  </Card>
                )
              })}
            </div>

            <Card className="p-8 bg-card">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold">Academic Education</h4>
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium">Master's in Cybersecurity</p>
                      <p className="text-sm text-muted-foreground">ISSAT Gafsa, Tunisia</p>
                    </div>
                    <Badge variant="outline">2023</Badge>
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium">Bachelor's in Information Technologies</p>
                      <p className="text-sm text-muted-foreground">ISET Jendouba, Tunisia</p>
                    </div>
                    <Badge variant="outline">2011</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
