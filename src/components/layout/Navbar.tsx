"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, Dumbbell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Plans", href: "#plans" },
  { name: "Trainers", href: "#trainers" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4 md:px-8",
        scrolled ? "bg-background/90 backdrop-blur-md shadow-lg border-b border-white/5 py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-1.5 rounded-lg group-hover:bg-accent transition-colors">
            <Dumbbell className="w-6 h-6 text-background" />
          </div>
          <span className="font-headline font-bold text-xl tracking-tight uppercase italic">
            New Age <span className="text-primary">Fitness</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider"
            >
              {link.name}
            </Link>
          ))}
          <Button asChild variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
            <Link href="https://wa.me/918425919590" target="_blank">JOIN NOW</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-[72px] bg-background/95 backdrop-blur-lg z-40 md:hidden transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 p-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-2xl font-headline font-bold hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 font-bold text-lg h-14">
            <Link href="https://wa.me/918425919590" target="_blank" onClick={() => setIsOpen(false)}>
              JOIN NOW
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
