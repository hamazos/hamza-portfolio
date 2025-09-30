import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Award, Calendar, TrendingDown, TrendingUp, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

const projectsData = {
  "iso-27001-certification": {
    title: "ISO 27001 Certification",
    subtitle: "GDS Global Display Solutions",
    period: "2022-2023",
    duration: "18 months",
    role: "Project Manager & Lead Implementer",
    budget: "€75,000",
    team: "5 people",
    image: "/iso-27001-certification-cybersecurity-compliance-a.jpg",
    overview:
      "Led the complete ISO 27001 certification project for GDS Global Display Solutions, a leader in digital display with 200+ employees across 3 sites. The project involved establishing a comprehensive Information Security Management System (ISMS), conducting risk analysis on 85 identified risks, and implementing 114 security controls according to ISO 27001 standards.",
    challenge:
      "GDS required ISO 27001 certification to access new international markets and meet growing client security requirements. The organization had informal security policies, heterogeneous IT procedures across sites, no risk governance, and had never undergone a security audit. The challenge was to harmonize practices across multiple sites while maintaining business operations.",
    solution:
      "Implemented a structured 4-phase approach: (1) Comprehensive audit and gap analysis identifying 75% of controls to implement, (2) ISMS design with 35 operational procedures and risk analysis using EBIOS RM methodology, (3) Technical and organizational controls deployment including access controls, infrastructure security, and backup strategies, (4) Certification preparation and successful audit with Bureau Veritas.",
    results: [
      {
        category: "Certification & Compliance",
        metrics: [
          { label: "Certification Time", value: "18 months", improvement: "25% faster than market average" },
          { label: "Conformity Rate", value: "95%", improvement: "At audit" },
          { label: "Major Non-conformities", value: "0", improvement: "During certification" },
          { label: "Documentation", value: "100%", improvement: "Deployed and validated" },
        ],
      },
      {
        category: "Security Improvements",
        metrics: [
          { label: "Risks Treated", value: "85", improvement: "According to treatment plan" },
          { label: "Critical Risks Reduced", value: "23", improvement: "To acceptable level" },
          { label: "Antivirus Coverage", value: "100%", improvement: "Centralized deployment" },
          { label: "MFA Adoption", value: "100%", improvement: "All administrators" },
        ],
      },
      {
        category: "Training & Adoption",
        metrics: [
          { label: "People Trained", value: "200+", improvement: "100% workforce" },
          { label: "Training Satisfaction", value: "92%", improvement: "Positive feedback" },
          { label: "Phishing Test Success", value: "85%", improvement: "Post-training" },
          { label: "Procedures Adopted", value: "35", improvement: "Fully implemented" },
        ],
      },
      {
        category: "Financial Impact",
        metrics: [
          { label: "Budget Used", value: "€73K/€75K", improvement: "Under budget" },
          { label: "12-Month ROI", value: "+€150K", improvement: "New contracts" },
          { label: "Insurance Premium", value: "-15%", improvement: "Annual reduction" },
          { label: "Compliance Cost", value: "-30%", improvement: "Vs external approach" },
        ],
      },
    ],
    technologies: [
      "ISO 27001/27002",
      "EBIOS RM",
      "Risk Management",
      "ISMS",
      "Active Directory",
      "MFA",
      "Firewall",
      "VLAN Segmentation",
      "Centralized Antivirus",
      "Nagios",
      "3-2-1 Backup Strategy",
      "Business Continuity",
    ],
    keyAchievements: [
      "Certification obtained on first attempt with zero major non-conformities",
      "200+ employees trained with 92% satisfaction rate",
      "85 risks identified and treated according to comprehensive plan",
      "35 operational procedures created and successfully adopted",
      "3 new markets accessed thanks to ISO 27001 certification",
      "25% conversion rate increase in public tenders",
    ],
    testimonial: {
      quote:
        "Hamza led this project with professionalism and expertise. His ability to unite teams and make cybersecurity challenges concrete was decisive in our success.",
      author: "CEO, GDS Global Display Solutions",
    },
  },
  "open-source-soc": {
    title: "Open Source SOC Implementation",
    subtitle: "GDS Tunisia",
    period: "2023",
    duration: "9 months",
    role: "SOC Architect & Project Lead",
    budget: "€25,000",
    team: "3 SOC analysts + 2 administrators",
    image: "/soc-security-operations-center-monitoring-siem-das.jpg",
    overview:
      "Designed and deployed an enterprise-grade Security Operations Center using open-source technologies for GDS Tunisia. The project addressed increasing cybersecurity incidents (+150% intrusion attempts in 12 months) while achieving 70% cost reduction compared to commercial SIEM solutions. The SOC processes 2.5M events daily with real-time threat detection and automated response capabilities.",
    challenge:
      "GDS faced a deteriorating security context with advanced malware escaping traditional solutions, targeted attacks on the Tunisian industrial sector, and average detection time of 4 hours with 8-hour response time. Commercial SIEM solutions would cost €80K-120K annually, exceeding budget constraints. The organization needed real-time threat detection, global infrastructure visibility, structured incident response, and ISO 27001 compliance maintenance.",
    solution:
      "Implemented a comprehensive open-source SOC architecture: Wazuh (SIEM/XDR platform with 50,000 EPS capacity), TheHive (incident response management with SOAR capabilities), Cortex (analysis engine with 45+ analyzers), and MISP (threat intelligence with 500K+ IOCs). Deployed 180+ agents across Windows endpoints, Linux servers, and network devices. Developed 86 custom detection rules and achieved 85% false positive reduction through tuning.",
    results: [
      {
        category: "Detection Performance",
        metrics: [
          { label: "MTTD (Mean Time To Detection)", value: "4h → 3min", improvement: "-98.8%" },
          { label: "MTTR (Mean Time To Response)", value: "8h → 45min", improvement: "-90.6%" },
          { label: "False Positives", value: "85% → 12%", improvement: "-85.9%" },
          { label: "Monitoring Coverage", value: "40% → 95%", improvement: "+137.5%" },
        ],
      },
      {
        category: "SOC Activity",
        metrics: [
          { label: "Events/Day", value: "2.5M", improvement: "Collected and analyzed" },
          { label: "Alerts Generated", value: "150-200/day", improvement: "Actionable alerts" },
          { label: "Incidents Validated", value: "15-25/week", improvement: "True positives" },
          { label: "Cases Resolved", value: "98%", improvement: "Within 24h" },
        ],
      },
      {
        category: "Economic Impact",
        metrics: [
          { label: "Solution Cost", value: "€22K", improvement: "Hardware + training" },
          { label: "Commercial Cost Avoided", value: "€85K/year", improvement: "Savings" },
          { label: "Net Savings", value: "€63K", improvement: "First year" },
          { label: "ROI", value: "286%", improvement: "First year" },
        ],
      },
      {
        category: "Threat Detection",
        metrics: [
          { label: "Brute Force Attacks", value: "245", improvement: "Incidents blocked" },
          { label: "Malware Infections", value: "89", improvement: "Detected and removed" },
          { label: "Lateral Movement", value: "34", improvement: "Attempts stopped" },
          { label: "Data Exfiltration", value: "12", improvement: "Prevented" },
        ],
      },
    ],
    technologies: [
      "Wazuh",
      "TheHive",
      "Cortex",
      "MISP",
      "SIEM",
      "XDR",
      "SOAR",
      "Threat Intelligence",
      "Ubuntu 22.04 LTS",
      "YARA Rules",
      "VirusTotal",
      "Shodan",
      "Ansible",
      "GPO",
    ],
    keyAchievements: [
      "Real-time detection with 3-minute MTTD (98.8% improvement)",
      "2.5M events/day processed with 95% infrastructure coverage",
      "ROI of 286% in first year with €63K annual savings",
      "0 major security incidents since SOC deployment",
      "3 SOC analysts certified and trained internally",
      "40% automated response through SOAR capabilities",
    ],
    testimonial: {
      quote:
        "Hamza's open source SOC revolutionized our security approach. We now have complete visibility and response capabilities we never imagined possible with our budget.",
      author: "IT Security Manager, GDS Tunisia",
    },
  },
  "digital-transformation": {
    title: "Digital Transformation",
    subtitle: "GDS Global Display Solutions",
    period: "2021-2023",
    duration: "18 months",
    role: "IT Manager & Infrastructure Architect",
    budget: "€150,000",
    team: "5 people",
    image: "/it-infrastructure-data-center-servers-virtualizati.jpg",
    overview:
      "Led complete IT infrastructure modernization for GDS Global Display Solutions to support international growth and improve competitiveness. The project involved migrating from 12 physical servers to 4 optimized servers with hybrid cloud architecture, implementing enterprise-grade backup and recovery strategies, and achieving 99.8% system availability while reducing IT operational costs by 20%.",
    challenge:
      "GDS required complete IT infrastructure modernization to support international growth. The existing infrastructure consisted of 12 aging physical servers with 85% availability, heterogeneous systems, no comprehensive backup strategy, and high energy costs. The organization needed improved availability and performance, reduced operational costs, hybrid cloud architecture, and security governance implementation.",
    solution:
      "Implemented a comprehensive 4-phase transformation: (1) Complete audit of existing infrastructure and target architecture design, (2) Progressive migration to hybrid cloud with HPE ProLiant Gen10 servers and VMware Hyper-V virtualization, (3) Implementation of Veeam Backup & Replication with 3-2-1 strategy (RPO: 24h, RTO: 6h), (4) Team training on new technologies and knowledge transfer.",
    results: [
      {
        category: "Infrastructure Performance",
        metrics: [
          { label: "System Availability", value: "85% → 99.8%", improvement: "+14.8%" },
          { label: "Global Performance", value: "+40%", improvement: "Improvement" },
          { label: "Server Consolidation", value: "12 → 4", improvement: "Optimized" },
          { label: "Virtualization Ratio", value: "15 VMs", improvement: "On 4 hosts" },
        ],
      },
      {
        category: "Cost Optimization",
        metrics: [
          { label: "IT Budget Reduction", value: "-20%", improvement: "Annual savings" },
          { label: "Energy Costs", value: "-€45K/year", improvement: "Reduced footprint" },
          { label: "Maintenance Costs", value: "-35%", improvement: "Simplified management" },
          { label: "ROI", value: "135%", improvement: "Over 3 years" },
        ],
      },
      {
        category: "Backup & Recovery",
        metrics: [
          { label: "RPO (Recovery Point)", value: "24 hours", improvement: "Data loss window" },
          { label: "RTO (Recovery Time)", value: "6 hours", improvement: "Downtime target" },
          { label: "Replication Time", value: "5 minutes", improvement: "Real-time sync" },
          { label: "Backup Success Rate", value: "99.9%", improvement: "Automated" },
        ],
      },
      {
        category: "Business Impact",
        metrics: [
          { label: "Downtime Reduction", value: "-85%", improvement: "Annual hours" },
          { label: "User Satisfaction", value: "+45%", improvement: "Performance feedback" },
          { label: "Incident Resolution", value: "-60%", improvement: "Faster response" },
          { label: "Scalability", value: "+300%", improvement: "Growth capacity" },
        ],
      },
    ],
    technologies: [
      "HPE ProLiant Gen10",
      "Dell PowerEdge R610",
      "VMware Hyper-V",
      "Veeam Backup & Replication",
      "TrueNAS Scale",
      "Windows Server 2022",
      "Ubuntu Server",
      "Hybrid Cloud Architecture",
      "Enterprise Networking",
      "Monitoring & Supervision",
    ],
    keyAchievements: [
      "System availability improved from 85% to 99.8%",
      "40% global performance improvement across all systems",
      "20% reduction in annual IT budget while improving services",
      "€45K annual savings in energy costs through consolidation",
      "RPO 24h / RTO 6h with real-time replication every 5 minutes",
      "ROI of 135% achieved over 3-year period",
    ],
    testimonial: {
      quote:
        "The infrastructure transformation led by Hamza has been transformative for our business. We now have a robust, scalable platform that supports our international growth.",
      author: "CTO, GDS Global Display Solutions",
    },
  },
}

