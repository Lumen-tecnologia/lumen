import { Button } from "@/components/ui/button"
import { Code2, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-mono">Inovação em Software</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance animate-fade-in-up">
          Transformamos{" "}
          <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent inline-block">
            Ideias
          </span>
          <br />
          em Software
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up [animation-delay:200ms]">
          Somos uma fábrica de software de ponta que desenvolve soluções tecnológicas personalizadas para empresas que
          buscam inovação e excelência.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up [animation-delay:400ms]">
          <Button size="lg" className="text-lg px-8 py-6 group">
            <a href="#contato" className="flex items-center gap-2">
              Iniciar Projeto
              <Code2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
            <a href="#servicos">Ver Serviços</a>
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 rounded-full blur-[128px] animate-pulse [animation-delay:1s]" />
    </section>
  )
}
