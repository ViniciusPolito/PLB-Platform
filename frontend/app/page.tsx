// app/page.tsx

import { Button } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container py-12">
      <div className="space-y-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Structura
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Plataforma desenvolvida para auxiliar professores universitários a planejarem e
          acompanharem projetos baseados na metodologia ativa Problem-Based Learning.
        </p>

        <div className="max-w-3xl mx-auto text-left space-y-6 pt-6">
          <div>
            <h2 className="text-2xl font-semibold">📘 O que é PBL?</h2>
            <p>
              A Problem-Based Learning (PBL) é uma
              metodologia ativa centrada no aluno, que estimula a investigação,
              o pensamento crítico e a autonomia por meio da resolução de
              problemas reais.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">🚀 Como a plataforma ajuda?</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Organize suas turmas e grupos com facilidade.</li>
              <li>Gerencie cada fase do ciclo PBL com registros claros.</li>
              <li>Realize avaliações com base em rubricas personalizadas.</li>
              <li>Gere relatórios de desempenho e participação.</li>
            </ul>
          </div>
        </div>

        <div className="pt-8">
          <Button asChild>
            <a href="/login">Começar Agora</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
