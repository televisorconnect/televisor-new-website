import { Card } from "@/components/ui/card";
import { Network, Workflow, Shield, Zap, Cloud, Settings } from "lucide-react";

const services = [
  {
    icon: Network,
    title: "Network Optimization",
    description: "Maximize performance and reliability of your telecommunications infrastructure with expert analysis and strategic improvements.",
  },
  {
    icon: Cloud,
    title: "Digital Transformation",
    description: "Navigate the transition to modern cloud-based communications with comprehensive planning and implementation support.",
  },
  {
    icon: Shield,
    title: "Security Consulting",
    description: "Protect your communications infrastructure with advanced security assessments and compliance guidance.",
  },
  {
    icon: Workflow,
    title: "System Integration",
    description: "Seamlessly connect disparate systems and platforms for unified, efficient telecommunications operations.",
  },
  {
    icon: Zap,
    title: "Performance Analytics",
    description: "Gain actionable insights with comprehensive monitoring and reporting of your network performance.",
  },
  {
    icon: Settings,
    title: "Infrastructure Design",
    description: "Build future-ready telecommunications systems with scalable architecture and cutting-edge technology.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive telecommunications consulting tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300 border-border bg-card"
              >
                <div className="mb-4">
                  <div className="inline-flex p-3 bg-blue-light rounded-lg">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-3 text-navy">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
