export function Stats() {
  const stats = [
    { value: "100%", label: "Atenção ao projeto" },
    { value: "99%", label: "Satisfação dos Clientes" },
    { value: "1:1", label: "Contato direto com o desenvolvedor" },
    { value: "On-time", label: "Entregas no prazo" },
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
