import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      company: "GDS Global Display Solutions",
      role: "IT Manager",
      period: "November 2021 - Present",
      duration: "3+ years",
      location: "Tunis, Tunisia",
      achievements: [
        "System Availability: 99.8% - 15% improvement in uptime",
        "Security Incidents Reduction: -30% through open-source SOC",
        "ISO 27001 Certification achieved in 18 months",
        "IT Budget Optimization: -20% via virtualization",
        "RPO: 24h | RTO: 6h - Veeam backup/recovery strategy",
      ],
      technologies: [
        "VMware Hyper-V",
        "Veeam Backup",
        "TrueNAS Scale",
        "Windows Server 2022",
        "Ubuntu",
        "Wazuh",
        "TheHive",
      ],
    },
    {
      company: "INLUCC",
      role: "IT Manager",
      period: "November 2018 - August 2021",
      duration: "2 years 10 months",
      location: "Tunisia",
      achievements: [
        "System Migration: 100% of services to new architecture",
        "Process Automation: +40% productivity gain",
        "Network Security: 0 major security incidents",
        "Network Performance: +25% bandwidth optimization",
      ],
      technologies: ["Linux", "Windows Server", "Network Security", "Automation"],
    },
    {
      company: "IVD",
      role: "IT Manager",
      period: "November 2014 - October 2018",
      duration: "4 years",
      location: "Tunisia",
      achievements: [
        "Infrastructure Modernization: 95% of systems upgraded",
        "24/7 Monitoring - 60% reduction in downtime",
        "Technical Documentation: 100% of procedures standardized",
        "User Training: 150+ people trained",
      ],
      technologies: ["Infrastructure", "Monitoring", "Documentation", "Training"],
    },
  ]

  return (
    <section id="experience" className="py-24">
      <div className="container">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Professional Experience</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven track record of delivering exceptional results in IT management and cybersecurity
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Building2 className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <Badge variant="secondary">{exp.duration}</Badge>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-accent mt-1">✓</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <Badge key={i} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
