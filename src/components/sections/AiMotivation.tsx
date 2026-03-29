"use client"

import * as React from "react"
import { Sparkles, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { generateFitnessMotivation } from "@/ai/flows/ai-fitness-motivation-flow"

export function AiMotivation() {
  const [motivation, setMotivation] = React.useState<string>("")
  const [loading, setLoading] = React.useState(true)

  const fetchMotivation = async (type?: "quote" | "tip") => {
    setLoading(true)
    try {
      const result = await generateFitnessMotivation({ type })
      setMotivation(result.motivation)
    } catch (error) {
      console.error("Failed to fetch motivation", error)
      setMotivation("Push yourself, because no one else is going to do it for you.")
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    fetchMotivation()
  }, [])

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto glass-morphism rounded-[2.5rem] p-8 md:p-16 border-primary/20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Sparkles className="w-32 h-32 text-primary" />
          </div>
          
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-8 italic">Daily AI Motivation</h2>
          
          <div className="min-h-[120px] flex items-center justify-center">
            {loading ? (
              <div className="flex flex-col items-center gap-4">
                <RefreshCw className="w-8 h-8 text-primary animate-spin" />
                <p className="text-muted-foreground animate-pulse font-medium">Brewing inspiration...</p>
              </div>
            ) : (
              <p className="text-2xl md:text-3xl lg:text-4xl font-headline font-black uppercase italic tracking-tighter leading-tight text-shadow">
                "{motivation}"
              </p>
            )}
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button 
              variant="outline" 
              onClick={() => fetchMotivation("quote")}
              disabled={loading}
              className="border-primary/50 hover:bg-primary/10 font-bold uppercase"
            >
              New Quote
            </Button>
            <Button 
              variant="outline" 
              onClick={() => fetchMotivation("tip")}
              disabled={loading}
              className="border-accent/50 hover:bg-accent/10 font-bold uppercase"
            >
              Get a Tip
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}