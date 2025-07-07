// aluno/turmas/[id]/page.tsx
"use client";
import { useParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AtividadesTurmaAluno() {
  const params = useParams();
  const idTurma = params?.id;

  // Integração com backend para buscar atividades da turma
  const atividades = [
    { id: "a1", titulo: "Problema 1" },
    { id: "a2", titulo: "Problema 2" },
  ];

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Atividades da Turma #{idTurma}</h1>
      <div className="grid gap-4">
        {atividades.map((a) => (
          <Card key={a.id}>
            <CardContent className="p-4 flex items-center justify-between">
              <span className="text-lg font-semibold">{a.titulo}</span>
              <Button variant="default">Resolver</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}