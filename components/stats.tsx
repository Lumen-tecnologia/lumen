export function Stats() {
  const stats = [
    { value: "150+", label: "Projetos Concluídos" },
    { value: "98%", label: "Satisfação dos Clientes" },
    { value: "50+", label: "Clientes Ativos" },
    { value: "8x", label: "Mais Rápido no Deploy" },
  ]

  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 font-mono">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
