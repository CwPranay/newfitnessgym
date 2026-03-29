import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Plans } from "@/components/sections/Plans"
import { Trainers } from "@/components/sections/Trainers"
import { Reviews } from "@/components/sections/Reviews"
import { Gallery } from "@/components/sections/Gallery"
import { Contact } from "@/components/sections/Contact"
import { WhatsAppButton } from "@/components/ui/WhatsAppButton"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Plans />
      <Trainers />
      <Reviews />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
