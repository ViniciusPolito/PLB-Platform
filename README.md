# Structura – Plataforma PBL (Problem-based learning)

Plataforma educacional desenvolvida com o objetivo de aplicar a metodologia ativa de **Problem-Based Learning (PBL)**, promovendo a aprendizagem a partir da solução de problemas reais. Utiliza **FastAPI** no backend e **Next.js + Tailwind CSS + ShadCN UI** no frontend.

---

## 🚀 Tecnologias Utilizadas

- **Frontend:** Next.js, Tailwind CSS, ShadCN UI
- **Backend:** FastAPI (Python)
- **Ambiente de Desenvolvimento:** Docker, DevContainer, VS Code
- **Orquestração:** Docker Compose

---

## 📁 Estrutura do Projeto

```bash
.
├── .devcontainer/     → Definição dos containers de desenvolvimento
│   └── devcontainer.json
├── backend/           → API FastAPI
├── frontend/          → App Next.js com ShadCN
├── docker-compose.yml
````

---

## ⚙️ Como rodar o frontend localmente (sem DevContainer)

### ✅ Pré-requisitos

* [Node.js](https://nodejs.org/) (v18 ou superior recomendado)
* [npm](https://www.npmjs.com/) ou [pnpm](https://pnpm.io/) (v7+)

### 🧪 Passos

1. **Instale as dependências do frontend**

```bash
cd frontend
npm install
```

2. **Rode o servidor de desenvolvimento**

```bash
npm run dev
```

3. **Acesse o app:**

[http://localhost:3000](http://localhost:3000)

> 🔧 Obs: Essa opção roda **somente o frontend**, ideal para desenvolvimento rápido da interface. A API pode ser mockada ou configurada depois.

---

## 🐳 Como rodar com DevContainer (modo completo)

### ✅ Pré-requisitos

* [Docker Desktop](https://www.docker.com/products/docker-desktop/)
* [Visual Studio Code](https://code.visualstudio.com/)
* Extensão: **Dev Containers** (antiga "Remote - Containers")

### 🧭 Passos

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/structura.git
cd structura
```

2. **Abra o VS Code e selecione “Reabrir no Container”**

O VS Code detectará o `.devcontainer/` e inicializará os serviços `frontend` e `backend`.

3. **Acesse as aplicações:**

* Frontend: [http://localhost:3000](http://localhost:3000)
* Backend (API): [http://localhost:8000/docs](http://localhost:8000/docs)

---

## 🧰 Scripts úteis (dentro dos containers ou localmente)

### Frontend

```bash
cd frontend
npm run dev
```

### Backend

```bash
cd backend
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

---

## 🧠 Sobre a plataforma

A Structura foi criada para apoiar professores e instituições na **implementação da metodologia PBL**, oferecendo ferramentas para organizar:

* Problemas e desafios por turma
* Acompanhamento de grupos de alunos
* Avaliação com base em critérios e rubricas
* Relatórios e feedback contínuo

---

## 👨‍🔬 Autor

**Vinicius Polito**
Desenvolvedor Fullstack | Engenheiro de Dados | IA aplicada à educação

---