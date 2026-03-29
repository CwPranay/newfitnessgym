import { Star, Quote } from "lucide-react"

const REVIEWS = [
  {
    text: "Quality service, clean environment, and helpful team. Best gym in Kalyan East.",
    author: "Rahul M.",
    rating: 5,
  },
  {
    text: "Great gym with friendly trainers and welcoming atmosphere. Equipment is top notch.",
    author: "Sameer K.",
    rating: 5,
  },
  {
    text: "Equipment is well maintained and hygienic. Highly recommended for beginners.",
    author: "Neha P.",
    rating: 5,
  },
]

export function Reviews() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-4 italic">Success Stories</h2>
            <h3 className="text-4xl md:text-5xl font-headline font-black uppercase tracking-tighter">Real People, <span className="text-accent italic">Real Results</span></h3>
          </div>
          <div className="flex items-center gap-4 bg-white/5 px-6 py-4 rounded-2xl border border-white/10">
            <div className="text-center">
              <div className="text-3xl font-headline font-black text-primary">5.0</div>
              <div className="flex text-primary gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div className="text-muted-foreground text-sm font-medium leading-tight">
              Average rating based <br />on 150+ reviews
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <div key={idx} className="relative p-10 rounded-3xl bg-secondary/30 border border-white/5 hover:border-primary/20 transition-colors group">
              <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
              <div className="flex mb-6 gap-0.5 text-primary">
                {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-lg text-foreground/90 italic mb-8 leading-relaxed font-medium">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                  {review.author[0]}
                </div>
                <div className="font-headline font-bold uppercase tracking-wide">{review.author}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}