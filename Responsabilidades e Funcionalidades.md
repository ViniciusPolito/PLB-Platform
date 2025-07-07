# 🎓 Documento de Design de Papéis e Fluxo de Trabalho da Plataforma ABP

## 📌 Visão Geral
Esta plataforma tem como objetivo apoiar o uso da metodologia ativa de **Aprendizagem Baseada em Problemas (ABP)** com o auxílio de Inteligência Artificial Generativa. A estrutura é baseada nas **7 fases do PBL definidas por Walsh (2005)**, da Universidade de McMaster, e os fluxos foram desenhados para contemplar a atuação de **professores, alunos e especialistas (chatbots com LLM)**.

---

## 👤 Papéis do Sistema

### 1. **Professor**
**Responsabilidades:**
- Criar e gerenciar turmas
- Criar atividades baseadas nas 7 fases do ABP
- Definir quais especialistas (IA) estarão disponíveis para cada fase da atividade
- Acompanhar e avaliar o progresso dos alunos
- Aplicar rubricas e exportar relatórios em PDF

**Funcionalidades disponíveis:**
- Dashboard de turmas e atividades
- Criação e edição de problemas
- Configuração de especialistas com nome, papel e contexto
- Avaliação com rubricas personalizadas por fase
- Exportação de relatórios

### 2. **Aluno**
**Responsabilidades:**
- Acessar a plataforma com código de turma ou convite
- Participar das atividades ABP seguindo as 7 fases
- Interagir com especialistas definidos pelo professor
- Registrar reflexões e entregas por fase

**Funcionalidades disponíveis:**
- Visualização da atividade e progresso nas fases
- Interface de chat com especialistas por fase
- Campos de escrita/reflexão por fase
- Visualização de feedback e notas do professor

### 3. **Especialista (IA)**
**Responsabilidades:**
- Simular papéis como cliente, mentor, gerente, cientista, entre outros
- Interagir com o aluno com base no contexto definido pelo professor
- Estimular pensamento crítico sem entregar respostas prontas

**Funcionalidades disponíveis:**
- Comportamento guiado por prompt + contexto (usando RAG ou embeddings)
- Restrições de conhecimento (não extrapolar papel)
- Registro de interações para consulta posterior pelo professor

---

## 🧱 Estrutura da Atividade ABP
Baseado nas 7 fases de Walsh (2005):

| Fase | Nome | Ação esperada do aluno |
|------|------|--------------------------|
| 1 | Identify the problem | Ler e compreender a situação apresentada |
| 2 | Explore pre-existing knowledge | Ativar conhecimentos prévios relevantes ao problema |
| 3 | Generate hypotheses and possible mechanisms | Formular hipóteses e mecanismos explicativos |
| 4 | Identify learning issues | Definir dúvidas e temas que precisam ser estudados |
| 5 | Self study | Realizar estudo independente sobre os temas identificados |
| 6 | Re-evaluation and application of new knowledge to the problem | Reavaliar o problema e aplicar o novo conhecimento adquirido |
| 7 | Assessment and reflection on learning | Refletir sobre o aprendizado e a experiência vivida |

**Observação:** Cada fase pode ter um ou mais especialistas configurados pelo professor (ex: Fase 1 com um cliente, Fase 3 com um mentor técnico).

---

## 🔄 Fluxo de Trabalho

### 🔹 Criação de uma atividade (Professor)
1. Cria nova turma
2. Define o problema a ser resolvido
3. Para cada uma das 7 fases:
   - Define texto orientador
   - Configura especialistas com nome, papel e prompt base
4. Publica atividade para a turma

### 🔹 Participação na atividade (Aluno)
1. Acessa a turma e visualiza a atividade
2. Para cada fase:
   - Lê o enunciado da fase
   - Interage com o(s) especialista(s)
   - Registra texto de resposta/reflexão
3. Avança até a Fase 7 e envia entrega final

### 🔹 Avaliação (Professor)
1. Acompanha respostas e interações em tempo real
2. Aplica rubricas personalizadas por fase
3. Gera feedback textual ou em nota
4. Exporta relatório em PDF por aluno ou grupo

---

## ✅ Considerações Técnicas
- As interações com os especialistas devem ser persistidas para rastreabilidade
- O backend deve permitir múltiplas instâncias de chat por fase
- A estrutura de permissão deve restringir ações conforme o papel (RBAC)
- Deve haver suporte a futuras funcionalidades como gamificação, feedback por pares, ou integração com LTI (Learning Tools Interoperability)
- O papel do usuário (aluno ou professor) será salvo inicialmente no `localStorage` após o login/cadastro, e acessado pelo frontend para renderizar componentes ou redirecionar rotas. No futuro, esse controle poderá ser centralizado via `Context API` ou `API`.

---

## 🗂️ Páginas Essenciais da Plataforma ABP

### 🔐 1. Página de Login
- Campo de email e senha para login tradicional
- Botão de redirecionamento para página de cadastro
- Link para recuperação de senha
- Botão de seleção de perfil (aluno ou professor)

### 🧑‍🏫 2. Dashboard do Professor
- Lista de turmas com botão "Criar nova turma"
- Acesso rápido a atividades, rubricas e relatórios
- Contador de alunos por turma e progresso médio por atividade

### 🧩 3. Criar/Editar Atividade ABP
- Formulário para nome e descrição da atividade
- Blocos para cada uma das 7 fases:
  - Texto orientador da fase
  - Adição de especialistas: nome, papel, prompt, e documentos auxiliares (RAG)
- Botão para salvar rascunho ou publicar

### 🧑‍🎓 4. Dashboard do Aluno
- Lista de atividades disponíveis por turma
- Barras de progresso por atividade
- Acesso direto à fase atual

### ↺ 5. Página da Atividade ABP (Aluno)
- Header com fases (1 a 7)
- Bloco com enunciado da fase
- Campo de resposta/reflexão (autoavaliação, registro de ideias)
- Botão "Conversar com Especialista"
- Botão "Avançar para próxima fase"

### 🧐 6. Página de Chat com Especialista
- Interface de chat estilo mensageiro
- Cabeçalho com nome do especialista, papel e contexto
- Possibilidade de anexar documentos (para especialistas que consultam arquivos)
- Histórico de conversa salvo por fase

### 📊 7. Página de Avaliação (Professor)
- Lista de alunos por atividade
- Acesso às respostas por fase e interações com especialistas
- Aplicar rubrica (cruzamento de critérios x níveis)
- Campo de feedback textual
- Botão "Exportar PDF"

### 📄 8. Página de Relatório Final
- Visão consolidada por aluno ou grupo:
  - Respostas por fase
  - Pontuações atribuídas
  - Feedbacks
- Opção para download em PDF

### ⚙️ 9. Página de Configurações
- Edição de dados pessoais
- Troca de senha
- Preferências de idioma e tema

### 🧪 10. Página de Teste de Especialistas (opcional)
- Ferramenta para o professor testar os especialistas criados
- Campo de prompt
- Campo de resposta simulada
- Opção de salvar como especialista para atividade
