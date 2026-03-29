import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-gym")

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
        src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f"
          alt="Gym Hero"
          fill
          className="object-cover opacity-30 scale-105"
          priority
          data-ai-hint="modern gym interior"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center lg:text-left flex flex-col lg:flex-row items-center gap-12">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase">Now Open in Kalyan East</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-black uppercase italic tracking-tighter leading-[0.9] mb-6">
            Transform Your <br />
            <span className="text-primary italic">Body</span> at <br />
            New Age <span className="text-accent">Fitness</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed font-medium">
            Experience the ultimate fitness journey in a clean, modern, and fully equipped gym. Expert trainers and a community that pushes you further.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button asChild size="lg" className="h-14 px-10 text-lg font-bold bg-accent hover:bg-accent/90 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,150,0,0.3)]">
              <Link href="https://wa.me/918425919590">JOIN NOW</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-10 text-lg font-bold border-2 hover:bg-white/5 transition-all">
              <Link href="#plans">VIEW PLANS</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Overlay */}
      <div className="absolute bottom-10 left-0 right-0 z-10 hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-8 border-t border-white/10 glass-morphism rounded-2xl px-12">
            <div className="text-center">
              <div className="text-4xl font-headline font-black text-primary italic">50+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Modern Equipment</div>
            </div>
            <div className="h-12 w-px bg-white/10" />
            <div className="text-center">
              <div className="text-4xl font-headline font-black text-primary italic">500+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Active Members</div>
            </div>
            <div className="h-12 w-px bg-white/10" />
            <div className="text-center">
              <div className="text-4xl font-headline font-black text-primary italic">10+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Expert Trainers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
