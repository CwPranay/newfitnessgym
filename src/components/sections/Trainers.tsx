import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const TRAINERS = [
  {
    name: "Arjun Singh",
    role: "Strength & Conditioning",
    image: PlaceHolderImages.find(img => img.id === "trainer-1")?.imageUrl,
  },
  {
    name: "Priya Sharma",
    role: "Weight Loss Specialist",
    image: PlaceHolderImages.find(img => img.id === "trainer-2")?.imageUrl,
  },
  {
    name: "Vikram Raj",
    role: "Personal Training Head",
    image: PlaceHolderImages.find(img => img.id === "trainer-3")?.imageUrl,
  },
]

export function Trainers() {
  return (
    <section id="trainers" className="py-24 relative bg-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-4 italic">Our Experts</h2>
          <h3 className="text-4xl md:text-5xl font-headline font-black uppercase mb-4 tracking-tighter">Train with the <span className="text-primary italic">Best</span></h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our certified professionals are dedicated to helping you achieve your personal fitness goals with science-backed programs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRAINERS.map((trainer, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-3xl bg-card border border-white/5 transition-all duration-500">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={trainer.image || `https://picsum.photos/seed/trainer${idx}/400/500`}
                  alt={trainer.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  data-ai-hint="fitness trainer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-8 relative">
                <div className="absolute -top-6 left-8 h-12 w-12 bg-primary flex items-center justify-center rounded-lg shadow-xl group-hover:rotate-12 transition-transform">
                  <div className="text-background font-black text-xl italic leading-none">PT</div>
                </div>
                <h4 className="font-headline font-black text-2xl uppercase italic tracking-tighter mb-1">{trainer.name}</h4>
                <p className="text-primary text-sm font-bold uppercase tracking-widest">{trainer.role}</p>
                <div className="mt-6 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                    <span className="text-xs font-bold">IG</span>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                    <span className="text-xs font-bold">FB</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
