import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const IMAGES = [
  PlaceHolderImages.find(img => img.id === "gallery-1"),
  PlaceHolderImages.find(img => img.id === "gallery-2"),
  PlaceHolderImages.find(img => img.id === "gallery-3"),
  PlaceHolderImages.find(img => img.id === "gallery-4"),
]

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-4 italic">Our Space</h2>
          <h3 className="text-4xl md:text-5xl font-headline font-black uppercase mb-4 tracking-tighter">The <span className="text-primary italic">Gym</span> Floor</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a look at our clean, high-tech, and inspiring training environment.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {IMAGES.map((img, idx) => (
            <div key={idx} className={`relative overflow-hidden rounded-2xl group ${idx % 3 === 0 ? 'col-span-2 row-span-1 md:col-span-2' : ''}`}>
              <div className="aspect-video md:aspect-square relative overflow-hidden">
                <Image
                  src={img?.imageUrl || `https://picsum.photos/seed/gal${idx}/600/400`}
                  alt={img?.description || "Gym Gallery"}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  data-ai-hint="gym interior"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-primary font-bold">+</span>
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
