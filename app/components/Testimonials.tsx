import Image from "next/image"

const testimonials = [
  {
    quote: "Lambda Solutions' software gave us the edge we needed to clinch the championship.",
    author: "John Doe",
    role: "Lead Engineer, Top Speed Racing",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote: "Their real-time telemetry system is a game-changer for our team's strategy.",
    author: "Jane Smith",
    role: "Team Principal, Velocity Motorsports",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote: "We've seen a 15% increase in power output since implementing Lambda's ECU software.",
    author: "Mike Johnson",
    role: "Chief Mechanic, Thunderbolt Racing",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-secondary-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-burgundy">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-accent-light p-6 rounded-lg shadow-md border-t-4 border-orange">
              <p className="text-secondary mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-crimson">{testimonial.author}</p>
                  <p className="text-sm text-secondary">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

