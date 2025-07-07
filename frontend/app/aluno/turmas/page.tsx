// aluno/turmas/page.tsx
"use client";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function ListaTurmasAluno() {
  // Integração com backend para buscar turmas do aluno
  const turmas = [
    { id: "1", nome: "Turma de Biologia" },
    { id: "2", nome: "Turma de História" },
  ];

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Minhas Turmas</h1>
      <div className="grid gap-4">
        {turmas.map((turma) => (
          <Link href={`/aluno/turmas/${turma.id}`} key={turma.id}>
            <Card className="cursor-pointer hover:shadow-lg">
              <CardContent className="p-4 text-lg font-semibold">
                {turma.nome}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}