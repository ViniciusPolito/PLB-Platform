// turmas/[id]/atividades/nova/page.tsx
"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function NovaAtividade() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleCriar = () => {
    console.log("Criar atividade:", titulo, descricao);
    // Integração com backend aqui
  };

  return (
    <div className="max-w-lg mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Nova Atividade</h1>
      <Label htmlFor="titulo">Título</Label>
      <Input id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
      <Label htmlFor="descricao" className="mt-4">Descrição</Label>
      <Textarea id="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
      <Button className="mt-4" onClick={handleCriar}>Criar Atividade</Button>
    </div>
  );
}