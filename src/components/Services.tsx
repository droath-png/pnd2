import { Calculator, FileText, Users, Building2 } from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Monthly Accounting",
    description:
      "Complete bookkeeping, financial statements, and tax filings. Stay compliant with Thai regulations.",
  },
  {
    icon: FileText,
    title: "Corporate Secretarial",
    description:
      "Annual filings, board meetings, shareholder management, and statutory compliance.",
  },
  {
    icon: Users,
    title: "Payroll & HR",
    description:
      "Employee payroll processing, social security filings, and work permit support.",
  },
  {
    icon: Building2,
    title: "Company Formation",
    description:
      "Register your Thai company with proper structure, BOI applications, and business licensing.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Everything you need to run a compliant Thai company, handled by experts who understand foreign founders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 rounded-xl bg-card border border-border hover:border-foreground/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-secondary mb-4">
                <service.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
