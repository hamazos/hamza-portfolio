import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingDown, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function ProjectsSection() {
  const projects = [
    {
      id: "iso-27001-certification",
      title: "ISO 27001 Certification",
      subtitle: "GDS Global Display Solutions",
      description:
        "Led complete ISO 27001 certification project from audit to certification, implementing comprehensive ISMS across 3 sites with 200+ employees.",
      period: "2022-2023",
      duration: "18 months",
      role: "Project Manager & Lead Implementer",
      image: "/iso-27001-certification-cybersecurity-compliance.jpg",
      metrics: [
        { label: "Certification Time", value: "18 months", trend: "down", improvement: "25% faster than average" },
        { label: "Conformity Rate", value: "95%", trend: "up", improvement: "0 major non-conformities" },
        { label: "Budget Efficiency", value: "€73K/€75K", trend: "down", improvement: "Under budget" },
        { label: "ROI First Year", value: "+€150K", trend: "up", improvement: "New contracts secured" },
      ],
      technologies: ["ISO 27001", "EBIOS RM", "Risk Management", "ISMS", "Compliance", "Audit"],
      highlights: [
        "Certification obtained on first attempt",
        "200+ employees trained",
        "85 risks identified and treated",
        "35 procedures implemented",
      ],
    },
    {
      id: "open-source-soc",
      title: "Open Source SOC Implementation",
      subtitle: "GDS Tunisia",
      description:
        "Designed and deployed enterprise-grade Security Operations Center using open-source tools, achieving 70% cost reduction vs commercial solutions.",
      period: "2023",
      duration: "9 months",
      role: "SOC Architect & Project Lead",
      image: "/soc-security-operations-center-monitoring-dashboar.jpg",
      metrics: [
        { label: "MTTD Reduction", value: "4h → 3min", trend: "down", improvement: "-98.8%" },
        { label: "MTTR Reduction", value: "8h → 45min", trend: "down", improvement: "-90.6%" },
        { label: "Cost Savings", value: "€63K/year", trend: "down", improvement: "70% vs commercial" },
        { label: "Detection Coverage", value: "95%", trend: "up", improvement: "+137.5%" },
      ],
      technologies: ["Wazuh", "TheHive", "Cortex", "MISP", "SIEM", "XDR", "Threat Intelligence"],
      highlights: [
        "Real-time threat detection",
        "2.5M events/day processed",
        "ROI 286% first year",
        "0 major incidents since deployment",
      ],
    },
    {
      id: "digital-transformation",
      title: "Digital Transformation",
      subtitle: "GDS Global Display Solutions",
      description:
        "Complete IT infrastructure modernization project, migrating from 12 physical servers to 4 optimized servers with hybrid cloud architecture.",
      period: "2021-2023",
      duration: "18 months",
      role: "IT Manager & Infrastructure Architect",
      image: "/it-infrastructure-data-center-servers-cloud.jpg",
      metrics: [
        { label: "System Availability", value: "85% → 99.8%", trend: "up", improvement: "+14.8%" },
        { label: "Performance Gain", value: "+40%", trend: "up", improvement: "Global improvement" },
        { label: "Cost Reduction", value: "-20%", trend: "down", improvement: "Annual IT budget" },
        { label: "Energy Savings", value: "€45K/year", trend: "down", improvement: "Reduced footprint" },
      ],
      technologies: [
        "VMware Hyper-V",
        "HPE ProLiant Gen10",
        "TrueNAS",
        "Veeam Backup",
        "Windows Server 2022",
        "Hybrid Cloud",
      ],
      highlights: [
        "Server consolidation 12 → 4",
        "RPO: 24h | RTO: 6h",
        "€150K budget managed",
        "ROI 135% over 3 years",
      ],
    },
  ]

  return (
    <section id="projects" className="py-24">
      <div className="container">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Transformative IT initiatives delivering measurable business impact through strategic implementation and
              technical excellence
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto bg-muted">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  <div className="p-8 space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{project.period}</Badge>
                        <Badge variant="secondary">{project.duration}</Badge>
                      </div>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <p className="text-sm text-muted-foreground font-medium">{project.subtitle}</p>
                      <p className="text-muted-foreground">{project.description}</p>
                    </div>

                    <div className="space-y-3">
                      <p className="text-sm font-semibold">Role: {project.role}</p>
                      <div className="grid grid-cols-2 gap-3">
                        {project.metrics.slice(0, 4).map((metric, i) => (
                          <div key={i} className="space-y-1">
                            <div className="flex items-center gap-1">
                              {metric.trend === "up" ? (
                                <TrendingUp className="h-3 w-3 text-green-500" />
                              ) : (
                                <TrendingDown className="h-3 w-3 text-green-500" />
                              )}
                              <span className="text-xs text-muted-foreground">{metric.label}</span>
                            </div>
                            <p className="text-sm font-bold">{metric.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 5).map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 5 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 5} more
                        </Badge>
                      )}
                    </div>

                    <Button asChild className="w-full gap-2">
                      <Link href={`/projects/${project.id}`}>
                        View Full Case Study <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
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
