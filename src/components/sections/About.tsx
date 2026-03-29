import { CheckCircle2, ShieldCheck, Users, Trophy } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const FEATURES = [
  {
    title: "Clean & Hygienic",
    description: "We maintain strict cleanliness protocols for your safety.",
    icon: ShieldCheck,
  },
  {
    title: "Friendly Trainers",
    description: "Expert guidance to help you reach your goals faster.",
    icon: Trophy,
  },
  {
    title: "Supportive Community",
    description: "Join a group that motivates and inspires each other.",
    icon: Users,
  },
]

export function About() {
  const aboutImage =  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
              <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-4 italic">The New Age Advantage</h2>
              <h3 className="text-4xl md:text-5xl font-headline font-black uppercase mb-8 leading-tight tracking-tighter">
                More Than Just <br />A Gym. A <span className="text-primary italic">Transformation</span> Lab.
              </h3>
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                New Age Fitness is a modern unisex gym focused on strength, transformation, and a supportive environment. Located in the heart of Kalyan East, we provide well-maintained equipment and expert guidance to help you unlock your true potential.
              </p>
              
              <div className="grid gap-6">
                {FEATURES.map((feature, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-headline font-bold uppercase text-lg mb-1">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src={aboutImage} 
                alt="Gym Experience" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                data-ai-hint="gym training"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/20 rounded-full blur-3xl z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/10 rounded-full animate-pulse z-0" />
          </div>
        </div>
      </div>
    </section>
  )
}
