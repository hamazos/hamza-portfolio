"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, Linkedin, Github, Phone, Send } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link with form data
    const mailtoLink = `mailto:hamza_weslati@live.fr?subject=${encodeURIComponent(
      formData.subject,
    )}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
    window.location.href = mailtoLink
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Actively seeking opportunities in Europe and Canada. Available for immediate start with relocation
              accepted.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-8 space-y-6">
                <h3 className="text-2xl font-bold">Contact Information</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:hamza_weslati@live.fr"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        hamza_weslati@live.fr
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">Phone</p>
                      <a
                        href="tel:+21698755480"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        +216 98 755 480
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">Rue Cap Blanc, Agba, Tunis, Tunisia</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Linkedin className="h-5 w-5 text-accent" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">LinkedIn</p>
                      <a
                        href="https://linkedin.com/in/hamza-weslati"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        linkedin.com/in/hamza-weslati
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Github className="h-5 w-5 text-accent" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">GitHub</p>
                      <a
                        href="https://github.com/hamzaweslati"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        github.com/hamzaweslati
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 space-y-6">
                <h3 className="text-xl font-bold">Target Locations</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium mb-2">Europe</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Germany</Badge>
                      <Badge variant="secondary">Netherlands</Badge>
                      <Badge variant="secondary">Ireland</Badge>
                      <Badge variant="secondary">France</Badge>
                      <Badge variant="secondary">Belgium</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium mb-2">North America</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Canada</Badge>
                      <Badge variant="secondary">Quebec</Badge>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Availability</span>
                    <span className="font-medium text-green-500">Immediate</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Relocation</span>
                    <span className="font-medium">Accepted</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Work Mode</span>
                    <span className="font-medium">Hybrid Preferred</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Travel</span>
                    <span className="font-medium">Up to 25%</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Job opportunity, collaboration, etc."
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about the opportunity or your inquiry..."
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <Button type="submit" className="w-full gap-2">
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  This form will open your default email client. Alternatively, you can email me directly at{" "}
                  <a href="mailto:hamza_weslati@live.fr" className="underline hover:text-foreground">
                    hamza_weslati@live.fr
                  </a>
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
