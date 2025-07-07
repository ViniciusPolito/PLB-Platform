'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    console.log("Autenticando:", { email, senha });

    // 🔗 INTEGRAÇÃO COM BACKEND AQUI:
    // Exemplo: await fetch("/api/login", { method: "POST", body: JSON.stringify({ email, senha }) })

    // Sucesso simulado
    // router.push("/dashboard"); // Redireciona para o dashboard

    // Aqui você vai usar apenas para teste
    const papel = email.includes("prof") ? "professor" : "aluno"
    localStorage.setItem("papel", papel)
    console.log("Usuário logado como:", papel)

    // Redirecionamento fictício
    if (papel === "professor") {
      window.location.href = "/professor/dashboard"
    } else {
      window.location.href = "/aluno/dashboard"
    }

  };

  const handleCadastro = () => {
    router.push("/register");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-sm shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Entrar na Plataforma</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="senha">Senha</Label>
            <Input
              id="senha"
              type="password"
              placeholder="********"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <Button className="w-full mt-4" onClick={handleLogin}>
            Entrar
          </Button>

          <div className="flex justify-between text-sm mt-2">
            <button
              className="text-blue-600 hover:underline"
              onClick={handleCadastro}
            >
              Criar uma conta
            </button>

            <span className="text-gray-500 cursor-not-allowed">
              Esqueci minha senha
            </span>
            {/* 🔗 Aqui futuramente podemos integrar com backend para recuperação de senha */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
