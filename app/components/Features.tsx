import { Cpu, Gauge, Zap, BarChart } from "lucide-react";

const features = [
  {
    icon: <Cpu className="h-10 w-10 text-burgundy" />,
    title: "ECU Tuning",
    description: "Standalone, Piggyback, and custom solutions for any vehicle.",
  },
  {
    icon: <Gauge className="h-10 w-10 text-crimson" />,
    title: "Telemetry",
    description:
      "Data analysis for informed decision-making on and off the track",
  },
  {
    icon: <Zap className="h-10 w-10 text-orange" />,
    title: "Real-Time Simulation",
    description:
      "Simulate and tune suspension geometry, braking, and aerodynamics.",
  },
  {
    icon: <BarChart className="h-10 w-10 text-coral" />,
    title: "Performance Analytics",
    description:
      "Data visualization and predictive modeling tools for any dataset",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Solutions We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-accent-light p-6 rounded-lg shadow-md"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-primary">
                {feature.title}
              </h3>
              <p className="text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
        <h2 className="text-xl font-bold text-center mb-12 text-primary">
          Don't see what you're looking for? Send us an email!
        </h2>
      </div>
    </section>
  );
}
