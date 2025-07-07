// config/site.ts

export const siteConfig = {
  name: "PBL Platform",
  description: "Plataforma para gestão de aprendizagem baseada em problemas (PBL).",
}

export const navAluno = [
  { title: "Dashboard", href: "/aluno/dashboard" },
  { title: "Turmas", href: "/aluno/turmas" },
  { title: "Configurações", href: "/aluno/configuracoes" },
]

export const navProfessor = [
  { title: "Dashboard", href: "/professor/dashboard" },
  { title: "Turmas", href: "/professor/turmas" },
  { title: "Relatórios", href: "/professor/relatorios" },
  { title: "Configurações", href: "/professor/configuracoes" },
]
