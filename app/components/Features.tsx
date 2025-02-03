import { Cpu, Gauge, Zap, BarChart } from "lucide-react"

const features = [
  {
    icon: <Cpu className="h-10 w-10 text-burgundy" />,
    title: "Advanced ECU Tuning",
    description: "State-of-the-art engine control unit software for optimal performance",
  },
  {
    icon: <Gauge className="h-10 w-10 text-crimson" />,
    title: "Real-time Telemetry",
    description: "Instant data analysis for informed decision-making on and off the track",
  },
  {
    icon: <Zap className="h-10 w-10 text-orange" />,
    title: "Power Optimization",
    description: "Innovative algorithms to maximize power output and efficiency",
  },
  {
    icon: <BarChart className="h-10 w-10 text-coral" />,
    title: "Performance Analytics",
    description: "Comprehensive data visualization and predictive modeling tools",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Cutting-Edge Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-accent-light p-6 rounded-lg shadow-md">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-primary">{feature.title}</h3>
              <p className="text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

