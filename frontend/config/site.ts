// config/site.ts

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "PBL Platform",
  description:
    "Plataforma para gestão de aprendizagem baseada em problemas (PBL).",
  mainNav: [
    {
      title: "Início",
      href: "/",
    },
    {
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      title: "Alunos",
      href: "/alunos",
    },
    {
      title: "Relatórios",
      href: "/relatorios",
    },
    {
      title: "Configurações",
      href: "/configuracoes",
    },
  ],
  links: {
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
