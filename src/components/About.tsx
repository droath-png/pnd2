import { Shield, Clock, Globe, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Built for Foreigners",
    description: "We understand the unique challenges foreign founders face in Thailand.",
  },
  {
    icon: Shield,
    title: "100% Compliant",
    description: "Stay on the right side of Thai tax and corporate regulations.",
  },
  {
    icon: Clock,
    title: "Fast Response",
    description: "Get answers within 24 hours. No more waiting weeks for simple questions.",
  },
  {
    icon: HeartHandshake,
    title: "Transparent Pricing",
    description: "No hidden fees. Know exactly what you're paying for every month.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
              Why Foreign Founders Choose PND50
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Running a business in Thailand as a foreigner comes with unique challenges. 
              We've built our services specifically to help international entrepreneurs 
              navigate Thai regulations with confidence.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <span className="block text-4xl font-semibold text-foreground">200+</span>
              <span className="block text-sm text-muted-foreground mt-1">Active Clients</span>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <span className="block text-4xl font-semibold text-foreground">8+</span>
              <span className="block text-sm text-muted-foreground mt-1">Years Experience</span>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <span className="block text-4xl font-semibold text-foreground">30+</span>
              <span className="block text-sm text-muted-foreground mt-1">Countries Served</span>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <span className="block text-4xl font-semibold text-foreground">99%</span>
              <span className="block text-sm text-muted-foreground mt-1">Client Retention</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
