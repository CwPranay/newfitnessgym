import Link from "next/link"
import { Dumbbell, Instagram, Facebook, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary p-1.5 rounded-lg">
                <Dumbbell className="w-6 h-6 text-background" />
              </div>
              <span className="font-headline font-bold text-xl tracking-tight uppercase italic">
                New Age <span className="text-primary">Fitness</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              A premium unisex gym in Kalyan East dedicated to providing the best fitness experience with modern equipment and expert guidance.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-headline font-bold uppercase mb-6 tracking-widest text-primary text-sm italic">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#about" className="text-muted-foreground hover:text-white transition-colors text-sm uppercase font-medium">About Us</Link></li>
              <li><Link href="#plans" className="text-muted-foreground hover:text-white transition-colors text-sm uppercase font-medium">Memberships</Link></li>
              <li><Link href="#trainers" className="text-muted-foreground hover:text-white transition-colors text-sm uppercase font-medium">Our Trainers</Link></li>
              <li><Link href="#gallery" className="text-muted-foreground hover:text-white transition-colors text-sm uppercase font-medium">Gallery</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-white transition-colors text-sm uppercase font-medium">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold uppercase mb-6 tracking-widest text-primary text-sm italic">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start text-sm">
                <Phone className="w-4 h-4 text-primary mt-0.5" />
                <Link href="tel:+918425919590" className="text-muted-foreground hover:text-white transition-colors">8425919590</Link>
              </li>
              <li className="flex gap-3 items-start text-sm">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-muted-foreground leading-relaxed">
                  Shop No. 02, Kulswamini Paradise, <br />
                  Kalyan East, Mumbai 421306
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold uppercase mb-6 tracking-widest text-primary text-sm italic">Newsletter</h4>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Get fitness tips and gym updates delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full outline-none focus:border-primary transition-colors"
              />
              <button className="bg-primary text-background px-4 rounded-lg font-bold text-xs uppercase hover:bg-primary/90 transition-colors">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-xs font-medium uppercase tracking-widest">
            © {new Date().getFullYear()} NEW AGE FITNESS UNISEX GYM. ALL RIGHTS RESERVED.
          </p>
          <p className="text-muted-foreground text-[10px] uppercase tracking-[0.2em] italic font-black">
            Kalyan East's #1 Fitness Destination.
          </p>
        </div>
      </div>
    </footer>
  )
}
