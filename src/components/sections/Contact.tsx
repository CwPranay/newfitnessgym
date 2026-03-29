import { MapPin, Phone, MessageCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background/50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-4 italic">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-headline font-black uppercase mb-10 tracking-tighter italic">Ready to <span className="text-accent italic">Join</span>?</h3>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-primary border border-white/5 shadow-lg flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-headline font-bold uppercase mb-2">Location</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Shop No. 02, Kulswamini Paradise, <br />
                    Kalyan East, Mumbai, <br />
                    Maharashtra 421306
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-primary border border-white/5 shadow-lg flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-headline font-bold uppercase mb-2">Phone</h4>
                  <p className="text-muted-foreground">
                    <Link href="tel:+918425919590" className="hover:text-primary transition-colors">+91 8425919590</Link>
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-[#25D366] border border-white/5 shadow-lg flex-shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-headline font-bold uppercase mb-2">WhatsApp</h4>
                  <p className="text-muted-foreground">
                    Direct chat with our team for enrollment.
                  </p>
                  <Link href="https://wa.me/918425919590" target="_blank" className="text-primary font-bold hover:underline mt-2 inline-block">
                    Click to Open Chat
                  </Link>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-primary border border-white/5 shadow-lg flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-headline font-bold uppercase mb-2">Gym Hours</h4>
                  <p className="text-muted-foreground">
                    Mon - Sat: 5:00 AM - 11:00 PM <br />
                    Sun: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="h-full min-h-[400px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
              {/* Google Map Placeholder - In production use real Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.123!2d73.1345!3d19.2312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7958567!2sKalyan%20East%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80"
              ></iframe>
              <div className="absolute top-4 left-4 right-4 p-4 glass-morphism rounded-xl flex items-center justify-between">
                <div className="font-headline font-bold text-xs uppercase tracking-wider">Our Location in Kalyan East</div>
                <Button variant="link" className="text-primary p-0 h-auto text-xs font-bold uppercase">Open Maps</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}