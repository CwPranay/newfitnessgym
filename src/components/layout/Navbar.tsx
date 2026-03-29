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

  // Scroll behavior
  React.useEffect(() => {
    const handleScroll = () => {
      if (!isOpen) {
        setScrolled(window.scrollY > 20)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isOpen])

  // Lock scroll
  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4 md:px-8",
          scrolled || isOpen
            ? "bg-background/90 backdrop-blur-md shadow-lg border-b border-white/5"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg">
              <Dumbbell className="w-6 h-6 text-background" />
            </div>
            <span className="font-headline font-bold text-xl uppercase italic">
              New Age <span className="text-primary">Fitness</span>
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm font-medium hover:text-primary uppercase">
                {link.name}
              </Link>
            ))}
            <Button asChild className="bg-accent font-bold">
              <Link href="https://wa.me/918425919590" target="_blank">
                JOIN NOW
              </Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden z-[70]"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="fixed inset-0 bg-background z-[60] md:hidden flex flex-col">
          
          {/* TOP BAR (with CLOSE button) */}
          <div className="flex justify-between items-center p-4 border-b border-white/10">
            <span className="font-bold">Menu</span>

            <button onClick={() => setIsOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* MENU CONTENT */}
          <div className="flex flex-col items-center justify-center flex-1 gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-2xl font-bold"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <Button asChild size="lg" className="w-[80%] bg-accent font-bold">
              <Link
                href="https://wa.me/918425919590"
                target="_blank"
                onClick={() => setIsOpen(false)}
              >
                JOIN NOW
              </Link>
            </Button>
          </div>
        </div>
      )}
    </>
  )
}