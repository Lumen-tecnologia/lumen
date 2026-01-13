import { Card, CardContent } from "@/components/ui/card"
import { Code2, Smartphone, Cloud, Zap,  Shield, Rocket } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Desenvolvimento Web",
    description: "Aplicações web modernas e escaláveis com as tecnologias mais recentes do mercado.",
  },
  {
    icon: Smartphone,
    title: "Apps Mobile",
    description: "Aplicativos nativos e híbridos para iOS e Android com UX excepcional.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Infraestrutura na nuvem otimizada com CI/CD e automação completa.",
  },
  {
    icon: Rocket,
    title: "Automações",
    description: "Automações envolvendo Planilhas e tratamento de dados, garatindo o ganho de performance no dia a dia da empresa.",
  },
  {
    icon: Zap,
    title: "APIs & Integrações",
    description: "Desenvolvimento de APIs RESTful e integrações com sistemas terceiros.",
  },
  {
    icon: Shield,
    title: "Segurança",
    description: "Implementação de melhores práticas de segurança e compliance.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Nossos{" "}
            <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Serviços
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluções completas em desenvolvimento de software para impulsionar seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-card/50 backdrop-blur"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
