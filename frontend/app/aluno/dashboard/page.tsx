// aluno/dashboard/page.tsx
"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DashboardAluno() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Painel do Aluno</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Link href="/aluno/turmas">
          <Button className="w-full h-32 text-xl shadow-md">Minhas Turmas</Button>
        </Link>
        <Link href="/aluno/configuracoes">
          <Button className="w-full h-32 text-xl shadow-md">Configurações</Button>
        </Link>
      </div>
    </div>
  );
}