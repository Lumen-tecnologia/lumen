"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Quote, Star, X, Building2, Calendar, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Carlos Mendes",
    role: "CEO",
    company: "TechVentures Brasil",
    avatar: "CM",
    rating: 5,
    shortText: "Transformaram completamente nossa operação digital. A equipe é excepcional!",
    fullText: "A Lumen transformou completamente nossa operação digital. Antes, tínhamos sistemas legados que não conversavam entre si e processos manuais que tomavam horas. Em apenas 4 meses, eles desenvolveram uma plataforma integrada que automatizou 80% dos nossos processos. A equipe é excepcional - sempre disponível, proativa e com soluções criativas para cada desafio.",
    project: "Plataforma de Gestão Integrada",
    duration: "4 meses",
    results: ["80% de automação", "Redução de 60% em custos operacionais", "Integração com 12 sistemas"],
  },
  {
    id: 2,
    name: "Ana Beatriz",
    role: "CTO",
    company: "FinanceApp",
    avatar: "AB",
    rating: 5,
    shortText: "Entregaram um app que superou todas as expectativas de performance e UX.",
    fullText: "Precisávamos de um aplicativo financeiro que fosse seguro, rápido e intuitivo. A Lumen não só atendeu, como superou todas as expectativas. O app tem nota 4.9 nas lojas e nossos usuários elogiam constantemente a experiência. A comunicação durante o projeto foi impecável - daily meetings, relatórios semanais e total transparência no processo.",
    project: "Aplicativo Mobile de Finanças Pessoais",
    duration: "6 meses",
    results: ["Nota 4.9 nas lojas", "200k downloads no primeiro mês", "99.9% de uptime"],
  },
  {
    id: 3,
    name: "Roberto Silva",
    role: "Diretor de TI",
    company: "LogiTrans",
    avatar: "RS",
    rating: 5,
    shortText: "Sistema de rastreamento que revolucionou nossa logística nacional.",
    fullText: "O sistema de rastreamento desenvolvido pela Lumen revolucionou nossa logística. Conseguimos monitorar toda a frota em tempo real, otimizar rotas automaticamente e reduzir custos com combustível em 25%. O suporte pós-implementação também é excelente - qualquer ajuste é feito rapidamente.",
    project: "Sistema de Rastreamento e Otimização de Frotas",
    duration: "5 meses",
    results: ["25% menos custos com combustível", "Rastreamento de 500+ veículos", "Otimização automática de rotas"],
  },
  {
    id: 4,
    name: "Marina Costa",
    role: "Head de Produto",
    company: "EduTech Solutions",
    avatar: "MC",
    rating: 5,
    shortText: "Plataforma de ensino que já impacta milhares de estudantes.",
    fullText: "Buscávamos um parceiro que entendesse de educação e tecnologia. A Lumen desenvolveu uma plataforma de ensino online completa, com gamificação, analytics avançados e integração com ferramentas de videoconferência. Hoje atendemos mais de 50 mil estudantes e a plataforma é reconhecida como referência no setor.",
    project: "Plataforma de Ensino Online",
    duration: "8 meses",
    results: ["50k+ estudantes ativos", "NPS de 87", "Prêmio de inovação educacional"],
  },
  {
    id: 5,
    name: "Fernando Alves",
    role: "Fundador",
    company: "HealthConnect",
    avatar: "FA",
    rating: 5,
    shortText: "Software médico aprovado pela ANVISA em tempo recorde.",
    fullText: "Desenvolver software para saúde é complexo por conta das regulamentações. A Lumen já tinha experiência no setor e nos guiou por todo o processo. O software foi aprovado pela ANVISA em tempo recorde e hoje é usado em mais de 200 clínicas. A atenção aos detalhes de segurança e compliance foi impressionante.",
    project: "Sistema de Gestão Clínica",
    duration: "10 meses",
    results: ["Aprovação ANVISA", "200+ clínicas usando", "Zero incidentes de segurança"],
  },
  {
    id: 6,
    name: "Patricia Lemos",
    role: "VP de Operações",
    company: "RetailMax",
    avatar: "PL",
    rating: 5,
    shortText: "E-commerce que triplicou nossas vendas online em 6 meses.",
    fullText: "A migração do nosso e-commerce antigo parecia impossível - tínhamos 50 mil produtos e integrações complexas. A Lumen fez uma transição suave, sem downtime, e o novo sistema é infinitamente melhor. As vendas online triplicaram em 6 meses e a taxa de conversão aumentou 40%. Recomendo fortemente!",
    project: "Plataforma E-commerce Enterprise",
    duration: "7 meses",
    results: ["3x mais vendas online", "+40% taxa de conversão", "50k produtos migrados"],
  },
]

export function Testimonials() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const expandedTestimonial = testimonials.find((t) => t.id === expandedId)

  return (
    <section id="depoimentos" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            O que nossos{" "}
            <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              clientes
            </span>{" "}
            dizem
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Histórias reais de empresas que transformaram seus negócios com nossas soluções
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              onClick={() => setExpandedId(testimonial.id)}
              className={cn(
                "group cursor-pointer transition-all duration-300",
                "hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10",
                "bg-card/50 backdrop-blur relative overflow-hidden",
                "hover:-translate-y-1"
              )}
            >
              <CardContent className="p-6">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                {/* Short testimonial */}
                <p className="text-foreground/90 mb-6 leading-relaxed">"{testimonial.shortText}"</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-sm font-semibold text-white">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-muted-foreground text-xs">
                      {testimonial.role} @ {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Click hint */}
                <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  <span>Ver caso completo</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Expanded Modal */}
      {expandedTestimonial && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setExpandedId(null)}
        >
          <div
            className="bg-card border border-border rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-primary/20 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-card/95 backdrop-blur border-b border-border p-6 flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-lg font-bold text-white">
                  {expandedTestimonial.avatar}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{expandedTestimonial.name}</h3>
                  <p className="text-muted-foreground">
                    {expandedTestimonial.role} @ {expandedTestimonial.company}
                  </p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(expandedTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setExpandedId(null)}
                className="rounded-full hover:bg-primary/10"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Full testimonial */}
              <div className="relative">
                <Quote className="w-10 h-10 text-primary/20 absolute -top-2 -left-2" />
                <p className="text-lg leading-relaxed pl-6">{expandedTestimonial.fullText}</p>
              </div>

              {/* Project details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-secondary/50 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Building2 className="w-4 h-4" />
                    <span className="text-sm">Projeto</span>
                  </div>
                  <p className="font-medium">{expandedTestimonial.project}</p>
                </div>
                <div className="bg-secondary/50 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Duração</span>
                  </div>
                  <p className="font-medium">{expandedTestimonial.duration}</p>
                </div>
              </div>

              {/* Results */}
              <div>
                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">
                  Resultados Alcançados
                </h4>
                <div className="flex flex-wrap gap-2">
                  {expandedTestimonial.results.map((result, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-400/10 border border-primary/20 text-sm font-medium"
                    >
                      {result}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="border-t border-border p-6 bg-gradient-to-r from-purple-500/5 to-cyan-400/5">
              <p className="text-sm text-muted-foreground mb-3">
                Quer resultados semelhantes para sua empresa?
              </p>
              <Button
                className="w-full bg-gradient-to-r from-purple-500 to-cyan-400 hover:from-purple-600 hover:to-cyan-500 text-white font-semibold"
                onClick={() => {
                  setExpandedId(null)
                  document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Fale com nossa equipe
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