export async function generateStaticParams() {
  return Object.keys(projectsData).map((id) => ({
    id,
  }))
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const project = projectsData[params.id as keyof typeof projectsData]

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} - Hamza Weslati Portfolio`,
    description: project.overview.substring(0, 160),
  }
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projectsData[params.id as keyof typeof projectsData]

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      <article className="py-12">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Back button */}
            <Button variant="ghost" asChild className="gap-2">
              <Link href="/#projects">
                <ArrowLeft className="h-4 w-4" /> Back to Projects
              </Link>
            </Button>

            {/* Header */}
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="outline" className="gap-1">
                  <Calendar className="h-3 w-3" />
                  {project.period}
                </Badge>
                <Badge variant="secondary">{project.duration}</Badge>
                <Badge variant="outline" className="gap-1">
                  <User className="h-3 w-3" />
                  {project.role}
                </Badge>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">{project.title}</h1>
                <p className="text-xl text-muted-foreground">{project.subtitle}</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-semibold">{project.duration}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Budget</p>
                  <p className="font-semibold">{project.budget}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Team Size</p>
                  <p className="font-semibold">{project.team}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Role</p>
                  <p className="font-semibold text-sm">{project.role.split("&")[0].trim()}</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-96 rounded-xl overflow-hidden bg-muted">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>

            {/* Overview */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-3xl font-bold">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
            </div>

            {/* Challenge */}
            <Card className="p-8 bg-muted/50">
              <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
            </Card>

            {/* Solution */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-3xl font-bold">Solution Approach</h2>
              <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
            </div>

            {/* Results */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Results & Impact</h2>
              {project.results.map((category, index) => (
                <Card key={index} className="p-8">
                  <h3 className="text-xl font-semibold mb-6">{category.category}</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.metrics.map((metric, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{metric.label}</span>
                          {metric.value.includes("→") || metric.value.includes("-") ? (
                            <TrendingDown className="h-4 w-4 text-green-500" />
                          ) : (
                            <TrendingUp className="h-4 w-4 text-green-500" />
                          )}
                        </div>
                        <p className="text-2xl font-bold">{metric.value}</p>
                        <p className="text-sm text-muted-foreground">{metric.improvement}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            {/* Technologies */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Technologies & Tools</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <Badge key={i} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Key Achievements */}
            <Card className="p-8 bg-accent/5">
              <h2 className="text-2xl font-bold mb-6">Key Achievements</h2>
              <ul className="space-y-3">
                {project.keyAchievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Testimonial */}
            {project.testimonial && (
              <Card className="p-8 bg-muted/50">
                <blockquote className="space-y-4">
                  <p className="text-lg italic leading-relaxed">{project.testimonial.quote}</p>
                  <footer className="text-sm text-muted-foreground">— {project.testimonial.author}</footer>
                </blockquote>
              </Card>
            )}

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button asChild className="flex-1">
                <Link href="/#contact">Get in Touch</Link>
              </Button>
              <Button asChild variant="outline" className="flex-1 bg-transparent">
                <Link href="/#projects">View More Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
