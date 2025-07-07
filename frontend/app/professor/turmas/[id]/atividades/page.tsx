"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ListaAtividadesProfessor() {
  const params = useParams();
  const idTurma = params?.id;

  const atividades = [
    { id: "a1", titulo: "Atividade 1" },
    { id: "a2", titulo: "Atividade 2" },
  ];

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Atividades da Turma #{idTurma}</h1>
        <Link href={`/professor/turmas/${idTurma}/atividades/nova`}>
          <Button>Nova Atividade</Button>
        </Link>
      </div>
      <div className="grid gap-4">
        {atividades.map((atividade) => (
          <Card key={atividade.id}>
            <CardContent className="p-4 flex items-center justify-between">
              <span className="text-lg font-semibold">{atividade.titulo}</span>
              <Link href={`/professor/turmas/${idTurma}/atividades/${atividade.id}`}>
                <Button variant="secondary">Ver Detalhes</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
