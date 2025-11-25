import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const whatsappNumber = "5511999999999" // Substitua pelo seu número
  const message = "Olá! Gostaria de saber mais sobre os serviços de desenvolvimento de software."
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 group">
      <Button
        size="lg"
        className="rounded-full w-14 h-14 shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:scale-110"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="sr-only">Contato via WhatsApp</span>
      </Button>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg border border-border">
        Fale conosco
      </span>
    </a>
  )
}
