// aluno/configuracoes/page.tsx
"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function ConfiguracoesAluno() {
  return (
    <div className="max-w-xl mx-auto py-10 px-4 space-y-6">
      <h1 className="text-2xl font-bold">Configurações da Conta</h1>
      <div className="space-y-2">
        <Label htmlFor="nome">Nome</Label>
        <Input id="nome" placeholder="Seu nome completo" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">E-mail</Label>
        <Input id="email" type="email" placeholder="seu@email.com" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="senha">Nova Senha</Label>
        <Input id="senha" type="password" placeholder="********" />
      </div>
      <Button className="mt-4">Salvar Alterações</Button>
    </div>
  );
}