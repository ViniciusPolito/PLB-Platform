// turmas/[id]/atividades/[atividadeId]/page.tsx
export default function DetalhesAtividade() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Detalhes da Atividade</h1>
      <p className="mb-2">Nome da Atividade: <strong>Problema da Água</strong></p>
      <p className="mb-4">Fases PBL (Walsh, 2005):</p>
      <ol className="list-decimal pl-5 space-y-2">
        <li>Apresentação do problema</li>
        <li>Identificação de fatos</li>
        <li>Discussão de hipóteses</li>
        <li>Levantamento do que precisa ser aprendido</li>
        <li>Distribuição de tarefas de pesquisa</li>
        <li>Discussão dos achados</li>
        <li>Síntese e avaliação</li>
      </ol>
    </div>
  );
}
