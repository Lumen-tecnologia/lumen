import { Code2 } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Code2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg">Lúmen Tecnologia</span>
          </div>

          <div className="text-center md:text-right text-sm text-muted-foreground">
            <p>© 2025 Lúmen Tecnologia. Todos os direitos reservados.</p>
            <p className="mt-1">Construindo o futuro da tecnologia</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
