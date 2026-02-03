import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Stats } from "@/components/stats"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Testimonials } from "@/components/testimonials"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
