"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function NovaTurma() {
  const [nome, setNome] = useState("");

  const handleCriar = () => {
    console.log("Criando turma:", nome);
    // Integração com backend aqui
  };

  return (
    <div className="max-w-lg mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Criar Nova Turma</h1>
      <Label htmlFor="nome">Nome da Turma</Label>
      <Input id="nome" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Turma A - 2025" />
      <Button className="mt-4" onClick={handleCriar}>Criar</Button>
    </div>
  );
}