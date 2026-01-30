import { useState, useMemo } from "react";
import { cn } from "../lib/utils";
import { Check } from "lucide-react";

const companyTypes = [
  { id: "startup", label: "Startup / Small", transactions: "0-50/month", basePrice: 8000 },
  { id: "sme", label: "SME", transactions: "51-150/month", basePrice: 15000 },
  { id: "enterprise", label: "Enterprise", transactions: "150+/month", basePrice: 25000 },
];

const addOns = [
  { id: "payroll", label: "Payroll Processing", pricePerEmployee: 300, description: "Per employee/month" },
  { id: "corporate", label: "Corporate Secretarial", price: 5000, description: "Annual filings & compliance" },
  { id: "vat", label: "VAT Filing", price: 3000, description: "Monthly VAT returns" },
  { id: "audit", label: "Annual Audit Support", price: 15000, description: "Year-end audit preparation" },
];

export function Calculator() {
  const [selectedType, setSelectedType] = useState("startup");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [employeeCount, setEmployeeCount] = useState(1);

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const total = useMemo(() => {
    const base = companyTypes.find((t) => t.id === selectedType)?.basePrice || 0;
    const addOnTotal = addOns.reduce((acc, addOn) => {
      if (!selectedAddOns.includes(addOn.id)) return acc;
      if (addOn.id === "payroll") {
        return acc + addOn.pricePerEmployee! * employeeCount;
      }
      return acc + (addOn.price || 0);
    }, 0);
    return base + addOnTotal;
  }, [selectedType, selectedAddOns, employeeCount]);

  return (
    <section id="calculator" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            Cost Calculator
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Get an instant estimate for your monthly accounting and corporate service costs.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="p-6 md:p-8 rounded-2xl bg-card border border-border shadow-lg">
            {/* Company Type */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-foreground mb-3">
                Company Size
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {companyTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setSelectedType(type.id)}
                    className={cn(
                      "relative p-4 rounded-xl border-2 text-left transition-all",
                      selectedType === type.id
                        ? "border-foreground bg-secondary"
                        : "border-border hover:border-muted-foreground"
                    )}
                  >
                    {selectedType === type.id && (
                      <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-foreground flex items-center justify-center">
                        <Check className="w-3 h-3 text-background" />
                      </div>
                    )}
                    <span className="block text-base font-semibold text-foreground">
                      {type.label}
                    </span>
                    <span className="block text-sm text-muted-foreground mt-1">
                      {type.transactions}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Add-ons */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-foreground mb-3">
                Add-on Services
              </label>
              <div className="space-y-3">
                {addOns.map((addOn) => (
                  <button
                    key={addOn.id}
                    type="button"
                    onClick={() => toggleAddOn(addOn.id)}
                    className={cn(
                      "w-full flex items-center justify-between p-4 rounded-xl border-2 text-left transition-all",
                      selectedAddOns.includes(addOn.id)
                        ? "border-foreground bg-secondary"
                        : "border-border hover:border-muted-foreground"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "w-5 h-5 rounded border-2 flex items-center justify-center transition-colors",
                          selectedAddOns.includes(addOn.id)
                            ? "bg-foreground border-foreground"
                            : "border-muted-foreground"
                        )}
                      >
                        {selectedAddOns.includes(addOn.id) && (
                          <Check className="w-3 h-3 text-background" />
                        )}
                      </div>
                      <div>
                        <span className="block text-sm font-medium text-foreground">
                          {addOn.label}
                        </span>
                        <span className="block text-xs text-muted-foreground">
                          {addOn.description}
                        </span>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {addOn.pricePerEmployee
                        ? `${addOn.pricePerEmployee.toLocaleString()} THB/emp`
                        : `${addOn.price?.toLocaleString()} THB`}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Employee Count (if payroll selected) */}
            {selectedAddOns.includes("payroll") && (
              <div className="mb-8">
                <label
                  htmlFor="employees"
                  className="block text-sm font-medium text-foreground mb-3"
                >
                  Number of Employees
                </label>
                <input
                  type="number"
                  id="employees"
                  min={1}
                  max={500}
                  value={employeeCount}
                  onChange={(e) => setEmployeeCount(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground"
                />
              </div>
            )}

            {/* Total */}
            <div className="pt-6 border-t border-border">
              <div className="flex items-end justify-between">
                <div>
                  <span className="block text-sm text-muted-foreground">
                    Estimated Monthly Cost
                  </span>
                  <span className="block text-3xl font-semibold text-foreground mt-1">
                    {total.toLocaleString()} THB
                  </span>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Get a Quote
                </a>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                * This is an estimate. Actual pricing may vary based on your specific requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
