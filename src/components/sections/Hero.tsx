import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-[100svh] pb-20 flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f"
          alt="Gym Hero"
          fill
          className="object-cover scale-105"
          priority
        />

        {/* Stronger overlay for readability */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

        <div className="absolute inset-0 bg-grid opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center lg:text-left flex flex-col lg:flex-row items-center gap-12">
        
        <div className="max-w-3xl animate-fade-in-up">
          
          

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-black uppercase italic tracking-tighter leading-[0.9] mb-6">
            Transform Your <br />
            <span className="text-primary italic">Body</span> at <br />
            New Age <span className="text-accent">Fitness</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed font-medium">
            Experience the ultimate fitness journey in a clean, modern, and fully equipped gym. Expert trainers and a community that pushes you further.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            
            <Button
              asChild
              size="lg"
              className="h-14 px-10 text-lg font-bold bg-accent hover:bg-accent/90 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,150,0,0.3)]"
            >
              <Link href="https://wa.me/918425919590" target="_blank">
                JOIN NOW
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 px-10 text-lg font-bold border-2 hover:bg-white/5 transition-all"
            >
              <Link href="#plans">VIEW PLANS</Link>
            </Button>

          </div>
        </div>
      </div>

      {/* Stats Overlay */}
      <div className="absolute bottom-6 left-0 right-0 z-10">
        <div className="container mx-auto px-4">
          
          <div className="grid grid-cols-3 text-center py-6 border border-white/10 glass-morphism rounded-2xl px-4 md:px-12">
            
            <div>
              <div className="text-3xl md:text-4xl font-headline font-black text-primary italic">50+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                Modern Equipment
              </div>
            </div>

            <div className="border-x border-white/10">
              <div className="text-3xl md:text-4xl font-headline font-black text-primary italic">500+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                Active Members
              </div>
            </div>

            <div>
              <div className="text-3xl md:text-4xl font-headline font-black text-primary italic">10+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                Expert Trainers
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}