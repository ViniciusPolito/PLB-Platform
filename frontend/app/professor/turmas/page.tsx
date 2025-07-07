"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ListaTurmas() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Minhas Turmas</h1>
        <Link href="/professor/turmas/nova">
          <Button className="bg-primary text-white">Nova Turma</Button>
        </Link>
      </div>
      <div className="grid gap-4">
        {/* Simulação de turmas */}
        {[1, 2, 3].map((id) => (
          <Link key={id} href={`/professor/turmas/${id}`} className="block border p-4 rounded hover:bg-gray-50">
            <h2 className="text-xl font-semibold">Turma {id}</h2>
            <p className="text-sm text-muted-foreground">Clique para ver detalhes e atividades</p>
          </Link>
        ))}
      </div>
    </div>
  );
}