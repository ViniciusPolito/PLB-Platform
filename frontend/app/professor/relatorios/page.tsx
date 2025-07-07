// app/professor/relatorios/page.tsx
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function RelatoriosPage() {
  const [atividade, setAtividade] = useState('');
  const [turma, setTurma] = useState('');

  // Simulação de dados
  const atividades = ['Poluição Urbana', 'Desmatamento'];
  const turmas = ['Turma A', 'Turma B'];

  const handleExportar = () => {
    console.log('Exportar relatório para', turma, atividade);
    // Integração com backend para exportar PDF
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Relatórios e Avaliações</h1>

      <div className="flex flex-col gap-4 max-w-md">
        <Select onValueChange={setTurma}>
          <SelectTrigger>
            <SelectValue placeholder="Selecione a Turma" />
          </SelectTrigger>
          <SelectContent>
            {turmas.map((t) => (
              <SelectItem key={t} value={t}>{t}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={setAtividade}>
          <SelectTrigger>
            <SelectValue placeholder="Selecione a Atividade" />
          </SelectTrigger>
          <SelectContent>
            {atividades.map((a) => (
              <SelectItem key={a} value={a}>{a}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button onClick={handleExportar}>Exportar Relatório</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Avaliação por Fase</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Aqui você irá visualizar as respostas dos alunos, aplicar rubricas e gerar feedback.</p>
        </CardContent>
      </Card>
    </div>
  );
}