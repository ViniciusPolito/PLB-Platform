// app/professor/turmas/[id]/page.tsx

"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function DetalhesTurmaPage({
  params,
}: {
  params: { id: string }
}) {
  const router = useRouter()

  const handleVerAtividades = () => {
    router.push(`/professor/turmas/${params.id}/atividades`)
  }

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Detalhes da Turma #{params.id}</h1>

      <div className="space-x-4">
        <Button onClick={handleVerAtividades}>
          Ver Atividades
        </Button>

        <Button variant="secondary" disabled>
          Gerenciar Alunos {/* Integração futura */}
        </Button>
      </div>

      {/* Aqui você pode adicionar cards ou resumos da turma futuramente */}
    </div>
  )
}
