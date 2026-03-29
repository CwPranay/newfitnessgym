import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const PLANS = [
  {
    name: "Basic",
    price: "₹999",
    duration: "/ Month",
    features: ["Gym Access", "Locker Facility", "General Training", "Hygienic Environment"],
    isPopular: false,
  },
  {
    name: "Standard",
    price: "₹1499",
    duration: "/ Month",
    features: ["Gym Access", "Locker Facility", "General Training", "Diet Consultation", "Steam Room Access"],
    isPopular: true,
  },
  {
    name: "Premium",
    price: "₹1999",
    duration: "/ Month",
    features: ["All Standard Features", "Personal Training Sessions", "Body Composition Analysis", "Supplement Guide", "VIP Priority"],
    isPopular: false,
  },
]

export function Plans() {
  return (
    <section id="plans" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-4 italic">Memberships</h2>
          <h3 className="text-4xl md:text-5xl font-headline font-black uppercase mb-4 tracking-tighter">Choose Your <span className="text-accent italic">Level</span></h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Select the plan that fits your fitness goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PLANS.map((plan, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2 ${
                plan.isPopular 
                  ? "bg-secondary/50 border-primary shadow-[0_20px_40px_rgba(0,0,0,0.3)]" 
                  : "bg-card border-white/10"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-background text-[10px] font-black uppercase px-4 py-1.5 rounded-full tracking-widest italic">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h4 className="font-headline font-bold text-2xl uppercase italic mb-2">{plan.name}</h4>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">{plan.duration}</span>
                </div>
              </div>

              <div className="flex-grow space-y-4 mb-10">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                asChild
                className={`w-full h-14 text-lg font-black uppercase tracking-wider ${
                  plan.isPopular ? "bg-primary text-background hover:bg-primary/90" : "bg-white/5 hover:bg-white/10"
                }`}
              >
                <Link href="https://wa.me/918425919590">Get Started</Link>
              </Button>
            </div>
          ))}
        </div>
        
        <p className="text-center mt-12 text-muted-foreground text-sm italic">
          * Terms and conditions apply. Contact us for group discounts or corporate plans.
        </p>
      </div>
    </section>
  )
}