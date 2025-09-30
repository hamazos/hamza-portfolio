import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Hamza led the ISO 27001 certification project with professionalism and expertise. His ability to unite teams and make cybersecurity challenges concrete was decisive in our success.",
    author: "CEO",
    company: "GDS Global Display Solutions",
    role: "Chief Executive Officer",
  },
  {
    quote:
      "The open source SOC revolutionized our security approach. We now have complete visibility and response capabilities we never imagined possible with our budget.",
    author: "IT Security Manager",
    company: "GDS Tunisia",
    role: "Information Security Manager",
  },
  {
    quote:
      "Hamza's strategic vision and technical expertise transformed our IT infrastructure. The 99.8% uptime achievement exceeded all our expectations.",
    author: "Operations Director",
    company: "GDS Global Display Solutions",
    role: "Director of Operations",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">What People Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Testimonials from colleagues and clients I've worked with
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 space-y-6 hover:shadow-lg transition-shadow relative">
                <Quote className="h-10 w-10 text-accent/20 absolute top-6 right-6" />
                <p className="text-muted-foreground italic leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="space-y-1 pt-4 border-t">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-accent">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
