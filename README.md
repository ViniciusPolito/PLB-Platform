# Plataforma PBL (Problem-based learning)

Plataforma educacional desenvolvida com o objetivo de aplicar a metodologia de Problem-based learning (PBL), com backend em FastAPI e frontend em Next.js + Tailwind CSS + ShadCN.

---

## 🚀 Tecnologias Utilizadas

- **Frontend:** Next.js, Tailwind CSS, ShadCN UI
- **Backend:** FastAPI (Python)
- **Ambiente de Desenvolvimento:** Docker, DevContainer, VS Code
- **Orquestração:** Docker Compose

---

## 🧑‍💻 Como rodar localmente com DevContainer

### ✅ Pré-requisitos

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Visual Studio Code](https://code.visualstudio.com/)
- Extensão: **Remote - Containers** (ou Dev Containers)

---

### 🧱 Estrutura do Projeto

```

.
├── .devcontainer/
│   └── devcontainer.json
├── backend/         → API FastAPI
├── frontend/        → App Next.js + ShadCN
├── docker-compose.yml

````

---

### 🏁 Passo a passo

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/seu-projeto.git
cd seu-projeto
````

2. **Abra no VS Code e selecione "Reabrir no Container"**

O VS Code detectará o `.devcontainer` e iniciará os containers `backend` e `frontend`.

3. **Acesse a aplicação**

* Frontend: [http://localhost:3000](http://localhost:3000)
* Backend (API): [http://localhost:8000/docs](http://localhost:8000/docs)

---

## 📦 Scripts úteis

Você pode rodar comandos diretamente dentro do container.

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

## 👨‍🔬 Autor

Vinicius Polito
